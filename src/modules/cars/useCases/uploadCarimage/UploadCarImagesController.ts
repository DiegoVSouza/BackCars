import { container } from "tsyringe";
import { Response, Request } from "express"
import { UploadCarImagesUseCase } from "./UploadCarImagesUseCase";

interface IFiles {
    url: string
    title: string
}
class UploadCarImagesController {
    async handle(req: Request, res: Response) {
        const { id } = req.params
        const { images } = req.body
        const uploadCarImagesUseCase = container.resolve(UploadCarImagesUseCase)

        await uploadCarImagesUseCase.execute({ car_id: id, images })

        res.status(200).send()
    }
}

export { UploadCarImagesController }