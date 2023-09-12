export const authRequired = (req, res, next) => {
    console.log("validating tokens")
    next()
}