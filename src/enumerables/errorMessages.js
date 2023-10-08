export const ErrorMessages = {
    inUse: {
        code: 409,
        name: "Usuario en uso",
        message: "El nombre de usuario o correo electrónico ya está registrado. Por favor, elige otro."
    },
    userNotFound: {
        code: 404,
        name: "Usuario o correo electrónico no encontrado",
        message: "No se encontró un usuario con el nombre de usuario o correo electrónico proporcionado."
    },
    invalidPassword: {
        code: 401,
        name: "Contraseña incorrecta",
        message: "La contraseña proporcionada es incorrecta. Por favor, verifica tus credenciales e intenta nuevamente."
    },
}