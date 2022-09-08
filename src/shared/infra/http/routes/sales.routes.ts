import { Router } from "express";
import { SaleProposalController } from "../../../../modules/sales/useCases/saleProposal/SaleProposalController";
import { SaleSoldController } from "../../../../modules/sales/useCases/saleSold/SaleSoldController";
import { ensureAutheticate } from "../middlewares/ensureAuthenticated";

const saleRoutes = Router()
const saleProposalController = new SaleProposalController()
const saleSoldController = new SaleSoldController()

saleRoutes.post('/', ensureAutheticate, saleProposalController.handle)
saleRoutes.post('/sold/:id', ensureAutheticate, saleSoldController.handle)

export { saleRoutes }