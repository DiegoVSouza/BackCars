import { Specification } from "../../../shared/infra/typeorm/entities/Specification"

interface ICreateCarDTO {
    id?: string
    name: string
    description: string
    license_plate: string
    price: number
    brand: string
    category_id: string
    user_id: string
    specifications?: Specification[]
    available?: boolean
}

export { ICreateCarDTO }