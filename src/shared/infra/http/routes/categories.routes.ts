

import { Router } from "express";


import { CreateCategoryController } from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../../../../modules/cars/useCases/importCategory/importCategoryController";
import { ListCategoriesController } from "../../../../modules/cars/useCases/listCategories/listCategoriesController";
import { ensureAutheticate } from "../middlewares/ensureAuthenticated";


const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()
const listCategoriesController = new ListCategoriesController()

const categoriesRoutes = Router();


categoriesRoutes.post("/", ensureAutheticate, createCategoryController.handle)

categoriesRoutes.get("/", listCategoriesController.handle)

categoriesRoutes.post("/import", ensureAutheticate, importCategoryController.handle)


export { categoriesRoutes };
