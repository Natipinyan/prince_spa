import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

import '../styles/bookingModal.css';

export default function BookingModal({ onClose, language }) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const content = {
        he: {
            title: 'יצירת קשר מהירה',
            name: 'שם מלא',
            phone: 'טלפון',
            email: 'אימייל',
            message: 'הודעה (אופציונלי)',
            send: 'שליחה',
            successMessage: 'תודה! פנייתך נשלחה ונחזור אליך בהקדם.'
        },
        en: {
            title: 'Quick Booking Inquiry',
            name: 'Full Name',
            phone: 'Phone',
            email: 'Email',
            message: 'Message (Optional)',
            send: 'Send',
            successMessage: 'Thank you! Your inquiry has been sent.'
        }
    };

    const text = content[language] || content.en;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        alert(text.successMessage);
        onClose();
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);


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

                    <button type="submit" className="booking-form__submit-btn">
                        {text.send}
                    </button>
                </form>
            </div>
        </div>
    );
}