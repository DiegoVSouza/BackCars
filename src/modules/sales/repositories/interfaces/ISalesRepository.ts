import { Sale } from "../../../../shared/infra/prisma/entities/Sale"
import { ICreateSaleDTO } from "../../DTOs/ICreateSaleDTO"


interface ISalesRepository {
    create(data: ICreateSaleDTO): Promise<Sale>;
    sold(sale_id: string): Promise<void>;

}

export { ISalesRepository }