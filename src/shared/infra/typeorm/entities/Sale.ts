import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Car } from "./Car";

@Entity("sales")
class Sale {
    @PrimaryColumn()
    id: string
    @ManyToOne(() => Car)
    @JoinColumn({ name: "car_id" })
    car: Car
    @Column()
    car_id: string
    @Column()
    user_id: string
    @Column()
    client_id: string
    @Column()
    proposal_amount: number
    @Column()
    sold: boolean
    @CreateDateColumn()
    created_at: Date
    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Sale }