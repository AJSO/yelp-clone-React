import React from 'react';
import BusinessRating from '../businessRating/BusinessRating';
import styles from './SearchResultDetail.module.css'

function SearchResultDetail(props) {
    return (
        <div className={styles['search-result']}>
            <img src='https://via.placeholder.com/150' alt='business' className={styles['business-image']} />
            <div className={styles['business-info']}>
                <h2 className="subtitle">Burger Place</h2>
                <BusinessRating />
                <p>$<span className={styles['tags']}>Burger</span></p>
                
            </div>
            <div>
            <p>Address data</p>
            <p>street</p>
            <p>zip code</p>
            </div>
            
        </div>
    );
}

export default SearchResultDetail;