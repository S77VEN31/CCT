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
    memberNotDeleted: {
        code: 500,
        name: "Error al eliminar miembro",
        message: "Hubo un error al eliminar el miembro de tu lista de colaboradores."
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
    createEvent: {
        code: 500,
        name: "Error al crear el evento",
        message: "Hubo un error al crear el evento."
    },
    notEventsFound: {
        code: 404,
        name: "Eventos no encontrados",
        message: "No se encontraron eventos."
    },
    userNotAdded: {
        code: 500,
        name: "Error al agregar usuario",
        message: "Hubo un error al agregar el usuario a la lista de participantes."
    },
    userAlreadyAdded: {
        code: 400,
        name: "Usuario ya existe",
        message: "El usuario ya existe en la lista de participantes."
    },
    eventNotUpdated: {
        code: 500,
        name: "Error al actualizar el evento",
        message: "Hubo un error al actualizar el evento."
    },
    eventNotFound: {
        code: 404,
        name: "Evento no encontrado",
        message: "No se encontró un evento con el id proporcionado."
    },
    eventNotDeleted: {
        code: 500,
        name: "Error al eliminar el evento",
        message: "Hubo un error al eliminar el evento."
    },
    eventFull: {
        code: 400,
        name: "Evento lleno",
        message: "Serás añadido a la lista de espera."
    },
    userNotInEvent: {
        code: 400,
        name: "Usuario no está en el evento",
        message: "El usuario no está en el evento."
    },
    userNotRemoved: {
        code: 500,
        name: "Error al eliminar usuario",
        message: "Hubo un error al eliminar el usuario de la lista de participantes."
    },
    organizationsNotFound: {
        code: 404,
        name: "Organizaciones no encontradas",
        message: "No se encontraron organizaciones."
    },
    proposalNotSent: {
        code: 500,
        name: "Error al enviar la propuesta",
        message: "Hubo un error al enviar la propuesta."
    },
    collaboratorsNotModified: {
        code: 500,
        name: "Error al modificar colaboradores",
        message: "Hubo un error al modificar los colaboradores."
    },
    activityNotCreated: {
        code: 500,
        name: "Error al crear la actividad",
        message: "Hubo un error al crear la actividad."
    },
}