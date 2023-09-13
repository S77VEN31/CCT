// imports for QR and email
import QRCode from "qrcode";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "campusconnecttec@gmail.com",
        pass: "pxajtrwezfrvncpm"
    },
})

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
