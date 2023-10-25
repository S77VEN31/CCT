// Json Web Token
import jwt from 'jsonwebtoken'
// Token key
import { TOKEN_KEY } from '../config.js'

export const authRequired = (req, res, next) => {
    // Get token from cookies
    const { token } = req.cookies
    // If token not found
    if (!token) return res.status(401).json({ message: "Unauthorized no token" })
    // Verify token
    jwt.verify(token, TOKEN_KEY, (err, decodedToken) => {
        // If token is invalid
        if (err) return res.status(403).json({ message: "Unauthorized invalid token" })
        // If token is valid
        req.user = decodedToken
        // Next middleware
        next()
    })

}