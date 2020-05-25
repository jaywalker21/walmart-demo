import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import ProductList from '../ProductList';

const Recommendation = (props) => {
  const { productId, updateSelection } = props;
  const [suggestions, setSuggestions] = useState(null);

  const getSuggestions = async () => {
    const response = await fetch(`http://localhost:8080/recommendations?currentProduct=${productId}`);
    const data = response.json ? await response.json() : response;
    setSuggestions(data.productList);
  }

  useEffect(() => {
    getSuggestions();
  }, [productId])

  return (
    <div className="recommendation">
      <h2>
        You may also like
      </h2>
      {
        suggestions &&
        <ProductList searchResults={suggestions} updateSelection={updateSelection} />
      }
    </div>
  );
}

Recommendation.propTypes = {
  productId: PropTypes.string.isRequired,
  updateSelection: PropTypes.func.isRequired
}

export default Recommendation;