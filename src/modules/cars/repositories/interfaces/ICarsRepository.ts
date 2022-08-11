import { Car } from "../../../../shared/infra/typeorm/entities/Car";
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO"

interface ICarsRepository {
    create(data: ICreateCarDTO): Promise<Car>;
    findByLicensePlate(license_plate: string): Promise<Car>;
    findAvalible(category_id?: string, brand?: string, name?: string): Promise<Car[]>;
}

export { ICarsRepository }