import React from 'react';
import Rating from 'react-rating';
import styles from './BusinessRating.module.css'

function BusinessRating(props) {
    return (
        <div className={styles.Rating}>
            <Rating 
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            fractions={2}
            readonly
            initialRating='3'/>
        </div>
    );
}

export default BusinessRating;