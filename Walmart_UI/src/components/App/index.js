import React, { useState } from 'react';
import './styles.css';

import { EMPTY_ARRAY, EMPTY_STRING, DEBOUNCE_TIME } from '../../config/defaults';
import Loader from '../Loader';
import SearchHeader from '../SearchHeader';
import ProductList from '../ProductList';
import ProductInfo from '../ProductInfo';


const App = (props) => {

  const [searchText, updateSearchText] = useState(EMPTY_STRING);
  const [isLoading, setLoadingStatus] = useState(false);
  const [searchEventId, updateSearchEventId] = useState(null);
  const [currentSelection, updateCurrentSelection] = useState(null);
  const [searchResults, updateSearchResults] = useState(EMPTY_ARRAY)
  const [hasError, setErrorStatus] = useState(false);

  const getSearchResults = async (text) => {
    try {
      const response = await fetch(`http://localhost:8080/products?searchText=${text}`);
      const data = response.json ? await response.json() : response;
      updateSearchResults(data.productList);
      setErrorStatus(false);
    } catch(e) {
      setErrorStatus(true);
    } finally {
      setLoadingStatus(false);
    }

  }

  const updateSearchFieldText = (newText) => {
    if(currentSelection) {
      updateCurrentSelection(null);
    }
    updateSearchText(newText);
    setLoadingStatus(true);
    clearTimeout(searchEventId);
    if(newText) {
      updateSearchEventId(setTimeout(() => getSearchResults(newText), DEBOUNCE_TIME));
    } else {
      setLoadingStatus(false);
      updateSearchResults(EMPTY_ARRAY);
    }
  }

  const updateSelection = (productId) => {
    window.scrollTo(0, 0);
    updateCurrentSelection(productId);
  }

  
  // console.log('in app ', searchResults)
  const Component = currentSelection ? ProductInfo : ProductList;
  const currentProduct = searchResults.find((result) => result.productId === currentSelection)
  if(hasError) {
    return(
      <h2>
        Something went wrong. Can you check if backend server is up and running?
      </h2>
    );
  }
  return (
    <div className="App">
      <div className="container fullHeight">
        <div className="row search-row">
          <SearchHeader updateSearchText={updateSearchFieldText} searchText={searchText} />
        </div>
        {
          isLoading ? 
          <Loader /> :
          <Component currentProduct={currentProduct} searchResults={searchResults} updateSelection={updateSelection} />
        }
      </div>
    </div>
  );
}

export default App;
