// imports for QR and email
import nodemailer from "nodemailer";
import QRCode from "qrcode";
// Models
import Event from "../models/event.model.js";
import User from "../models/user.model.js";

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "campusconnecttec@gmail.com",
        pass: "pxajtrwezfrvncpm"
    },
})

export const sendEmailToAllUsers = async (id) => {
    try {

        const event = await Event.findById(id)
        const users = await User.find()
        users.forEach(user => {
            console.log(user.email)
            transporter.sendMail({
                from: '"Campus Connect TEC" <campusconnecttec@gmail.com>',
                to: user.email,
                subject: "¡Evento eliminado!",
                html: '<p>¡Hola! El evento ' + event.name + ' ha sido eliminado. Lamentamos los inconvenientes.</p>',
            })
        })
        return true
    } catch (error) {
        return false
    }
}


export const sendMailTest = async (req, res) => {
    try {
        await sendQRemail("https://www.google.com", "aleyva1509@gmail.com")
        res.json({ message: "Email sent" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const sendQRemail = async (link, email) => {
    try {
        const qr = await QRCode.toDataURL(
            link,
        )
        await transporter.sendMail({
            from: '"Campus Connect TEC" <campusconnecttec@gmail.com>',
            to: email,
            attachDataUrls: true,
            subject: "Tu solicitud de asistencia ha sido aceptada",
            html: '<p>¡Hola! Tu solicitud de asistencia ha sido aceptada. Adjunto encontrarás tu código QR para ingresar al evento.</p> <img src="' + qr + '" alt="QR Code">',
        })
    }
    catch (error) {
        console.log(error)
    }
}
