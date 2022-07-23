import React from 'react';
import Footer from '../Footer/Footer';
import About from './About';
import Brand from './Brand';
import Faq from './Faq';
import HomeBanner from './HomeBanner';
import ProductFeature from './ProductFeature';

const Home = () => {
    return (
        <div>
            
            <HomeBanner></HomeBanner>
            <ProductFeature></ProductFeature>
            <About></About>
            <Faq></Faq>
            <Brand></Brand>
            <Footer></Footer>
        </div>
    );
};

export default Home;