import { prisma } from "../../../../../shared/infra/prisma/prisma";
import { Car } from "../../../../../shared/infra/prisma/entities/Car";
import { ICreateCarDTO } from "../../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../../../repositories/interfaces/ICarsRepository";

class CarsRepository implements ICarsRepository {

    async create({ name, description, category_id, price, brand, license_plate, id, specifications }: ICreateCarDTO): Promise<Car> {

        const car = prisma.car.create({

            data: {
                name, description, category_id, price, brand, license_plate, id
            },
            select: {
                specifications: true
            }

        })

        return car
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await prisma.car.findFirst({ where: { license_plate: license_plate } })
        return car
    }

    async findAvailable(category_id?: string, brand?: string, name?: string): Promise<Car[]> {
        var carsFilter = await prisma.car.findMany({ where: { available: true } })

        if (brand) { carsFilter = carsFilter.filter(cars => cars.brand === brand) }
        if (name) { carsFilter = carsFilter.filter(cars => cars.name === name) }
        if (category_id) { carsFilter = carsFilter.filter(cars => cars.category_id === category_id) }

        return carsFilter
    }

    async findById(car_id: string): Promise<Car> {
        const car = await prisma.car.findFirst({ where: { id: car_id } })
        return car
    }
    async updateAvailable(car_id: string, available: boolean): Promise<void> {
        await prisma.car.update({
            where: {
                id: car_id
            },
            data: {
                available: available
            },
        })

        return
    }

}

export { CarsRepository }