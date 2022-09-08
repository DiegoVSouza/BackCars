import { Response, Request } from "express"
import { container } from "tsyringe"
import { SaleSoldUseCase } from "./SaleSoldUseCase"

class SaleSoldController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const createRentalUseCase = container.resolve(SaleSoldUseCase)
        await createRentalUseCase.execute({ sale_id: id })

        return res.status(201).send()

    }
}

export { SaleSoldController }