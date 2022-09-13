import { Specification } from './Specification';

class Car {
    id: string;
    name: string;
    description: string;
    available: boolean;
    license_plate: string;
    price: number
    brand: string;
    user_id: string;
    specifications?: Specification[]
    category_id: string
    created_at: Date;
}

export { Car }