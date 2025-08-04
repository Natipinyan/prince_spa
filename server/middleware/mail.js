const nodemailer = require('nodemailer');
const axios = require('axios');

require('dotenv').config();

async function handleFormSubmission(req, res) {
    try {
        const { name, phone, email, message, captchaToken } = req.body;

        if (!name || !phone || !email || !captchaToken) {
            return res.status(400).json({ success: false, message: 'נא למלא את כל שדות החובה.' });
        }

        const secretKey = process.env.RECAPTCHA_SECRET_KEY; // environment variable for reCAPTCHA secret key
        const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

        const recaptchaResponse = await axios.post(verifyUrl);

        if (!recaptchaResponse.data.success) {
            return res.status(400).json({ success: false, message: 'אימות reCAPTCHA נכשל. ייתכן שאתה רובוט.' });
        }
        const htmlContent = generateHtmlEmailContent({ name, phone, email, message });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER, // environment variable for Gmail user
                pass: process.env.GMAIL_APP_PASSWORD, // environment variable for Gmail app password
            }
        });

        await transporter.sendMail({
            from: `"פניות מהאתר" <${process.env.GMAIL_USER}>`,
            to: process.env.EMAIL_ADDRES,
            subject: `פנייה חדשה מ - ${name}`,
            html: htmlContent
        });

        console.log('המייל נשלח בהצלחה.');

        return res.status(200).json({ success: true, message: 'הפניה נשלחה בהצלחה!' });

    } catch (error) {
        console.error('אירעה שגיאה בשרת:', error);
        return res.status(500).json({ success: false, message: 'אירעה שגיאה בשרת. אנא נסה שוב מאוחר יותר.' });
    }
}


function generateHtmlEmailContent({ name, phone, email, message }) {
    return `
<div style="direction: rtl; font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; background-color: #f9f9f9;">
  <h2 style="color: #333;">📩 פנייה חדשה מהאתר</h2>
  <hr style="border: none; border-top: 1px solid #ccc;" />

  <p><strong>שם מלא:</strong> ${name}</p>
  <p><strong>טלפון:</strong> ${phone}</p>
  <p><strong>אימייל:</strong> ${email}</p>

  <p><strong>הודעה:</strong></p>
  <div style="background-color: #fff; border: 1px solid #ddd; padding: 10px; border-radius: 5px;">
    ${message ? message.replace(/\n/g, '<br>') : 'לא נמסרה הודעה.'}
  </div>

  <hr style="border: none; border-top: 1px solid #eee; margin-top: 30px;" />
  <p style="font-size: 12px; color: #999;">ההודעה נשלחה אוטומטית מהאתר.</p>
</div>
    `;
}

module.exports = generateHtmlEmailContent;


module.exports = {
    handleFormSubmission,
};