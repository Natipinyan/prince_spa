import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import '../styles/bookingModal.css';

export default function BookingModal({ onClose, language }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const [submissionStatus, setSubmissionStatus] = useState({ message: '', type: '' });
    const [isLoading, setIsLoading] = useState(false);

    const recaptchaRef = useRef(null);

    const content = {
        he: {
            title: 'יצירת קשר מהירה',
            name: 'שם מלא',
            phone: 'טלפון',
            email: 'אימייל',
            message: 'הודעה (אופציונלי)',
            send: 'שליחה',
            sending: 'שולח...',
            successMessage: 'תודה! פנייתך נשלחה ונחזור אליך בהקדם.',
            captchaError: 'אימות reCAPTCHA נכשל. אנא נסה שנית.',
            genericError: 'אירעה שגיאה. אנא נסה שוב מאוחר יותר.'
        },
        en: {
            title: 'Quick Booking Inquiry',
            name: 'Full Name',
            phone: 'Phone',
            email: 'Email',
            message: 'Message (Optional)',
            send: 'Send',
            sending: 'Sending...',
            successMessage: 'Thank you! Your inquiry has been sent.',
            captchaError: 'reCAPTCHA verification failed. Please try again.'
        }
    };


    const text = content[language] || content.en;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoading) return;

        setIsLoading(true);
        setSubmissionStatus({ message: '', type: '' });

        try {
            const token = await recaptchaRef.current.executeAsync();
            if (!token) {
                throw new Error(text.captchaError);
            }

            //const response = await fetch(`${process.env.REACT_APP_API_URL}/mail`, { // development
            const response = await fetch('/mail', {// production
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, captchaToken: token }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || text.genericError);
            }

            setSubmissionStatus({ message: result.message, type: 'success' });
            setFormData({ name: '', phone: '', email: '', message: '' });

            setTimeout(() => {
                onClose();
            }, 5000);

        } catch (error) {
            console.error("An error occurred during submission:", error);
            const errorMessage = error.message || "תקלה בתקשורת עם השרת. אנא ודא חיבור לרשת.";
            setSubmissionStatus({ message: errorMessage, type: 'error' });
    } finally {

            recaptchaRef.current.reset();
        }
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const renderSubmissionArea = () => {
        if (submissionStatus.message) {
            return (
                <div className={`submission-status ${submissionStatus.type}`}>
                    {submissionStatus.message}
                </div>
            );
        }
        if (isLoading) {
            return (
                <div className="loading-indicator">
                    {text.sending}
                </div>
            );
        }
        return (
            <button type="submit" className="booking-form__submit-btn">
                {text.send}
            </button>
        );
    };

    return (
        <div className="booking-modal__backdrop" onClick={onClose}>
            <div className="booking-modal__content" onClick={(e) => e.stopPropagation()}>
                <button className="booking-modal__close-btn" onClick={onClose} aria-label="Close">
                    <X size={24} />
                </button>

                <h3 className="booking-modal__title">{text.title}</h3>

                <form onSubmit={handleSubmit} className="booking-form">
                    <div className="form-group">
                        <label htmlFor="name">{text.name}</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">{text.phone}</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">{text.email}</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{text.message}</label>
                        <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <ReCAPTCHA ref={recaptchaRef} sitekey="6LekYporAAAAAJWeBBQFXYrpAW5ReHCuhPxHfDf_" size="invisible" />
                    </div>

                    <div className="form-submission-area">
                        {renderSubmissionArea()}
                    </div>
                </form>
            </div>
        </div>
    );
}