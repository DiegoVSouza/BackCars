import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { Car } from "../../../../shared/infra/prisma/entities/Car"
import { ICarsRepository } from "../../repositories/interfaces/ICarsRepository"

interface IRequest {
    car_id: string,
}

@injectable()
class DeleteCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) { }

    async execute({ car_id }: IRequest): Promise<void> {
        const carAlredyExists = await this.carsRepository.findById(car_id)
        if (!carAlredyExists) throw new AppError("Car does not exists")
        await this.carsRepository.deleteCar(car_id)

    }
}

export { DeleteCarUseCase }