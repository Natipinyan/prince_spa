import React, { useState } from 'react';
import '../styles/FloatingContactButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp, faWaze } from '@fortawesome/free-brands-svg-icons';
import { Phone } from "lucide-react";


export default function FloatingContactButton({ onClick }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleButtons = () => setIsOpen(prev => !prev);

    return (
        <div className="floating-buttons-wrapper">
            {isOpen && (
                <>
                    <button
                        className="floating-button action-button"
                        onClick={onClick}
                        title="צור קשר"
                        aria-label="צור קשר"
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="social-icon" />
                    </button>

                    <a
                        className="floating-button action-button"
                        href="https://waze.com/ul?q=%D7%94%D7%A4%D7%9C%D7%9E%22%D7%97%20%D7%98%D7%91%D7%A8%D7%99%D7%94&navigate=yes"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Waze"
                        aria-label="Waze"
                    >
                        <FontAwesomeIcon icon={faWaze} className="social-icon" />
                    </a>

                    <a
                        href="https://wa.me/972509478555"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="floating-button action-button"
                        title="WhatsApp"
                        aria-label="WhatsApp"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
                    </a>
                    <a
                        href="tel:0779898890"
                        className="floating-button action-button"
                        title="התקשר עכשיו"
                        aria-label="התקשר עכשיו"
                    >
                        <Phone className="social-icon" />

                    </a>

                </>
            )}

            <button
                className="floating-button main-button"
                onClick={toggleButtons}
                title="תפריט"
                aria-label="תפריט"
            >
                ☰
            </button>
        </div>
    );
}
