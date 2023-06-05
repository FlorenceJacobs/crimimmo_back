import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const jwtMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    if(authorization) {
        const token = authorization.replace('Bearer ', '');
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = { id: decoded.id, role: decoded.role, email: decoded.email }
        } catch(error) {         
        }
    }
    next();
}