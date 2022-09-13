import { prisma } from "../../../../../../prisma/prisma";
import { Car } from "../../../../../shared/infra/prisma/entities/Car";
import { ICreateCarDTO } from "../../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../../../repositories/interfaces/ICarsRepository";

class CarsRepository implements ICarsRepository {


    async create({ name, description, category_id, price, brand, license_plate, id, specifications, user_id }: ICreateCarDTO): Promise<Car> {

        const car = prisma.car.create({
            data: {
                name, description, category_id, price, brand, user_id, license_plate,
                specifications: {
                    create: specifications
                }
            },
        })

        return car
    }
    async update({ name, description, category_id, price, brand, license_plate, id, specifications, user_id }: ICreateCarDTO): Promise<Car> {
        const car = prisma.car.update({
            where: {
                id: id
            },
            data: {
                name, description, category_id, price, brand, license_plate, id, user_id,
                specifications: {
                    connect: {
                        id: specifications[0].id
                    }
                }
            },
        })

        return car
    }
    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await prisma.car.findFirst({ where: { license_plate: license_plate } })
        return car
    }

    async findAvailable(category_id?: string, brand?: string, name?: string, user_id?: string): Promise<Car[]> {
        var carsFilter = await prisma.car.findMany({
            where: {
                available: true,
                category_id,
                brand,
                name,
                user_id,
            }
        })


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

    async deleteCar(car_id: string): Promise<void> {
        await prisma.car.delete({
            where: {
                id: car_id
            }
        })
    }

}

export { CarsRepository }