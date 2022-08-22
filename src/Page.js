import React from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Weather from './Weather';

class Page extends React.Component{


    render(){

        return (
            <div>
                <Header companyName="classicmodels.com"/>
                <Nav/>
                <h1> Weather Data from <a href="https://openweathermap.org/">Open.Weathermap.org</a> </h1>
                <br/>
                <Weather />
                <Footer authorName="Diksha Khatwani"/>
            </div>
        )
    }

}

export default Page