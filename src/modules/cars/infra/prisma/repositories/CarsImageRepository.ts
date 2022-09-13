import { prisma } from "../../../../../shared/infra/prisma/prisma";
import { ICarsImageRepository } from "../../../repositories/interfaces/ICarsImageRepository";
import { CarImage } from "../../../../../shared/infra/prisma/entities/CarImage";

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
    async list(car_id?: string, id?: string): Promise<CarImage[]> {
        const imagesFilter = await prisma.carImage.findMany({
            where: {
                id,
                car_id
            }
        })

        return imagesFilter
    }
}
export { CarsImageRepository }