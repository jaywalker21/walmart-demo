import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const SearchHeader = (props) => {
  const { updateSearchText, searchText } = props;

  const changeSearchText = (e) => {
    e.preventDefault();
    updateSearchText(e.target.value);
  }

  return(
    <div className="search-card">
      <div className="col-lg-2 col-md-2 col-sm-2 col-2 ">
        <img src="/logoWalmart.png" alt="Walmart" />
      </div>
      <div className="col-lg-2 col-md-2 col-sm-2 col-10">
        <label>
          How can we help?
        </label>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6 col-12">
        <input className="search-input" onChange={changeSearchText} value={searchText} placeholder="Please search here" />
      </div>
    </div>
  )
}

SearchHeader.propTypes  = {
  updateSearchText: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired
}

export default SearchHeader;