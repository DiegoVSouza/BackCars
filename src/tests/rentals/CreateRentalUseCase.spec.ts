import dayjs from "dayjs"
import { RentalsRepositoryInMemory } from "../../modules/rentals/repositories/in-memory/RentalRepositoryInMemory"
import { CreateRentalUseCase } from "../../modules/rentals/useCases/createRental/CreateRentalUseCase"
import { DayjsDateProvider } from "../../shared/container/providers/DateProvider/implementations/DayjsDateProvider"
import { AppError } from "../../shared/errors/AppError"

let createRentalUseCase: CreateRentalUseCase
let rentalsRepositoryInMemory: RentalsRepositoryInMemory
let dateProvider: DayjsDateProvider
describe("Create Rental", () => {
    const dayAdd24hours = dayjs().add(1, 'day').toDate()
    beforeEach(() => {
        dateProvider = new DayjsDateProvider()
        rentalsRepositoryInMemory = new RentalsRepositoryInMemory()
        createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory, dateProvider)
    })

    it("should be able to create a new rental", async () => {

        const rental = await createRentalUseCase.execute({ car_id: "123", expected_return_date: dayAdd24hours, user_id: "123" })

        expect(rental).toHaveProperty("id")
        expect(rental).toHaveProperty("start_date")
    })
    it("shouln`t be able to create a new rental if exist a open rental for the same user", async () => {
        expect(async () => {

            const rental = await createRentalUseCase.execute({ car_id: "123", expected_return_date: dayAdd24hours, user_id: "123" })
            const anotherRental = await createRentalUseCase.execute({ car_id: "123", expected_return_date: dayAdd24hours, user_id: "123" })
        }).rejects.toBeInstanceOf(AppError)

    })
    it("shouln`t be able to create a new rental if exist a open rental for the same car", async () => {
        expect(async () => {

            const rental = await createRentalUseCase.execute({ car_id: "123", expected_return_date: dayAdd24hours, user_id: "333" })
            const anotherRental = await createRentalUseCase.execute({ car_id: "123", expected_return_date: dayAdd24hours, user_id: "222" })
        }).rejects.toBeInstanceOf(AppError)
    })
    it("shouln`t be able to create a new rental with invalid return time", async () => {
        expect(async () => {
            const rental = await createRentalUseCase.execute({ car_id: "123", expected_return_date: new Date(), user_id: "333" })

        }).rejects.toBeInstanceOf(AppError)
    })

})