import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../../repositories/interfaces/IUsersRepository";
import { User } from "../../../../../shared/infra/prisma/entities/User";
import { prisma } from "../../../../../../prisma/prisma";

class UsersRepository implements IUsersRepository {

    async create({ name, email, driver_license, password, avatar, id }: ICreateUserDTO): Promise<void> {
        await prisma.user.create({
            data: {
                name,
                email,
                driver_license,
                password,
                avatar,
                id
            }
        });
    }
    async update({ name, email, driver_license, password, avatar, id }: ICreateUserDTO): Promise<void> {
        const user = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
                name,
                email,
                driver_license,
                password,
                avatar,
                id
            }
        });

    }

    async findByEmail(email: string): Promise<User> {
        const user = await prisma.user.findFirst({ where: { email: email } })
        return user
    }

    async findById(id: string): Promise<User> {
        const user = await prisma.user.findFirst({ where: { id: id } })
        return user
    }

}

export { UsersRepository }