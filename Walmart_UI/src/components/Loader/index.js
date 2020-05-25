import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Loader = (props) => {
  return(
    <div className="loader-position">
      <div className="spinner-border" role="status">
        <span className="sr-only">{props.text ||  'Loading...'}</span>
      </div>
    </div>
  );
}

Loader.propTypes = {
  text: PropTypes.string
};

export default Loader;