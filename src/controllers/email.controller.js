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
        await transporter.sendMail({
            from: '"Campus Connect TEC" <campusconnecttec@gmail.com>',
            to: "aleyva1509@gmail.com",
            subject: "Hello ✔",
            html: "<b>Hello world?</b>"
        })
        res.json({ message: "Email sent" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}