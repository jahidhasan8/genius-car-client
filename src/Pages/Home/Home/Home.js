import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Address from '../Address/Address'
import Products from '../Products/Products';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Address></Address>
            <Products></Products>
        </div>
    );
};

export default Home;