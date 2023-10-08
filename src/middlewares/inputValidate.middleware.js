export const validateInput = (schema) => (req, response, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        response.status(400).json({ message: error.issues[0].message, name: error.issues[0].code });
    }
}