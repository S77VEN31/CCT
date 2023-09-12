import { TOKEN_KEY } from '../config.js'
import jwt from 'jsonwebtoken'

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