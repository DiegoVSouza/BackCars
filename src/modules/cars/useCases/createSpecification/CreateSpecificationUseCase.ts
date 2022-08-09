import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ISpecificationRepository } from "../../repositories/interfaces/ISpecificationRepository";

interface IRequest {
    name: string,
    description: string
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject('SpecificationRepository')
        private speificationsRepository: ISpecificationRepository) {
    }
    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlredyExist = await this.speificationsRepository.findByName(name);

        if (specificationAlredyExist) {
            throw new AppError("Specification Aleredy Existy!");

        }

        await this.speificationsRepository.create({
            name,
            description
        })


    }

}

export { CreateSpecificationUseCase }