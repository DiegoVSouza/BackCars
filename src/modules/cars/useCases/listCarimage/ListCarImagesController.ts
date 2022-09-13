import { container } from "tsyringe";
import { Response, Request } from "express"
import { ListCarImagesUseCase } from "./ListCarImagesUseCase";

interface IFiles {
    filename: string
}
class ListCarImagesController {
    async handle(req: Request, res: Response) {
        const { car_id, id } = req.query
        const listCarImagesUseCase = container.resolve(ListCarImagesUseCase)

        const listImages = await listCarImagesUseCase.execute({ car_id: car_id as string, id: id as string })

        return res.json(listImages)
    }
}

export { ListCarImagesController }