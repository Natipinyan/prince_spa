import React from 'react';
import { Globe } from 'lucide-react';
import '../styles/languageToggle.css';

export default function LanguageToggle({ language, onLanguageChange }) {
    return (
        <button
            onClick={onLanguageChange}
            className="language-toggle"
            aria-label="Change language"
        >
            <Globe className="language-toggle__icon" />
            <span className="language-toggle__text">
                {language === 'he' ? 'English' : 'עברית'}
            </span>
        </button>
    );
}