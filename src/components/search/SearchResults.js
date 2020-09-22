import React from 'react';
import SearchResultDetail from './SearchResultDetail';
import styles from './SearchResults.module.css'

function SearchResults(props) {
    return (
        <div className={styles['search-results']}>
            <SearchResultDetail />
            <SearchResultDetail />
        </div>
    );
}

export default SearchResults;