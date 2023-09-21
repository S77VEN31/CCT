export const ErrorMessages = {
    inUse: {
        validation: "Unique element validation",
        name: "InUseError",
        code: "duplicate_key",
        messages: {
            userNameMessage: "Username already in use",
            emailMessage: "Email already in use",
        }
    },
    userNotFound: {
        validation: 'Find user validation',
        name: "UserNotFoundError",
        code: "user_not_found",
        messages: {
            userNameMessage: "Username not found",
            emailMessage: "Email not found",
        }
    },
    invalidPassword: {
        validation: 'Invalid password validation',
        name: "InvalidPasswordError",
        code: "invalid_password",
        messages: {
            passwordMessage: "Invalid password",
        }
    },
}