import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CarImage } from "../../../../shared/infra/typeorm/entities/CarImage";
import { ICarsImageRepository } from "../../repositories/interfaces/ICarsImageRepository";
import { ICarsRepository } from "../../repositories/interfaces/ICarsRepository";

interface IRequest {
    id?: string;
    car_id?: string;
}

@injectable()
class ListCarImagesUseCase {
    constructor(
        @inject("CarsImageRepository")
        private carsImageRepository: ICarsImageRepository,
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) { }
    async execute({ car_id, id }: IRequest): Promise<CarImage[]> {

        const carExists = await this.carsRepository.findById(car_id)
        if (!carExists) throw new AppError("Cars does not exists")
        const listImages = await this.carsImageRepository.list(car_id, id)
        return listImages
    }
}

export { ListCarImagesUseCase }