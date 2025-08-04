const nodemailer = require('nodemailer');
const axios = require('axios');

require('dotenv').config();

async function handleFormSubmission(req, res) {
    try {
        const { name, phone, email, message, captchaToken } = req.body;

        if (!name || !phone || !email || !captchaToken) {
            return res.status(400).json({ success: false, message: 'נא למלא את כל שדות החובה.' });
        }

        const secretKey = process.env.RECAPTCHA_SECRET_KEY; // שימוש במשתנה סביבה
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

        const recaptchaResponse = await axios.post(verifyUrl);

        if (!recaptchaResponse.data.success) {
            return res.status(400).json({ success: false, message: 'אימות reCAPTCHA נכשל. ייתכן שאתה רובוט.' });
        }

        const emailContent = `
            פנייה חדשה התקבלה מהאתר:
            ---------------------------
            שם מלא: ${name}
            טלפון: ${phone}
            אימייל: ${email}
            
            הודעה:
            ${message || 'לא נמסרה הודעה.'}
        `;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // שימוש במשתנה סביבה
                pass: process.env.GMAIL_APP_PASSWORD, // שימוש במשתנה סביבה (סיסמת אפליקציה)
            }
        });

        await transporter.sendMail({
            from: `"פניות מהאתר" <${process.env.GMAIL_USER}>`,
            to: 'np0559399394@gmail.com', // כתובת היעד
            subject: `פנייה חדשה מ - ${name}`,
            text: emailContent,
        });

        console.log('המייל נשלח בהצלחה.');

        return res.status(200).json({ success: true, message: 'הפניה נשלחה בהצלחה!' });

    } catch (error) {
        console.error('אירעה שגיאה בשרת:', error);
        return res.status(500).json({ success: false, message: 'אירעה שגיאה בשרת. אנא נסה שוב מאוחר יותר.' });
    }
}

module.exports = {
    handleFormSubmission,
};