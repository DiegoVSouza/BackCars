import { prisma } from "../../../../../../prisma/prisma";
import { Sale } from "../../../../../shared/infra/prisma/entities/Sale";
import { ICreateSaleDTO } from "../../../DTOs/ICreateSaleDTO";
import { ISalesRepository } from "../../../repositories/interfaces/ISalesRepository";

class SalesRepository implements ISalesRepository {

    async create({ car_id, user_id, proposal_amount, client_id }: ICreateSaleDTO): Promise<Sale> {
        const sale = await prisma.sale.create({
            data: {
                user_id, car_id, proposal_amount, client_id
            }
        })
        return sale
    }

    async sold(sale_id: string): Promise<void> {
        await prisma.sale.update({
            where: {
                id: sale_id
            },
            data: {
                sold: true
            },
        })

        return
    }


}

export { SalesRepository }