import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import '../styles/Hero.css';
import heroBackground from '../images/heroBackground.jpg';
import logoHero from '../images/logoHero.png';

export default function Hero({ language, onBookNowClick }) {
    const content = {
        he: {
            title: 'פרינס ספא',
            subtitle: 'חוויית ספא יוקרתית בלב טבריה',
            description: 'התנסו בחוויה מרגיעה ומחדשת כוחות במתחם הספא המפואר שלנו. טיפולים מקצועיים, בריכות בטמפרטורה נעימה לאורך כל השנה, ואווירה שלוה הממתינה לכם',
            bookNow: 'הזמינו עכשיו',
            address: 'הפלמ״ח, טבריה, ישראל',
            phones: ['077-9898890', '050-9478555'],
            hours: 'ימים א׳–ה׳: 9:00–19:00 | יום ו׳: 9:00–שעה לפני כניסת שבת'
        },
        en: {
            title: 'Prince Spa',
            subtitle: 'Luxury Spa Experience in the Heart of Tiberias',
            description: 'Experience a relaxing and rejuvenating journey at our luxurious spa complex. Professional treatments, pools maintained at an optimal temperature year-round, and a serene atmosphere await you.',
            bookNow: 'Book Now',
            address: 'HaPalmach St, Tiberias, Israel',
            phones: ['+972-77-989-8890', '+972-50-947-8555'],
            hours: 'Sun–Thu: 9:00–19:00 | Fri: 9:00–One hour before Shabbat'
        }
    };


    const text = content[language];

    return (
        <section className="hero">
            <div
                className="hero__background"
                style={{
                    backgroundImage: `url(${heroBackground})`
                }}
            ></div>
            <div className="hero__overlay"></div>

            <div className="hero__content">
                <p className="hero__subtitle">{text.subtitle}</p>
                <img
                    src={logoHero}
                    alt="Prince Spa Logo"
                    className="hero__logo"
                />
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
                    {text.phones.map((phone, index) => (
                        <div className="contact-info__item" key={index}>
                            <Phone className="contact-info__icon" />
                            <span>{phone}</span>
                        </div>
                    ))}
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
