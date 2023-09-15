export const customErrorMessages = (key, message, code, validation, name) => {
    return {
        message: {
            issues: [
                {
                    validation: validation,
                    code: code,
                    message: message,
                    path: key,
                }
            ],
            name: name,
        }
    };
};