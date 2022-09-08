import { prisma } from "../../../../../shared/infra/prisma/prisma";
import { AppDataSource } from "../../../../../shared/infra/typeorm/dataSourceConfig";
import { Category } from "../../../../../shared/infra/typeorm/entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../../../repositories/interfaces/ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {



    async create({ name, description }: ICreateCategoryDTO): Promise<void> {

        await prisma.category.create({
            data: {
                description,
                name
            }

        })
    }


    async list(): Promise<Category[]> {
        const categories = await prisma.category.findMany()
        return categories
    }

    async findByName(name: string): Promise<Category> {
        const category = await prisma.category.findFirst({ where: { name: name } })
        return category
    }
}

export { CategoriesRepository }