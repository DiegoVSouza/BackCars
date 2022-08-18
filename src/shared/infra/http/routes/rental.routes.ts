import { Router } from "express";
import { ensureAutheticate } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { CreateRentalController } from "../../../../modules/rentals/useCases/createRental/CreateRentalController";

const rentalRoutes = Router()
const createRentalController = new CreateRentalController()

rentalRoutes.post('/', ensureAutheticate, createRentalController.handle)

export { rentalRoutes }