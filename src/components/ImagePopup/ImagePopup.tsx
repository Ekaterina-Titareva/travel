import React, { useState, useEffect } from "react";
import { ModalProps } from "../../types/types";
import "./ImagePopup.scss";

const ImagePopup: React.FC<ModalProps> = ({
  isOpen,
  images,
  currentImage,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(currentImage || 0);

  useEffect(() => {
    setCurrentIndex(currentImage || 0);
  }, [currentImage]);

  const handlePrevImage = () => {
    if (images)
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextImage = () => {
    if (images) setCurrentIndex((currentIndex + 1) % images.length);
  };

  if (!images || images.length === 0) {
    return (
      <div className={`popup popup-image ${isOpen ? "popup_opened" : ""}`}>
        <p>Изображений нет</p>
        <button
          type="button"
          onClick={onClose}
          className="popup-image__button-close"
        >
          Закрыть
        </button>
      </div>
    );
  }

  return (
    <div className={`popup popup-image ${isOpen ? "popup_opened" : ""}`}>
      <figure className="popup-image__figure">
        <div className="popup-image__container">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="popup-image__element"
          />
          <button
            className="popup-image__button popup-image__button-prev"
            type="button"
            onClick={handlePrevImage}
          >
            &#x276E;
          </button>
          <button
            className="popup-image__button popup-image__button-next"
            type="button"
            onClick={handleNextImage}
          >
            &#x276F;
          </button>
          <button
            type="button"
            onClick={onClose}
            className="popup-image__button popup-image__button-close"
          >
            Закрыть
          </button>
        </div>
      </figure>
    </div>
  );
};

export default ImagePopup;
