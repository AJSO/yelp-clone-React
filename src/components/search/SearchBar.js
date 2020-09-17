import React from 'react';
import styles from './SearchBar.module.css'

function SearchBar(props) {
    return (
        <div>
            <div className="field has-addons">
            <p className="control">
                <button className="button is-static is-medium " type="text" placeholder="Your email">Search</button>
            </p>
            <p className="control">
                <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Restuarants, Plumbers e.t.c" />
            </p>
            <p className="control">
                <button className="button is-static is-medium " type="text" placeholder="Your email">Near</button>
            </p>
            <p className="control">
                <input className={`input is-medium ${styles['input-control']}`} type="text" placeholder="Where" />
            </p>
            <button className={`button is-static is-medium ${styles['search-button']}`}>
                <span className={`icon is-small ${styles['search-icon']}`}><i className="fas fa-search"></i></span></button>
            </div>
        </div>
    );
}

export default SearchBar;