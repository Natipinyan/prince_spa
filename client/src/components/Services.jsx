import React from 'react';
import { Waves, Snowflake, Droplets, Sun, Coffee } from 'lucide-react';
import '../styles/services.css';
import massage from '../images/massageBed2.jpg';
import bar from '../images/bar1.jpg';
import oil from '../images/oilBath.jpg';
import ice from '../images/ice.jpg';
import pool from '../images/highLookNight3.jpg';

export default function Services({ language }) {
    const content = {
        he: {
            title: 'השירותים שלנו',
            subtitle: 'חוויות ייחודיות לכל הגוף',
            services: [
                {
                    icon: Waves,
                    title: 'בריכה חיצונית מחוממת',
                    description: 'בריכה גדולה ומפוארת עם מים מחוממים, מושלמת לרגיעה והנאה בכל עונות השנה.',
                    image: pool,
                },
                {
                    icon: Droplets,
                    title: 'טיפולי מסאז׳ מקצועיים',
                    description: 'מגוון טיפולי מסאז׳ על ידי מטפלים מקצועיים לרגיעה עמוקה ושחרור מתחים.',
                    image: massage,
                },
                {
                    icon: Snowflake,
                    title: 'בריכת קרח',
                    description: 'חוויה מרעננת ומחזקת בבריכת קרח טיפולית לשיפור הזרימה וחיזוק המערכת החיסונית.',
                    image: ice,
                },
                {
                    icon: Sun,
                    title: 'בריכת שמנים ארומטיים',
                    description: 'טבילה במים עשירים בשמנים ארומטיים טבעיים לחוויה חושית מרגיעה.',
                    image: oil,
                },
                {
                    icon: Coffee,
                    title: 'בר ושירותי הארחה',
                    description: 'בר מלא עם משקאות רעננים וכיבוד קל, בחצר ירוקה ונעימה.',
                    image: bar,
                }
            ]
        },
        en: {
            title: 'Our Services',
            subtitle: 'A unique experience for the whole body',
            services: [
                {
                    icon: Waves,
                    title: 'Large Heated Outdoor Pool',
                    description: 'A grand and luxurious pool with heated water, perfect for relaxation and enjoyment year-round.',
                    image: pool,
                },
                {
                    icon: Droplets,
                    title: 'Professional Massage Treatments',
                    description: 'A variety of massage treatments by professional therapists for deep relaxation and stress relief.',
                    image: massage,                },
                {
                    icon: Snowflake,
                    title: 'Ice Pool',
                    description: 'A refreshing and strengthening experience in our therapeutic ice pool to improve circulation and boost immunity.',
                    image: ice,
                },
                {
                    icon: Sun,
                    title: 'Aromatic Oil Pool',
                    description: 'Immersion in waters enriched with natural aromatic oils for a relaxing sensory experience.',
                    image: oil,
                },
                {
                    icon: Coffee,
                    title: 'Bar & Hospitality Services',
                    description: 'Full bar with refreshing drinks and light refreshments, in a green and pleasant courtyard.',
                    image: bar,
                }
            ]
        }
    };

    const text = content[language] || content.en;

    return (
        <section className="services">
            <div className="services__container">
                <div className="services__header">
                    <h2 className="services__title">{text.title}</h2>
                    <p className="services__subtitle">{text.subtitle}</p>
                </div>

                <div className="services__grid">
                    {text.services && text.services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-card__image-wrapper">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="service-card__image"
                                />
                                <div className="service-card__image-overlay"></div>
                                <div className="service-card__icon-wrapper">
                                    <service.icon className="service-card__icon" />
                                </div>
                            </div>
                            <div className="service-card__content">
                                <h3 className="service-card__title">
                                    {service.title}
                                </h3>
                                <p className="service-card__description">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}