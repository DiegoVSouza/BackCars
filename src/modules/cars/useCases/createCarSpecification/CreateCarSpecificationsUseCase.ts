import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { ICarsRepository } from "../../repositories/interfaces/ICarsRepository"

interface IRequest {
    car_id: string,
    specification_id: string[]
}
@injectable()
class CreateCarsSpecificationUseCase {
    constructor(
        // @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) { }
    async execute({ car_id, specification_id }: IRequest): Promise<void> {
        const carExists = await this.carsRepository.findById(car_id)
        if (!carExists) throw new AppError("Cars does not exist ")
        carExists.specifications
    }
}

export { CreateCarsSpecificationUseCase }