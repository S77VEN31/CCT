// Json Web Token
import jwt from 'jsonwebtoken'
// Token key
import { TOKEN_KEY } from '../config.js'

export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            TOKEN_KEY,
            { expiresIn: 3600 },
            (err, token) => {
                if (err) reject(err)
                resolve(token)
            }
        )
    })
}