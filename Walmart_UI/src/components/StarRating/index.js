import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import { RATINGS } from '../../config/defaults';

const StarRating = (props) => {

  const { rating } = props; // can be any number between 1 to 5
  const renderStars = () => {
    return RATINGS.map((num) => {
      return(
        <span key={num} className={num <= +rating ? "colored" : "normal"} >
        </span>
      )
    });
  }

  return(
    <div className="star-rating">
      {renderStars()}
    </div>
  )
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired
}

export default StarRating;
