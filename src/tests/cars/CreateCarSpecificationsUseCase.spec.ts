import { CarsRepositoryInMemory } from "../../modules/cars/repositories/in-memory/CarsRepositoryInMemory"
import { CreateCarsSpecificationUseCase } from "../../modules/cars/useCases/createCarSpecification/CreateCarSpecificationsUseCase"
import { AppError } from "../../shared/errors/AppError"

let createCarsSpecificationUseCase: CreateCarsSpecificationUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("Create Car Specification", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarsSpecificationUseCase = new CreateCarsSpecificationUseCase(carsRepositoryInMemory)
    })
    it("should not be able to add new specification to a not-existent car ", async () => {
        expect(async () => {
            const car_id = '123'
            const specification_id = ["123", "123"]
            await createCarsSpecificationUseCase.execute({ car_id, specification_id })
        }).rejects.toBeInstanceOf(AppError)

    })
    it("should be able to add new specification to a car ", async () => {

        const specification_id = ["123", "123"]
        const car = await carsRepositoryInMemory.create({
            name: "car01",
            description: "description01",
            daily_rate: 100,
            license_plate: "AAAA",
            fine_amount: 50,
            brand: "Nome",
            category_id: "123"
        })

        await createCarsSpecificationUseCase.execute({ car_id: car.id, specification_id })

    })
})