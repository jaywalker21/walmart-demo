import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

import StarRating from '../StarRating';
import Recommendation from '../Recommendation';

const ProductInfo = (props) => {
  const { currentProduct: { productId, imageUrl, productName, price, productRating }, updateSelection } = props;
  return(
    <>
      <div className="row product-info">
        <div className="product-info-image col-lg-4 col-sm-12 col-12">
          <img src={imageUrl} alt={productName} />
        </div>
        <div className="product-info-description col-lg-8 col-sm-12 col-12">
          <div className="title">
            {productName}({<StarRating rating={productRating} />})
          </div>
          <div className="price">
            {price}
          </div>
        </div>
      </div>
      <Recommendation updateSelection={updateSelection} productId={productId} />
    </>
  );
}

ProductInfo.propTypes = {
  updateSelection: PropTypes.func.isRequired,
  currentProduct: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    productRating: PropTypes.number.isRequired
  })
}

export default ProductInfo;