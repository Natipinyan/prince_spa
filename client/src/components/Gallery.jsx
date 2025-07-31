import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import galleryData from '../Entities/GalleryImage.json';
import '../styles/gallery.css';

export default function Gallery({ language }) {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setImages(galleryData);
    }, []);

    const content = {
        he: {
            title: 'גלריית תמונות',
            subtitle: 'הציצו פנימה לעולם של יוקרה ורגיעה'
        },
        en: {
            title: 'Photo Gallery',
            subtitle: 'Peek inside our world of luxury and relaxation'
        }
    };

    const text = content[language] || content.en;

    const openModal = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        const nextIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(nextIndex);
        setSelectedImage(images[nextIndex]);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        setSelectedImage(images[prevIndex]);
    };

    return (
        <section className="gallery">
            <div className="gallery__container">
                <div className="gallery__header">
                    <h2 className="gallery__title">{text.title}</h2>
                    <p className="gallery__subtitle">{text.subtitle}</p>
                </div>

                <div className="gallery__grid">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="gallery__item"
                            onClick={() => openModal(image, index)}
                        >
                            <img src={image.url} alt={image.title} className="gallery__image" />
                            <div className="gallery__item-overlay">
                                <div className="gallery__item-caption">
                                    <h3 className="gallery__item-title">{image.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="gallery__modal" onClick={closeModal}>
                    <div className="gallery__modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.url} alt={selectedImage.title} className="gallery__modal-image" />

                        <button className="gallery__modal-button gallery__modal-button--close" onClick={closeModal}><X size={28} /></button>
                        <button className="gallery__modal-button gallery__modal-button--prev" onClick={prevImage}><ChevronLeft size={36} /></button>
                        <button className="gallery__modal-button gallery__modal-button--next" onClick={nextImage}><ChevronRight size={36} /></button>

                        <div className="gallery__modal-caption">
                            <h3 className="gallery__modal-title">{selectedImage.title}</h3>
                            {selectedImage.description && (
                                <p className="gallery__modal-description">{selectedImage.description}</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}