import React, { useState, useEffect } from 'react';

// Components
import LanguageToggle from './components/LanguageToggle';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';
import FloatingContactButton from './components/FloatingContactButton';
import LoadingScreen from './components/LoadingScreen';

// Images from Hero / general
import heroBackground from './images/heroBackground.jpg';
import logoHero from './images/logoHero.png';

// Images from Services
import massage from './images/massageBed2.jpg';
import bar from './images/bar1.jpg';
import oil from './images/oilBath.jpg';
import ice from './images/ice.jpg';
import pool from './images/pool.jpg';
import lovePackage from './images/couple.JPG';
import groups from './images/groups.jpg';

// Styles
import './styles/globals.css';

/**
 * Preload a single image
 * @param {string} src
 * @returns {Promise<void>}
 */
const preloadImage = (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
    });
};

export default function Home() {
    const [language, setLanguage] = useState('he');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const imagesToPreload = [
            // Hero & general
            heroBackground,
            logoHero,

            // Services
            massage,
            bar,
            oil,
            ice,
            pool,
            lovePackage,
            groups,
        ];

        const preloadAllImages = async () => {
            try {
                await Promise.all(imagesToPreload.map(preloadImage));
            } catch (error) {
                console.error("שגיאה בטעינה מוקדמת של תמונות:", error);
            } finally {
                setIsLoading(false);
            }
        };

        preloadAllImages();
    }, []);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'he' ? 'en' : 'he'));
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const appClassName = `app-container ${language === 'he' ? 'lang-he' : 'lang-en'}`;

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <div className={appClassName}>
            <LanguageToggle language={language} onLanguageChange={toggleLanguage} />

            <main>
                <Hero language={language} onBookNowClick={openModal} />
                <Services language={language} />
                <Gallery language={language} />
                <Contact language={language} onBookNowClick={openModal} />
            </main>

            <footer className="site-footer">
                <p className="footer-text">
                    {language === 'he'
                        ? '© 2025 פרינס ספא טבריה. כל הזכויות שמורות.'
                        : '© 2024 Prince Spa Tiberias. All rights reserved.'}
                </p>
                <p className="footer-text">nati pinyan 0559399394</p>
            </footer>

            <FloatingContactButton onClick={openModal} language={language} />

            {isModalOpen && <BookingModal onClose={closeModal} language={language} />}
        </div>
    );
}
