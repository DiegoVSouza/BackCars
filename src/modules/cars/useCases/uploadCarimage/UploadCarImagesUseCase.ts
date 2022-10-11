import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { CarImage } from "../../../../shared/infra/typeorm/entities/CarImage";
import { ICarsImageRepository } from "../../repositories/interfaces/ICarsImageRepository";
import { ICarsRepository } from "../../repositories/interfaces/ICarsRepository";

interface IRequest {
    car_id: string;
    images: IFiles[];
}


interface IFiles {
    url: string
    title: string
}

@injectable()
class UploadCarImagesUseCase {
    constructor(
        @inject("CarsImageRepository")
        private carsImageRepository: ICarsImageRepository,
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) { }
    async execute({ car_id, images }: IRequest): Promise<void> {

        const carExists = await this.carsRepository.findById(car_id)
        if (!carExists) throw new AppError("Cars does not exists")

        images.map(async image => {
            await this.carsImageRepository.create(car_id, image.title, image.url)
        })
    }
}

export { UploadCarImagesUseCase }