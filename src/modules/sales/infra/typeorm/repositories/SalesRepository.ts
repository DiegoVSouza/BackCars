import { IsNull, Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm/dataSourceConfig";
import { Sale } from "../../../../../shared/infra/typeorm/entities/Sale";
import { ICreateSaleDTO } from "../../../DTOs/ICreateSaleDTO";
import { ISalesRepository } from "../../../repositories/interfaces/ISalesRepository";

const dataSource = AppDataSource
class SalesRepository implements ISalesRepository {
    private repository: Repository<Sale>
    constructor() {
        this.repository = dataSource.getRepository(Sale)
    }

    async create({ car_id, user_id, proposal_amount, client_id }: ICreateSaleDTO): Promise<Sale> {
        const sale = this.repository.create({ user_id, car_id, proposal_amount, client_id })
        await this.repository.save(sale)
        return sale
    }

    async sold(sale_id: string): Promise<void> {
        await this.repository.createQueryBuilder().update().set({ sold: true }).where("id=:id")
            .setParameter("id", sale_id).execute()
        return
    }


}

export { SalesRepository }