import React, { useState } from "react";
import "./Review.scss";
import { FormattedMessage } from "react-intl";
import { ReviewInterface } from "../../../interfaces/ReviewInterface";
import { formatDateDiscount } from "../../../utils/formatDateDiscount";

const Review = ({ review }: { review: ReviewInterface }) => {
  const renderRatingStars = () => {
    const ratingStars = [];
    for (let i = 0; i < review.rating; i++) {
      ratingStars.push(
        <img
          key={i}
          src={require("../../../assets/icons/StarIcon.png")}
          className="review--icon"
          alt="star"
        />
      );
    }
    for (let i = review.rating; i < 5; i++) {
      ratingStars.push(
        <img
          key={i}
          src={require("../../../assets/icons/EmptyStarIcon.png")}
          className="review--icon"
          alt="star"
        />
      );
    }
    return ratingStars;
  };

  return (
    <div className="review--container">
      <div className="review--comment-rating">
        <div>{renderRatingStars()}</div>
        <p className="review--title">{review.title}</p>
        <p>{review.content}</p>
      </div>
      <span>{review.author}</span>
      <span>{formatDateDiscount(review.createdAt)}</span>
    </div>
  );
};

export default Review;
