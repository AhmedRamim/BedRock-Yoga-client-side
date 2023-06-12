import React from 'react';
import Banner from './Banner';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className='container'>
                <Testimonial />
            </div>
        </div>
    );
};

export default Home;