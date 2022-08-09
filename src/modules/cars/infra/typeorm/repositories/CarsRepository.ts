import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm/dataSourceConfig";
import { Car } from "../../../../../shared/infra/typeorm/entities/Car";
import { ICreateCarDTO } from "../../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../../../repositories/interfaces/ICarsRepository";

const dataSource = AppDataSource
class CarsRepository implements ICarsRepository {

    private repository: Repository<Car>
    constructor() {
        this.repository = dataSource.getRepository(Car)
    }

    async create({ name, description, category_id, daily_rate, fine_amount, brand, license_plate }: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
            name, description, category_id, daily_rate, fine_amount, brand, license_plate
        })

        await this.repository.save(car)

        return car
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({ where: { license_plate: license_plate } })
        return car
    }
}

export { CarsRepository }