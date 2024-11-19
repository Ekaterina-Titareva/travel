import React from "react";

import { CardParams } from "../../types/types";
import like from "../../assets/icons/like.svg";

import "./Card.scss";

const Card: React.FC<CardParams> = ({
  name,
  avatar,
  text,
  openModal,
  images,
  date,
  comments,
  likes,
}) => {
  return (
    <div className="card">
      <div className="card__person">
        <img className="card__avatar" src={avatar} alt="" />
        <h3 className="card__fullname">{name}</h3>
      </div>
      <div className="card__description">
        <h3 className="card__title">
          <span>Барселона</span> — О городе:
        </h3>
        <p className="card__text">{text}</p>
        <div className="card__container">
          {images.slice(0, 4).map((item, index) => (
            <div
              key={item.id}
              className="card__image-wrapper"
              onClick={() => {
                openModal(images, item.id);
              }}
            >
              <img className="card__image" src={item.src} alt={item.alt} />
              {index === 3 && images.length > 4 && (
                <div className="card__image-overlay">+{images.length - 4}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="card__info">
        <div className="card__info-box">
          <p>{date}</p>
          <span>•</span>
          <p>{comments}</p>
        </div>
        <div className="card__info-box">
          <img className="card__like" src={like} alt="" />
          <p>{likes}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
