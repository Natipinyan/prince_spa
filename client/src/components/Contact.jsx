import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import BookingModal from './BookingModal';
import '../styles/contact.css';

const InfoItem = ({ icon: Icon, title, text }) => (
    <div className="info-item">
        <Icon className="info-item__icon" />
        <div className="info-item__content">
            <h4 className="info-item__title">{title}</h4>
            <p className="info-item__text">{text}</p>
        </div>
    </div>
);

export default function Contact({ language }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const content = {
        he: {
            title: 'צרו קשר',
            subtitle: 'נשמח לעמוד לשירותכם',
            addressTitle: 'כתובת',
            address: 'רחוב הגליל 12, טבריה',
            phoneTitle: 'טלפון',
            phone: '04-123-4567',
            emailTitle: 'אימייל',
            email: 'info@princespa.co.il',
            hoursTitle: 'שעות פתיחה',
            hours: 'ימים א׳-ש׳: 9:00 - 22:00',
            bookingTitle: 'הזמנת טיפול',
            bookingText: 'לקבלת פרטים נוספים והזמנת תור, לחצו על הכפתור מטה.',
            bookNow: 'הזמינו עכשיו',
            followUs: 'עקבו אחרינו',
            mapPlaceholder: 'מפת הגעה'
        },
        en: {
            title: 'Contact Us',
            subtitle: 'We\'re here to serve you',
            addressTitle: 'Address',
            address: '12 Galilee Street, Tiberias',
            phoneTitle: 'Phone',
            phone: '04-123-4567',
            emailTitle: 'Email',
            email: 'info@princespa.co.il',
            hoursTitle: 'Opening Hours',
            hours: 'Sun - Sat: 9:00 AM - 10:00 PM',
            bookingTitle: 'Book a Treatment',
            bookingText: 'For more details and to book an appointment, click the button below.',
            bookNow: 'Book Now',
            followUs: 'Follow Us',
            mapPlaceholder: 'Interactive Map'
        }
    };

    const text = content[language] || content.en;

    return (
        <>
            <section className="contact">
                <div className="contact__container">
                    <div className="contact__header">
                        <h2 className="contact__title">{text.title}</h2>
                        <p className="contact__subtitle">{text.subtitle}</p>
                    </div>

                    <div className="contact__grid">
                        <div className="contact__info-list">
                            <InfoItem icon={MapPin} title={text.addressTitle} text={text.address} />
                            <InfoItem icon={Phone} title={text.phoneTitle} text={text.phone} />
                            <InfoItem icon={Mail} title={text.emailTitle} text={text.email} />
                            <InfoItem icon={Clock} title={text.hoursTitle} text={text.hours} />
                        </div>

                        <div className="booking-card">
                            <h3 className="booking-card__title">{text.bookingTitle}</h3>
                            <p className="booking-card__text">{text.bookingText}</p>
                            <button className="booking-card__button" onClick={openModal}>
                                {text.bookNow}
                            </button>
                        </div>

                        <div className="contact__social-map">
                            <div className="social-links">
                                <h3 className="social-links__title">{text.followUs}</h3>
                                <div className="social-links__icons">
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-links__icon-button" aria-label="Instagram">
                                        <Instagram />
                                    </a>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-links__icon-button" aria-label="Facebook">
                                        <Facebook />
                                    </a>
                                </div>
                            </div>
                            <div className="map-placeholder">
                                <MapPin className="map-placeholder__icon" />
                                <p>{text.mapPlaceholder}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isModalOpen && <BookingModal onClose={closeModal} language={language} />}
        </>
    );
}