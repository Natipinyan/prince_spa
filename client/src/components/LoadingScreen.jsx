import React from 'react';
import '../styles/LoadingScreen.css';
import logo from '../images/loading.jpg';

export default function LoadingScreen() {
    return (
        <div className="loading-screen">
            <img src={logo} alt="Loading..." className="loading-logo" />
            <div className="spinner"></div>
        </div>
    );
}