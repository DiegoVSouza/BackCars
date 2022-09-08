import { container } from "tsyringe";
import '../container/providers'

import { ICategoriesRepository } from "../../modules/cars/repositories/interfaces/ICategoriesRepository"
import { CategoriesRepository } from "../../modules/cars/infra/prisma/repositories/CategoriesRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/interfaces/ISpecificationsRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/interfaces/IUsersRepository";
import { SpecificationsRepository } from "../../modules/cars/infra/prisma/repositories/SpecificationsRepository";
import { ICarsRepository } from "../../modules/cars/repositories/interfaces/ICarsRepository";
import { CarsImageRepository } from "../../modules/cars/infra/prisma/repositories/CarsImageRepository";
import { ICarsImageRepository } from "../../modules/cars/repositories/interfaces/ICarsImageRepository";
import { IUsersTokensRepository } from "../../modules/accounts/repositories/interfaces/IUsersTokensRepository";
import { UsersTokensRepository } from "../../modules/accounts/infra/prisma/repositories/UsersTokensRepository";
import { ISalesRepository } from "../../modules/sales/repositories/interfaces/ISalesRepository";
import { UsersRepository } from "../../modules/accounts/infra/prisma/repositories/UsersRepository";
import { CarsRepository } from "../../modules/cars/infra/prisma/repositories/CarsRepository";
import { SalesRepository } from "../../modules/sales/infra/prisma/repositories/SalesRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationRepository",
    SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)


container.registerSingleton<ICarsRepository>(
    "CarsRepository",
    CarsRepository
)
container.registerSingleton<ICarsImageRepository>(
    "CarsImageRepository",
    CarsImageRepository
)
container.registerSingleton<ISalesRepository>(
    "SalesRepository",
    SalesRepository
)
container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",
    UsersTokensRepository
)