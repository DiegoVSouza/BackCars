import { Router } from 'express'
import { CreateCarController } from '../../../../modules/cars/useCases/createCar/CreateCarController'
import { ListAvailableCarsController } from '../../../../modules/cars/useCases/listAvalibleCars/ListAvailableCarsController'
import { ensureAdmin } from '../middlewares/ensureAdmin'
import { ensureAutheticate } from '../middlewares/ensureAuthenticated'

const carRoutes = Router()

const createCarController = new CreateCarController()
const listAvailableCarsController = new ListAvailableCarsController()

carRoutes.post('/', ensureAutheticate, ensureAdmin, createCarController.handle)
carRoutes.get('/avalible', listAvailableCarsController.handle)

export { carRoutes } 