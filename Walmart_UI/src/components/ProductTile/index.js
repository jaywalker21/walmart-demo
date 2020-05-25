import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ProductTile = (props) => {
  const { product: { imageUrl, price, productName, productId }, updateSelection } = props;

  const selectProduct = (e) => {
    // console.log("target id ", e.target.id);
    updateSelection(e.target.id.split("-")[1]);
  }

  return(
    <div className="product-tile col-4 col-lg-3 col-md-4">
      <div className="product-tile-image">
        <img alt="prod" src={imageUrl} id={`img-${productId}`} onClick={selectProduct} />
      </div>
      <div className="product-tile-title" id={`title-${productId}`} onClick={selectProduct}>
        {productName}
      </div>
      <div className="product-tile-price">
        {price}
      </div>
    </div>
  );
}

ProductTile.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired 
  }),
  updateSelection: PropTypes.func.isRequired
}

export default ProductTile;