import { inject, injectable } from "tsyringe";
import { ISalesRepository } from "../../repositories/interfaces/ISalesRepository";


interface IRequest {
    sale_id: string
}

@injectable()
class SaleSoldUseCase {
    constructor(
        @inject("SalesRepository")
        private SaleRepository: ISalesRepository,
    ) { }
    async execute({ sale_id }: IRequest): Promise<void> {
        await this.SaleRepository.sold(sale_id)
    }
}

export { SaleSoldUseCase }