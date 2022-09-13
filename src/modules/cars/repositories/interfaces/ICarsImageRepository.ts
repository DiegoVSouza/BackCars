import { CarImage } from "../../../../shared/infra/typeorm/entities/CarImage";

interface ICarsImageRepository {
    create(car_id: string, image_name: string, path: string): Promise<CarImage>;
    list(car_id?: string, id?: string): Promise<CarImage[]>;
}

export { ICarsImageRepository }