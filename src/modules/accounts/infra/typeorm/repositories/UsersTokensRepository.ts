import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm/dataSourceConfig";
import { UserTokens } from "../../../../../shared/infra/typeorm/entities/UserTokens";
import { IUsersTokensRepository } from "../../../repositories/interfaces/IUsersTokensRepository";

const appDataSource = AppDataSource
class UsersTokensRepository implements IUsersTokensRepository {
    private repository: Repository<UserTokens>
    constructor() {
        this.repository = appDataSource.getRepository(UserTokens)
    }
    async create({ expires_date, user_id, refresh_token }: ICreateUserTokenDTO): Promise<UserTokens> {
        const userToken = await this.repository.create({
            expires_date,
            refresh_token,
            user_id
        })
        await this.repository.save(userToken)

        return userToken
    }
}

export { UsersTokensRepository }