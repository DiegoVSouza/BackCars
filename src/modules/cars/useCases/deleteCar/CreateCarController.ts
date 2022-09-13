import { Response, Request } from "express"
import { container } from "tsyringe"
import { CreateCarUseCase } from "./CreateCarUseCase"

class CreateCarController {
    async handle(req: Request, res: Response) {
        const { car_id } = req.params
        const createCarUseCase = container.resolve(CreateCarUseCase)
        const car = await createCarUseCase.execute({ car_id })
        return res.status(201).json(car)
    }
}

export { CreateCarController }