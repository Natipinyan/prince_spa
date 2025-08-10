import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import BookingModal from './BookingModal';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWaze, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

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
            title: 'פרינס ספא',
            subtitle: 'חוויית ספא יוקרתית בלב טבריה',
            description: 'התנסו בחוויה מרגיעה ומחדשת כוחות במתחם הספא המפואר שלנו. טיפולים מקצועיים, בריכות מחוממות ואווירה שלווה הממתינים לכם',
            bookNow: 'הזמינו עכשיו',
            address: 'הפלמ״ח, טבריה, ישראל',
            phones: ['077-9898890', '050-9478555'],
            hours: 'ימים א׳–ה׳: 9:00–19:00 | יום ו׳: 9:00–שעה לפני כניסת שבת',
            followUs: 'עקבו אחרינו',
            mapPlaceholder: 'מפת הגעה',
            whatsappText: 'שלחו לנו הודעה בוואצאפ',
        },
        en: {
            title: 'Prince Spa',
            subtitle: 'Luxury Spa Experience in the Heart of Tiberias',
            description: 'Experience a relaxing and rejuvenating journey at our luxurious spa complex. Professional treatments, heated pools, and a serene atmosphere await you',
            bookNow: 'Book Now',
            address: 'HaPalmach St, Tiberias, Israel',
            phones: ['+972-77-989-8890', '+972-50-947-8555'],
            hours: 'Sun–Thu: 9:00–19:00 | Fri: 9:00–One hour before Shabbat',
            followUs: 'Follow Us',
            mapPlaceholder: 'Interactive Map',
            whatsappText: 'Send us a message on WhatsApp',
        },
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
                            <InfoItem icon={MapPin} title="כתובת" text={text.address}/>
                            <InfoItem icon={Phone} title="טלפון" text={text.phones.join(", ")}/>
                            <InfoItem icon={Mail} title="אימייל" text="info@princespatiberyas.com"/>
                            <InfoItem icon={Clock} title="שעות פתיחה" text={text.hours}/>
                        </div>

                        <div className="booking-card">
                            <h3 className="booking-card__title">{text.bookingTitle}</h3>
                            <p className="booking-card__text">{text.description}</p>
                            <button className="booking-card__button" onClick={openModal}>
                                {text.bookNow}
                            </button>
                        </div>

                        <div className="contact__social-map">

                            <div className="social-links__icons">
                                <a
                                    href="https://www.facebook.com/nisim.elmalem.9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-links__icon-button"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="social-icon"/>
                                </a>
                                <a
                                    href="https://wa.me/+972509478555"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-links__icon-button"
                                    aria-label="WhatsApp"
                                >
                                    <FontAwesomeIcon icon={faWhatsapp} className="social-icon"/>
                                </a>
                                <a
                                    href="https://waze.com/ul?q=%D7%94%D7%A4%D7%9C%D7%9E%22%D7%97%20%D7%98%D7%91%D7%A8%D7%99%D7%94&navigate=yes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-links__icon-button"
                                    aria-label="Waze"
                                >
                                    <FontAwesomeIcon icon={faWaze} className="social-icon" />
                                </a>
                            </div>

                            <div className="map-placeholder">
                                <iframe
                                    className="map-placeholder__map"
                                    title="Prince Spa Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.1674329043583!2d35.539938256114375!3d32.79071926496963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151c3e463efe6f8f%3A0x1f49eb02fe68991b!2z15TXpNec154i15csINeY15HXqNeZ15Q!5e0!3m2!1siw!2sil!4v1754318353732!5m2!1siw!2sil"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                                <p>{text.mapPlaceholder}</p>
                            </div>
                        </div>



                    </div>
                </div>
            </section>

            {isModalOpen && (
                <BookingModal
                    onClose={closeModal}
                    language={language}
                />
            )}

        </>
    );
}
