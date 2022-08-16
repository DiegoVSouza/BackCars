import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { Car } from "../../../../shared/infra/typeorm/entities/Car"
import { ICarsRepository } from "../../repositories/interfaces/ICarsRepository"
import { ISpecificationRepository } from "../../repositories/interfaces/ISpecificationRepository"

interface IRequest {
    car_id: string,
    specifications_id: string[]
}
@injectable()
class CreateCarSpecificationsUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository,
        @inject("SpecificationsRepository")
        private specificationRepository: ISpecificationRepository
    ) { }
    async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
        const carExists = await this.carsRepository.findById(car_id)
        if (!carExists) throw new AppError("Cars does not exist ")
        const specifications = await this.specificationRepository.findByIds(specifications_id)
        carExists.specifications = specifications
        await this.carsRepository.create(carExists)
        return carExists
    }
}

export { CreateCarSpecificationsUseCase }