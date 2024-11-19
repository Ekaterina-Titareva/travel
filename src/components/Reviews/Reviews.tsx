import React from "react";
import "swiper/scss";
import "swiper/scss/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { ReviewsProps } from "../../types/types";
import reviewsData from "../../constants/reviewsData";

import Card from "../Card/Card";

import "./Reviews.scss";

const Reviews: React.FC<ReviewsProps> = ({ openModal }) => {
  return (
    <div className="reviews">
      <h2 className="reviews__title">Отзывы о Барселоне</h2>
      <div className="reviews__container">
        <Swiper
          slidesPerView={2.5}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          modules={[Pagination]}
        >
          {reviewsData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Card
                  id={item.id}
                  name={item.name}
                  avatar={item.avatar}
                  text={item.text}
                  images={item.images}
                  date={item.date}
                  comments={item.comments}
                  likes={item.likes}
                  openModal={openModal}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <button className="reviews__button">Все отзывы</button>
    </div>
  );
};

export default Reviews;
