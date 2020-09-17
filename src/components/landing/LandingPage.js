import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../nav/TopNav';
import logo from '../../assets/images/logo.png'
import styles from './LandingPage.module.css'
import SearchBar from '../search/SearchBar';
import SearchSuggestion from '../search/SearchSuggestion';

// since the focus is on React Hooks we use functional components
function LandingPage () {
    return (
        <div className={styles.landing}>
            <div className={styles['search-area']}>
                <TopNav />
                <img src={logo} className={styles.logo} alt='logo'/>
                <SearchBar />
                <SearchSuggestion />
            </div>
        </div>        
    );
};

LandingPage.propTypes = {
    
};

export default LandingPage;