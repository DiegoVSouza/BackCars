import { Rental } from "../../../../shared/infra/typeorm/entities/Rental";
import { ICreateRentalDTO } from "../../DTOs/ICreateRentalDTO";
import { IRentalsRepository } from "../interfaces/IRentalsRepository";

class RentalsRepositoryInMemory implements IRentalsRepository {
    rentals: Rental[] = []
    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        return this.rentals.find(rental => rental.car_id === car_id && !rental.end_Date)
    }

    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        return this.rentals.find(rental => rental.user_id === user_id && !rental.end_Date)
    }
    async create({ car_id, user_id, expected_return_date }: ICreateRentalDTO): Promise<Rental> {
        const rental = new Rental()
        Object.assign(rental, { car_id, user_id, expected_return_date, start_date: new Date() })
        this.rentals.push(rental)
        return rental

    }
}

export { RentalsRepositoryInMemory }