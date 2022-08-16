import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Car } from "./Car";

@Entity("cars_image")
class CarImage {
    @PrimaryColumn()
    id: string
    @ManyToOne(() => Car)
    @JoinColumn({ name: "car_id" })
    car_id: string
    @Column()
    image_name: string
    @CreateDateColumn()
    created_at: Date;
}

export { CarImage }