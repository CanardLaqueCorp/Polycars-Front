// StarRating.tsx

import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  value: number;
  maxStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ value, maxStars = 5 }) => {
  const filledStars = Math.round(value);
  const emptyStars = maxStars - filledStars;

  const Star = ({ filled }: { filled: boolean }) =>
    filled ? <FaStar/> : <FaRegStar/>;

  return (
    <div className="star-rating">
      {[...Array(filledStars)].map((_, index) => (
        <Star key={index} filled />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <Star key={index} filled={false} />
      ))}
    </div>
  );
};

export default StarRating;
