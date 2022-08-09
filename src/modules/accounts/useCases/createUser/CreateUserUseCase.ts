import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/interfaces/IUsersRepository";
import { hash } from 'bcrypt'
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }


    async execute({ name, email, driver_license, password }: ICreateUserDTO): Promise<void> {

        const userAlredyExists = await this.usersRepository.findByEmail(email);
        if (userAlredyExists) throw new AppError("User Alredy Exists")

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            name,
            email,
            driver_license,
            password: passwordHash,
        });
    }
}

export { CreateUserUseCase }