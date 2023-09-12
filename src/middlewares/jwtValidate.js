export const authRequired = (req, res, next) => {
    console.log("validating tokens")
    // Get token from cookies
    console.log(req.headers.cookie)

    console.log('Cookies: ', req.cookies)
    next()
}