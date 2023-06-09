import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from '../../../public/sliderImg/img1.png';
import slider2 from '../../../public/sliderImg/img2.png';
import slider3 from '../../../public/sliderImg/img3.png';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";



// import required modules
import { Navigation ,Autoplay } from "swiper";

const Banner = () => {
    return (
        <div className='flex items-center md:h-screen'>
            <Swiper navigation={true} autoplay modules={[Navigation,Autoplay]} className="mySwiper h-full ">
                <div className="">
                    <SwiperSlide className=" bg-rose-100">
                        <div className="md:flex container px-6 md:px-0   md:pt-20 h-full items-center justify-center">
                            <div className="md:w-1/2">
                                <img className="w-[560px]" src={slider2} alt="" />
                            </div>
                            <div className="md:w-1/2 space-y-6">
                                <h1 className="text-[78px] text-gray-700 leading-[5rem] font-bold">
                                    Welcome to Yoga Studio</h1>
                                <p className="text-xl">Yoga has always been something more, than just a workout routine. It's always been more of a philosophy, a lifestyle for a mind & body balance.</p>
                                <button className="bg-rose-500 hover:bg-rose-600 uppercase text-white font-bold py-3 px-5">Learn More</button>
                                <button className="bg-white ml-6 hover:bg-gray-50 uppercase text-rose-500 font-bold py-3 px-5">Contact us</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="bg-amber-100"> <div className="md:flex container px-6 md:px-0   md:pt-20 h-full items-center justify-center">
                        <div className="md:w-1/2 space-y-6">
                            <h1 className="text-[78px] text-gray-700 leading-[5rem] font-bold">
                            Find lifestyle to the yoga</h1>
                            <p className="text-xl">Through and through we were trying to make our Yoga studio a peaceful, meditational place of tranquility, which according to our ever-growing list of attendees we've succeeded at.</p>
                            <button className="bg-rose-500 hover:bg-rose-600 uppercase text-white font-bold py-3 px-5">Learn More</button>
                            <button className="bg-white ml-6 hover:bg-gray-50 uppercase text-rose-500 font-bold py-3 px-5">Contact us</button>
                        </div>
                        <div className="md:w-1/2">
                            <img className="w-[460px]" src={slider1} alt="" />
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide className="bg-blue-100"> <div className="md:flex container px-6 md:px-0   md:pt-20 h-full items-center justify-center">
                        <div className="md:w-1/2">
                            <img className="w-[560px]" src={slider3} alt="" />
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <h1 className="text-[78px] text-gray-700 leading-[5rem] font-bold">
                            Yoga Studio for Everyone</h1>
                            <p className="text-xl">Yoga has always been something more, than just a workout routine. It's always been more of a philosophy, a lifestyle for a mind & body balance.</p>
                            <button className="bg-rose-500 hover:bg-rose-600 uppercase text-white font-bold py-3 px-5">Learn More</button>
                            <button className="bg-white ml-6 hover:bg-gray-50 uppercase text-rose-500 font-bold py-3 px-5">Contact us</button>
                        </div>
                    </div></SwiperSlide>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;