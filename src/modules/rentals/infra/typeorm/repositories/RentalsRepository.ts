import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm/dataSourceConfig";
import { Rental } from "../../../../../shared/infra/typeorm/entities/Rental";
import { ICreateRentalDTO } from "../../../DTOs/ICreateRentalDTO";
import { IRentalsRepository } from "../../../repositories/interfaces/IRentalsRepository";


const dataSource = AppDataSource
class RentalsRepository implements IRentalsRepository {
    private repository: Repository<Rental>
    constructor() {
        this.repository = dataSource.getRepository(Rental)
    }
    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        const unavailableCar = await this.repository.findOne({ where: { car_id: car_id } })
        return unavailableCar
    }
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const unavailableUser = await this.repository.findOne({ where: { user_id: user_id } })
        return unavailableUser
    }
    async create({ car_id, user_id, expected_return_date }: ICreateRentalDTO): Promise<Rental> {
        const rental = this.repository.create({ user_id, car_id, expected_return_date })
        await this.repository.save(rental)
        return rental
    }
}

export { RentalsRepository }