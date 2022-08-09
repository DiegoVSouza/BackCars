import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";
import { compare } from "bcrypt"
import { sign } from 'jsonwebtoken'
import { AppError } from "../../../../shared/errors/AppError";


interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string,
        email: string,
    };
    token: string;
}

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {

        const user = await this.usersRepository.findByEmail(email)

        if (!user) { throw new AppError("Email or password incorrect") }

        const passwordMath = await compare(password, user.password)
        if (!passwordMath) { throw new AppError("Email or password incorrect") }

        const token = sign({}, "6151236d378aa9373cc4d66081f674c5", {
            subject: user.id,
            expiresIn: 86400
        })

        return {
            user,
            token,
        }
    }
}

export { AuthenticateUserUseCase } 