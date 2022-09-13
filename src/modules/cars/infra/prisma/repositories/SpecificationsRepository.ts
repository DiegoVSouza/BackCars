import { prisma } from "../../../../../../prisma/prisma";
import { Specification } from "../../../../../shared/infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../../../repositories/interfaces/ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {


    async create({ name, description }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = await prisma.specifications.create({
            data: {
                description,
                name
            }

        })

        return specification
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await prisma.specifications.findFirst({ where: { name: name } })
        return specification
    }

    async findByIds(ids: string[]): Promise<Specification[]> {
        const specifications = await prisma.specifications.findMany({ where: { id: { in: ids } } })
        return specifications
    }
}



export { SpecificationsRepository }