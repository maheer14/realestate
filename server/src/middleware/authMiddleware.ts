import type { Request, Response, NextFunction } from "express"
import type { JwtPayload } from "jsonwebtoken";
import jwt from "jsonwebtoken";

interface DecodedToken extends JwtPayload {
    sub: string
    "custom:role"?: string
}

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string 
                role: string 
            }
        }
    }
}

export const authMiddleware = (allowedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const token = req.headers.authorization?.split(" ")[1]
    
    if (!token){
        res.status(401).json({ message: "Unauthorized"})
        return 
    }

    try {
        const decoded = jwt.decode(token) as DecodedToken
        const userRole = decoded["custom:role"]
    }
    } catch (
        
    )
}