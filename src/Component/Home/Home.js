import React from 'react';
import Search from './searchComponent';
import QuickSearch from './quickComponent';
import Header from '../../header';

const Home = (props) => {
    console.log(">>>home>>>",props)
    return(
        <>
            <div id="header">
            <Header/>
            <Search/>
            </div>
            <QuickSearch/>
        </>
    )
}

export default Home;