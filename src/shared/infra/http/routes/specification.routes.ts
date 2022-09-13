import { Router } from "express";
import { ensureAutheticate } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../../../../modules/cars/useCases/createSpecification/createSpecificationController";


const specificationRoutes = Router()

const createSpecificationController = new CreateSpecificationController()

specificationRoutes.post("/", ensureAutheticate, createSpecificationController.handle)

export { specificationRoutes }