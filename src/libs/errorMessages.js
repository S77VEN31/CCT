


export const customErrorMessages = (errorMessage, messageKey, key) => {
    const result = {
        message: {
            issues: [
                {
                    validation: errorMessage.validation,
                    code: errorMessage.code,
                    message: errorMessage.messages[messageKey],
                    path: key,
                }
            ],
            name: errorMessage.name,
        }
    }
    return result;
};
