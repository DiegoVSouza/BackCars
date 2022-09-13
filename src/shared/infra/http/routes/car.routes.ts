import { Router } from 'express'
import multer from 'multer'
import { CreateCarController } from '../../../../modules/cars/useCases/createCar/CreateCarController'
import { CreateCarSpecificationsController } from '../../../../modules/cars/useCases/createCarSpecification/CreateCarSpecificationsController'
import { ListAvailableCarsController } from '../../../../modules/cars/useCases/listAvalibleCars/ListAvailableCarsController'
import { UploadCarImagesController } from '../../../../modules/cars/useCases/uploadCarimage/UploadCarImagesController'
import { ensureAutheticate } from '../middlewares/ensureAuthenticated'

const carRoutes = Router()
import uploadConfig from "../../../../config/upload";
import { ListCarImagesController } from '../../../../modules/cars/useCases/listCarimage/ListCarImagesController'


const createCarController = new CreateCarController()
const listAvailableCarsController = new ListAvailableCarsController()
const createCarSpecificationsController = new CreateCarSpecificationsController()
const uploadCarImagesController = new UploadCarImagesController()
const listCarImagesController = new ListCarImagesController()

const uploadImage = multer(uploadConfig.upload('./tmp/cars'))

carRoutes.post('/', ensureAutheticate, createCarController.handle)
carRoutes.get('/available', listAvailableCarsController.handle)
carRoutes.post("/specifications/:id", ensureAutheticate, createCarSpecificationsController.handle)
carRoutes.post("/images/:id", ensureAutheticate, uploadImage.array("images"), uploadCarImagesController.handle)
carRoutes.post("/images", ensureAutheticate, listCarImagesController.handle)

export { carRoutes }  