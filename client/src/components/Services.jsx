import React from 'react';
import { Waves, Snowflake, Droplets, Sun, Coffee, PartyPopper ,Heart,Calendar} from 'lucide-react';
import '../styles/services.css';
import massage from '../images/massageBed2.jpg';
import bar from '../images/bar1.jpg';
import oil from '../images/oilBath.jpg';
import ice from '../images/ice.jpg';
import pool from '../images/pool.jpg';
import lovePackage from '../images/couple.JPG';
import groups from '../images/groups.jpg';
import heroBackground from '../images/heroBackground.jpg';


export default function Services({ language }) {
    const content = {
        he: {
            title: 'השירותים שלנו',
            subtitle: 'חוויות ייחודיות לכל הגוף',
            services: [
                {
                    icon: Waves,
                    title: 'בריכה חיצונית גדולה',
                    description: 'בריכה גדולה ומפוארת, המים מתאימים לשימוש בכל עונות השנה – בחורף המים מחוממים לחוויה מושלמת בכל מזג אוויר.',
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
                    title: 'אמבט קרח',
                    description: 'חוויה מרעננת ומחזקת באמבט קרח טיפולית לשיפור הזרימה וחיזוק המערכת החיסונית.',
                    image: ice,
                },
                {
                    icon: Sun,
                    title: 'אמבט שמנים',
                    description: 'טבילה באמבט שמנים עשיר במינרלים טבעיים לחוויה חושית מרגיעה ובריאותית.',
                    image: oil,
                },
                {
                    icon: Coffee,
                    title: 'בר מסעדה ושירותי אוכל',
                    description: 'במקום פועל בר מסעדה מובחר המציע מגוון משקאות איכותיים ומנות – פיצות טריות, פלטות גבינות, פלטות ירקות, פסטות ועוד.',
                    image: bar,
                },
                {
                    icon: PartyPopper,
                    title: 'אירועים, ימי הולדת ומסיבות חברים',
                    description: 'מקום אידיאלי לחגוג עם המשפחה והחברים – ימי הולדת, מסיבות פרטיות ואירועים בלתי נשכחים באווירה ייחודית.',
                    image: heroBackground,
                },
                {
                    icon: Calendar,
                    title: 'ימי פעילות לחברות וימי כיף לקבוצות',
                    description: 'אנו מציעים חבילות מותאמות אישית לימי גיבוש, ימי כיף ופעילויות ייחודיות לקבוצות – שילוב מושלם של רוגע, חוויות ואוכל מצוין.',
                    image: groups,
                },
                {
                    icon: Heart,
                    title: 'חבילת אהבה בשניים',
                    description: 'חוויה זוגית יוקרתית הכוללת סוויטה פרטית עם ג’קוזי מפנק, מסאז׳ זוגי של 45 דקות, פינוקי שוקולד ויין משובח. החבילה כוללת שעה וחצי של רומנטיקה טהורה.',
                    image: lovePackage,
                }
            ]
        },
        en: {
            title: 'Our Services',
            subtitle: 'A unique experience for the whole body',
            services: [
                {
                    icon: Waves,
                    title: 'Large Outdoor Pool',
                    description: 'A grand and luxurious pool suitable for all seasons – in winter the water is heated for a perfect experience in any weather.',
                    image: pool,
                },
                {
                    icon: Droplets,
                    title: 'Professional Massage Treatments',
                    description: 'A variety of massage treatments by professional therapists for deep relaxation and stress relief.',
                    image: massage,
                },
                {
                    icon: Snowflake,
                    title: 'Ice Bath',
                    description: 'A refreshing and strengthening experience in a therapeutic ice bath to improve circulation and boost immunity.',
                    image: ice,
                },
                {
                    icon: Sun,
                    title: 'Mineral Oil Bath',
                    description: 'Immersion in a mineral-rich oil bath for a relaxing and health-enhancing sensory experience.',
                    image: oil,
                },
                {
                    icon: Coffee,
                    title: 'Restaurant Bar & Food Services',
                    description: 'A restaurant bar offering a wide selection of quality drinks and dishes – fresh pizzas, cheese platters, vegetable platters, pasta, and more.',
                    image: bar,
                },
                {
                    icon: PartyPopper,
                    title: 'Events & Parties',
                    description: 'The perfect place to celebrate with family and friends – birthdays, private parties, and unforgettable events in a unique atmosphere.',
                    image: heroBackground,
                },
                {
                    icon: Calendar,
                    title: 'Corporate & Group Activity Days',
                    description: 'We offer customized packages for team-building, fun days, and unique activities for groups – the perfect combination of relaxation, experiences, and great food.',
                    image: groups,
                },
                {
                    icon: Heart,
                    title: 'Couple’s Love Package',
                    description: 'A luxurious romantic experience including a private suite with a jacuzzi, a 45-minute couples massage, chocolate treats, and fine wine. Duration: one and a half hours of pure romance.',
                    image: lovePackage,
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
                <p className="services__extra-note">
                    {language === 'he'
                        ? 'בחבילות הטיפול תיהנו מאירוח הכולל שתייה קרה, פינת קפה ותה, עוגיות וכיבוד קל. לשדרוג החוויה, ניתן להוסיף ארוחות מלאות בתוספת תשלום.'
                        : 'Our massage and bath packages include hospitality with cold beverages, a coffee and tea corner, cookies, and light refreshments. To upgrade your experience, you can add full meals for an extra charge.'}
                </p>
            </div>
        </section>
    );
}