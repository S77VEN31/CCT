export const validateInput = (schema) => (req, response, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        response.status(400).json({ message: error });
    }
}