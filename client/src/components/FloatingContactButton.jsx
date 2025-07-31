import React from 'react';
import { Phone } from 'lucide-react';
import '../styles/FloatingContactButton.css';

export default function FloatingContactButton({ onClick }) {
    return (
        <button
            className="floating-contact-btn"
            onClick={onClick}
            aria-label="צור קשר"
        >
            <Phone size={28} />
        </button>
    );
}