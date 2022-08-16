import { Router } from 'express'
import { CreateCarController } from '../../../../modules/cars/useCases/createCar/CreateCarController'
import { CreateCarSpecificationsController } from '../../../../modules/cars/useCases/createCarSpecification/CreateCarSpecificationsController'
import { ListAvailableCarsController } from '../../../../modules/cars/useCases/listAvalibleCars/ListAvailableCarsController'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAutheticate } from '../middlewares/ensureAuthenticated'

const carRoutes = Router()

const createCarController = new CreateCarController()
const listAvailableCarsController = new ListAvailableCarsController()
const createCarSpecificationsController = new CreateCarSpecificationsController()

carRoutes.post('/', ensureAutheticate, ensureAdmin, createCarController.handle)
carRoutes.get('/avalible', listAvailableCarsController.handle)
carRoutes.post("/specifications/:id", ensureAutheticate, ensureAdmin, createCarSpecificationsController.handle)

export { carRoutes } 