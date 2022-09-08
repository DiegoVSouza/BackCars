import dayjs from "dayjs";
import { inject, injectable } from "tsyringe";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/interfaces/IDateProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { Sale } from "../../../../shared/infra/prisma/entities/Sale";
import { ICarsRepository } from "../../../cars/repositories/interfaces/ICarsRepository";
import { ISalesRepository } from "../../repositories/interfaces/ISalesRepository";


interface IRequest {
    user_id: string;
    car_id: string;
    proposal_amount: number;
    client_id: string;
}

@injectable()
class SaleProposalUseCase {
    constructor(
        @inject("SalesRepository")
        private SaleRepository: ISalesRepository,
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) { }
    async execute({ car_id, user_id, proposal_amount, client_id }: IRequest): Promise<Sale> {
        const carUnavailable = await this.carsRepository.findById(car_id)
        if (carUnavailable.available === false) throw new AppError("Car is Unavailable")

        const rental = await this.SaleRepository.create({ user_id, car_id, proposal_amount, client_id })
        return rental
    }
}

export { SaleProposalUseCase }