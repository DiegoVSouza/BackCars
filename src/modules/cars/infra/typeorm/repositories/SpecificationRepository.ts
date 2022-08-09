import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm/dataSourceConfig";
import { Specification } from "../../../../../shared/infra/typeorm/entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../../../repositories/interfaces/ISpecificationRepository";


const dataSource = AppDataSource
class SpecificationRepository implements ISpecificationRepository {

    private repository: Repository<Specification>

    constructor() {
        this.repository = dataSource.getRepository(Specification)
    }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name
        })

        await this.repository.save(specification)
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOne({ where: { name: name } })
        return specification
    }
}



export { SpecificationRepository }