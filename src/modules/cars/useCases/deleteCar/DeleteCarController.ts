import { Response, Request } from "express"
import { container } from "tsyringe"
import { DeleteCarUseCase } from "./DeleteCarUseCase"

class DeleteCarController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        
        const createCarUseCase = container.resolve(DeleteCarUseCase)
        await createCarUseCase.execute({ car_id:id })
        return res.status(201).send()
    }
}

export { DeleteCarController }