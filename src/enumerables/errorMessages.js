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
    memberNotFound: {
        code: 404,
        name: "Miembro no encontrado",
        message: "No se encontró un miembro con el carne proporcionado."
    },
    membersNotFound: {
        code: 404,
        name: "Miembros no encontrados",
        message: "No se encontraron miembros."
    },
    memberNotAdded: {
        code: 500,
        name: "Error al agregar miembro",
        message: "Hubo un error al agregar el miembro a tu lista de colaboradores."
    },
    memberAlreadyExists: {
        code: 400,
        name: "Miembro ya existe",
        message: "El miembro ya existe en tu lista de colaboradores."
    },
    invalidPassword: {
        code: 401,
        name: "Contraseña incorrecta",
        message: "La contraseña proporcionada es incorrecta. Por favor, verifica tus credenciales e intenta nuevamente."
    },
    updateProfile: {
        code: 500,
        name: "Error al actualizar el perfil",
        message: "Hubo un error al actualizar la información de perfil."
    },
}