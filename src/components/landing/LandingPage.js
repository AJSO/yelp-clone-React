import React from 'react';
import PropTypes from 'prop-types';
import TopNav from '../nav/TopNav';

// since the focus is on React Hooks we use functional components
function LandingPage () {
    return (
        <div>
            <TopNav />
        </div>
    );
};

LandingPage.propTypes = {
    
};

export default LandingPage;