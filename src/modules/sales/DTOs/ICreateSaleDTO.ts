interface ICreateSaleDTO {
    user_id: string
    car_id: string
    client_id: string
    proposal_amount: number
    id?: string
    sold?: boolean
}

export { ICreateSaleDTO }