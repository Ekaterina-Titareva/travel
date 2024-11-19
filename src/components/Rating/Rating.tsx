import React from "react";

import { RatingType } from "../../types/types";

import star from "../../assets/icons/star.svg";
import star_empty from "../../assets/icons/star_empty.svg";

const Rating: React.FC<RatingType> = ({ rating }) => {
  return (
    <div className="rating">
      {Array.from({ length: 5 }, (_, index) => {
        const isFilled = index < (rating || 0);
        const starSrc = isFilled ? star : star_empty;

        return (
          <img
            key={index}
            className="rating__star"
            src={starSrc}
            alt={isFilled ? "Заполненная звезда" : "Пустая звезда"}
          />
        );
      })}
    </div>
  );
};

export default Rating;
