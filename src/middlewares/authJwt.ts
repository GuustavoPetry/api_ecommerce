import { NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");

interface jwtPayload {
    sub: number,
    email: string,
    nome?: string,
    role?: string,
    [key: string]: any 
}

// Adiciona o tipo para o express request
declare module "express-serve-static-core" {
    interface Request {
        user?: jwtPayload
    }
}

export async function authJwt(req: Request, res: Response, next: NextFunction): Promise<void> {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Baerer ")) {
        res.status(401).json({ erro: "Token Inválido ou Inexistente" });
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET) as jwtPayload;
        req.user = payload;
        next();
    } catch (error) {
        res.status(401).json({ erro: "Token Inválido" });
    }
}