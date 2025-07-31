import React, { useState } from 'react';

import LanguageToggle from './components/LanguageToggle';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import BookingModal from './components/BookingModal';
import FloatingContactButton from './components/FloatingContactButton';

import './styles/globals.css';

export default function Home() {
    const [language, setLanguage] = useState('he');

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'he' ? 'en' : 'he');
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const appClassName = `app-container ${language === 'he' ? 'lang-he' : 'lang-en'}`;

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
                        ? '© 2024 פרינס ספא טבריה. כל הזכויות שמורות.'
                        : '© 2024 Prince Spa Tiberias. All rights reserved.'
                    }
                </p>
            </footer>

            <FloatingContactButton onClick={openModal} />
            {isModalOpen && <BookingModal onClose={closeModal} language={language} />}
        </div>
    );
}