import React from 'react';
import { NavBar } from '../searchNavBar/NavBar';
import SubNav from '../searchNavBar/SubNav';
import SearchResults from './SearchResults';
import SearchResultSummary from './SearchResultSummary';

function Search(props) {
    return (
        <div>
            <NavBar />
            <SubNav />
            <SearchResultSummary />
            <SearchResults />
        </div>
    );
}

export default Search;