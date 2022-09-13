import { inject, injectable } from "tsyringe";
import { Car } from "../../../../shared/infra/prisma/entities/Car";
import { ICarsRepository } from "../../repositories/interfaces/ICarsRepository";

interface IRequest {
    category_id?: string,
    brand?: string,
    name?: string,
    user_id?: string,

}

@injectable()
class ListAvailableCarsUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) { }
    async execute({ category_id, brand, name, user_id }: IRequest): Promise<Car[]> {
        const cars = await this.carsRepository.findAvailable(category_id, brand, name, user_id)
        return cars
    }
}

export { ListAvailableCarsUseCase }