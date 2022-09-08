import { prisma } from "../../../../../shared/infra/prisma/prisma";
import { CarImage } from "../../../../../shared/infra/prisma/entities/CarImage";
import { ICarsImageRepository } from "../../../repositories/interfaces/ICarsImageRepository";

class CarsImageRepository implements ICarsImageRepository {

    async create(car_id: string, images_name: string): Promise<CarImage> {
        const carImage = prisma.carImage.create({
            data: {
                car_id,
                images_name
            }
        })
        return carImage
    }
}
export { CarsImageRepository }