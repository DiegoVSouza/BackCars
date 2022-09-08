import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { Car } from "../../../../shared/infra/prisma/entities/Car"
import { ICarsRepository } from "../../repositories/interfaces/ICarsRepository"

interface IRequest {
    name: string,
    description: string,
    price: number,
    license_plate: string,
    brand: string,
    category_id: string
}

@injectable()
class CreateCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) { }

    async execute({ name, description, price, license_plate, brand, category_id }: IRequest): Promise<Car> {
        const carAlredyExists = await this.carsRepository.findByLicensePlate(license_plate)

        if (carAlredyExists) throw new AppError("Car already exists")

        const car = await this.carsRepository.create({ name, description, category_id, price, brand, license_plate })

        return car
    }
}

export { CreateCarUseCase }