import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'
import { AppError } from "../../../errors/AppError";
import { UsersRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UsersRepository";

interface Ipayload {
    sub: string
}

export async function ensureAutheticate(req: Request, res: Response, next: NextFunction) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401)
    }

    const [, token] = authHeader.split(' ')
    try {
        const { sub: user_id } = verify(token, "6151236d378aa9373cc4d66081f674c5") as Ipayload
        const usersRepository = new UsersRepository()
        const user = await usersRepository.findById(user_id)
        if (!user) { throw new AppError('User does not exists', 401) }

        req.user = {
            id: user_id
        }

        next()
    } catch {
        throw new AppError("Invalid Token", 401)
    }

}