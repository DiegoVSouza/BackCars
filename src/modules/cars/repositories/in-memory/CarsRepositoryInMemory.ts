import { Car } from "../../../../shared/infra/typeorm/entities/Car";
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../interfaces/ICarsRepository";


class CarsRepositoryInMemory implements ICarsRepository {
    cars: Car[] = []
    async create({ name, description, category_id, daily_rate, fine_amount, brand, license_plate }: ICreateCarDTO): Promise<Car> {
        const car = new Car()

        Object.assign(car, {
            name, description, category_id, daily_rate, fine_amount, brand, license_plate
        })

        this.cars.push(car)

        return car
    }
    async findByLicensePlate(license_plate: string): Promise<Car> {
        return this.cars.find(car => car.license_plate === license_plate)
    }

    async findAvalible(category_id?: string, brand?: string, name?: string): Promise<Car[]> {
        const all = this.cars.filter(car => {
            if (car.available === true || ((brand && car.brand === brand) || (category_id && car.category_id === category_id) || (name && car.name === name))) {
                return car
            }
            return null
        })
        return all
    }
}

export { CarsRepositoryInMemory }
