import { Rental } from "../../../../shared/infra/typeorm/entities/Rental"
import { ICreateRentalDTO } from "../../DTOs/ICreateRentalDTO"


interface IRentalsRepository {
    findOpenRentalByCar(car_id: string): Promise<Rental>
    findOpenRentalByUser(user_id: string): Promise<Rental>
    create(data: ICreateRentalDTO): Promise<Rental>
}

export { IRentalsRepository }