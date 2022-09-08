import { UserTokens } from "../../../../../shared/infra/prisma/entities/UserTokens"
import { prisma } from "../../../../../shared/infra/prisma/prisma"
import { IUsersTokensRepository } from "../../../repositories/interfaces/IUsersTokensRepository"

class UsersTokensRepository implements IUsersTokensRepository {

    async create({ expires_date, user_id, refresh_token }: ICreateUserTokenDTO): Promise<UserTokens> {
        const userToken = await prisma.userTokens.create({
            data: {
                expires_date,
                refresh_token,
                user_id
            }
        })
        return userToken

    }

    async findUserByIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens> {
        const userToken = await prisma.userTokens.findFirst({ where: { user_id, refresh_token } })
        return userToken
    }

    async deleteById(id: string): Promise<void> {
        await prisma.userTokens.delete({
            where: {
                id: id
            }
        })
    }
}

export { UsersTokensRepository }