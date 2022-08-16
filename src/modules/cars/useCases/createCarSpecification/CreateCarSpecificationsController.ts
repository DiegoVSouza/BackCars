import { container } from "tsyringe";
import { CreateCarSpecificationsUseCase } from "./CreateCarSpecificationsUseCase";
import { Response, Request } from "express"


class CreateCarSpecificationsController {
    async handle(req: Request, res: Response) {
        const { car_id } = req.params
        const { specifications_id } = req.body
        const createCarsSpecificationUseCase = container.resolve(CreateCarSpecificationsUseCase)
        const car = await createCarsSpecificationUseCase.execute({ car_id, specifications_id })
        return res.status(200).json(car)
    }
}

export { CreateCarSpecificationsController }