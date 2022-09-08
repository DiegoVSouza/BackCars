import { Response, Request } from "express"
import { container } from "tsyringe"
import { SaleProposalUseCase } from "./SaleProposalUseCase"

class SaleProposalController {
    async handle(req: Request, res: Response) {
        const { car_id, proposal_amount, client_id } = req.body
        const { id } = req.user
        const saleProposalUseCase = container.resolve(SaleProposalUseCase)
        const rental = await saleProposalUseCase.execute({ car_id, user_id: id, proposal_amount, client_id })

        return res.status(201).json(rental)
    }
}

export { SaleProposalController }