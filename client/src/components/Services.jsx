import React from 'react';
import { Waves, Snowflake, Droplets, Sun, Coffee } from 'lucide-react';
import '../styles/services.css';

export default function Services({ language }) {
    const content = {
        he: {
            title: 'השירותים שלנו',
            subtitle: 'חוויות ייחודיות לכל חוש',
            services: [
                {
                    icon: Waves,
                    title: 'בריכה חיצונית מחוממת',
                    description: 'בריכה גדולה ומפוארת עם מים מחוממים, מושלמת לרגיעה והנאה בכל עונות השנה.',
                    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop'
                },
                {
                    icon: Droplets,
                    title: 'טיפולי מסאז׳ מקצועיים',
                    description: 'מגוון טיפולי מסאז׳ על ידי מטפלים מקצועיים לרגיעה עמוקה ושחרור מתחים.',
                    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop'
                },
                {
                    icon: Snowflake,
                    title: 'בריכת קרח',
                    description: 'חוויה מרעננת ומחזקת בבריכת קרח טיפולית לשיפור הזרימה וחיזוק המערכת החיסונית.',
                    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
                },
                {
                    icon: Sun,
                    title: 'בריכת שמנים ארומטיים',
                    description: 'טבילה במים עשירים בשמנים ארומטיים טבעיים לחוויה חושית מרגיעה.',
                    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop'
                },
                {
                    icon: Coffee,
                    title: 'בר ושירותי הארחה',
                    description: 'בר מלא עם משקאות רעננים וכיבוד קל, בחצר ירוקה ונעימה.',
                    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop'
                }
            ]
        },
        en: {
            title: 'Our Services',
            subtitle: 'Unique experiences for every sense',
            services: [
                {
                    icon: Waves,
                    title: 'Large Heated Outdoor Pool',
                    description: 'A grand and luxurious pool with heated water, perfect for relaxation and enjoyment year-round.',
                    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop'
                },
                {
                    icon: Droplets,
                    title: 'Professional Massage Treatments',
                    description: 'A variety of massage treatments by professional therapists for deep relaxation and stress relief.',
                    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop'
                },
                {
                    icon: Snowflake,
                    title: 'Ice Pool',
                    description: 'A refreshing and strengthening experience in our therapeutic ice pool to improve circulation and boost immunity.',
                    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
                },
                {
                    icon: Sun,
                    title: 'Aromatic Oil Pool',
                    description: 'Immersion in waters enriched with natural aromatic oils for a relaxing sensory experience.',
                    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop'
                },
                {
                    icon: Coffee,
                    title: 'Bar & Hospitality Services',
                    description: 'Full bar with refreshing drinks and light refreshments, in a green and pleasant courtyard.',
                    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop'
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