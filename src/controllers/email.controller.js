// imports for QR and email
import nodemailer from "nodemailer";
import QRCode from "qrcode";
// Models
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

export const sendEmailToAllUsers = async (eventName) => {
    try {
        const users = await User.find();
        const sendEmailPromises = users.map((user) => {
            return transporter.sendMail({
                from: '"Campus Connect TEC" <campusconnecttec@gmail.com>',
                to: user.email,
                subject: "¡Evento eliminado!",
                html: `<p>¡Hola! El evento ${eventName} ha sido eliminado. Lamentamos los inconvenientes.</p>`,
            }).catch(error => {
                console.error(`Failed to send email to ${user.email}`, error);
                return null; // returning null for failed email, you can handle this as per your logic
            });
        });

        // Wait for all emails to be sent
        const results = await Promise.all(sendEmailPromises);

        // Filter null results to see if there were any failures
        const failedEmails = results.filter(result => result === null);

        if (failedEmails.length > 0) {
            console.log(`${failedEmails.length} emails failed to send.`);
            return false;
        }

        console.log("All emails sent successfully.");
        return true;
    } catch (error) {
        console.error("Error in sendEmailToAllUsers:", error);
        return false;
    }
};

export const sendEmailToUser = async (userEmail) => {
    try {
        await sendQRemail("https://picsum.photos/300/300", userEmail)
        console.log("Email sent successfully.");
        return true;
    } catch (error) {
        console.error("Error in sendEmailToUser:", error);
        return false;
    }
}


export const sendMailTest = async (req, res) => {
    try {
        await sendQRemail("https://picsum.photos/300/300", "aleyva1509@gmail.com")
        res.json({ message: "Email sent" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const sendQRemail = async (link, email) => {
    try {
        console.log("Sending email to", 'stivensg313131@gmail.com');
        console.log("Link", link);
        const qr = await QRCode.toDataURL(link);
        console.log("QR Code Data URL:", qr); // Check the QR Code data URL

        // Check if the base64 part is extracted correctly
        const base64Data = qr.split("base64,")[1];
        if (!base64Data) {
            throw new Error('Base64 data could not be extracted from the QR code data URL');
        }

        await transporter.sendMail({
            from: '"Campus Connect TEC" <campusconnecttec@gmail.com>',
            to: "stivensg313131@gmail.com",
            subject: "Tu solicitud de asistencia ha sido aceptada",
            html: `<p>¡Hola! Tu solicitud de asistencia ha sido aceptada. Adjunto encontrarás tu código QR para ingresar al evento.</p>
                   <img src="cid:qrcodecid" alt="QR Code">`,
            attachments: [{
                filename: 'qrcode.png',
                content: base64Data,
                encoding: 'base64',
                cid: 'qrcodecid'
            }]
        });
        console.log("Email sent successfully to", email);
    } catch (error) {
        console.error("Error sending email to", email, ":", error);
        throw error;
    }
};
