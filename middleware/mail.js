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
            host: process.env.SMTP_HOST, // environment variable for SMTP host
            port: Number(process.env.SMTP_PORT), // environment variable for SMTP port
            secure: process.env.SMTP_SECURE === 'true', // environment variable for secure connection
            auth: {
                user: process.env.EMAIL_USER, // environment variable for email user
                pass: process.env.EMAIL_PASS, // environment variable for email password
            },
        })

        await transporter.sendMail({
            from: `"פניות מהאתר" <${process.env.EMAIL_USER}>`, // environment variable for email user
            to: process.env.EMAIL_TO, // environment variable for recipient email
            subject: `פנייה חדשה מ - ${name}`,
            html: htmlContent
        });


        //console.log('המייל נשלח בהצלחה.');

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