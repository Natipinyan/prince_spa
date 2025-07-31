import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import '../styles/Hero.css';

export default function Hero({ language, onBookNowClick }) {
    const content = {
        he: {
            title: 'פרינס ספא',
            subtitle: 'חוויית ספא יוקרתית בלב טבריה',
            description: 'התנסו בחוויה מרגיעה ומחדשת כוחות במתחם הספא המפואר שלנו. טיפולים מקצועיים, בריכות מחוממות ואווירה שלוה הממתינים לכם.',
            bookNow: 'הזמינו עכשיו',
            address: 'טבריה, ישראל',
            phone: '04-123-4567',
            hours: 'ימים א׳-ש׳: 9:00-22:00'
        },
        en: {
            title: 'Prince Spa',
            subtitle: 'Luxury Spa Experience in the Heart of Tiberias',
            description: 'Experience a relaxing and rejuvenating journey at our luxurious spa complex. Professional treatments, heated pools, and a serene atmosphere await you.',
            bookNow: 'Book Now',
            address: 'Tiberias, Israel',
            phone: '04-123-4567',
            hours: 'Sun-Sat: 9:00-22:00'
        }
    };

    const text = content[language];

    return (
        <section className="hero">
            <div
                className="hero__background"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=1080&fit=crop&crop=center)',
                }}
            ></div>
            <div className="hero__overlay"></div>

            <div className="hero__content">
                <p className="hero__subtitle">{text.subtitle}</p>
                <h1 className="hero__title">{text.title}</h1>
                <p className="hero__description">{text.description}</p>

                <button className="hero__cta-button" onClick={onBookNowClick}>
                    {text.bookNow}
                </button>

                <div className="hero__contact-info">
                    <div className="contact-info__item">
                        <MapPin className="contact-info__icon" />
                        <span>{text.address}</span>
                    </div>
                    <div className="contact-info__item">
                        <Phone className="contact-info__icon" />
                        <span>{text.phone}</span>
                    </div>
                    <div className="contact-info__item">
                        <Clock className="contact-info__icon" />
                        <span>{text.hours}</span>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator">
                <div className="scroll-indicator__mouse">
                    <div className="scroll-indicator__wheel"></div>
                </div>
            </div>
        </section>
    );
}