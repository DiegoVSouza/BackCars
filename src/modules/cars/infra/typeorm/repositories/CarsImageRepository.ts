import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm/dataSourceConfig";
import { CarImage } from "../../../../../shared/infra/typeorm/entities/CarImage";
import { ICarsImageRepository } from "../../../repositories/interfaces/ICarsImageRepository";

const dataSource = AppDataSource
class CarsImageRepository implements ICarsImageRepository {
    private repository: Repository<CarImage>
    constructor() {
        this.repository = dataSource.getRepository(CarImage)
    }

    async create(car_id: string, image_name: string): Promise<CarImage> {
        const car = this.repository
        return
    }
}
export { CarsImageRepository }