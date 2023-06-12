import React from 'react';
import Banner from './Banner';
import Testimonial from '../Testimonial/Testimonial';
import PopularClasses from '../PopularClasses';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <PopularClasses/>
            <div className='container'>
                <Testimonial />
            </div>
        </div>
    );
};

export default Home;