import React from 'react';
import PropTypes from 'prop-types';

import ProductTile from '../ProductTile';
import './styles.css';

const ProductList = (props) => {
  const { searchResults, updateSelection } = props;

  const MultipleProductTiles = () => {
    return searchResults.map((product) => {
      return(
        <ProductTile product={product} key={product.productId} updateSelection={updateSelection} />
      )
    })
  }
  // console.log('prod list ', searchResults)
  return(
    <div className="product-list row">
      {MultipleProductTiles()}
    </div>
  );
}

ProductList.propTypes = {
  searchResults: PropTypes.array.isRequired,
  updateSelection: PropTypes.func.isRequired
}

export default ProductList;