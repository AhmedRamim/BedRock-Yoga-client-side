import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import './Testimonial.css'

import { Pagination, Navigation, Autoplay } from "swiper";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ramim Ahmed",
      title: "Happy Customer",
      image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1060&t=st=1684645563~exp=1684646163~hmac=4b4c564a616697c7bc1d80bfe40c05932a2e8650c86e1b75bec084dddb2766a4',
      review: "Great experience with their service. The team was professional and responsive. Highly recommended!",
    },
    {
      id: 2,
      name: "Naila Ahmed",
      title: "Satisfied Client",
      image: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1684645673~exp=1684646273~hmac=6d28736372a556dbdbe9457942202a9adde29f8a222cd205fc92ef7b390092d9',
      review: "I've been a customer for several years and they never disappoint. Excellent products and top-notch  support.",
    },
    {
      id: 3,
      name: "Rasel Khan",
      title: "Happy Customer",
      image: 'https://img.freepik.com/free-photo/isolated-image-positive-fashionable-young-man-with-stylish-hairdo-bristle-smiling-camera_343059-3558.jpg?w=1060&t=st=1684645740~exp=1684646340~hmac=b30fafca8f9c8d06cb15c286dd827222042fd9395896b7f87daec83f06529104',
      review: "Their attention to detail is impressive. I keep coming back for more because of their exceptional quality.",
    },
    {
      id: 4,
      name: "Jane Smith",
      title: "Satisfied Client",
      image: 'https://img.freepik.com/free-photo/portrait-smiling-handsome-man-eyeglasses_171337-4853.jpg?w=1060&t=st=1684645888~exp=1684646488~hmac=fd23860b43fe56816a5d427a1ba849f424ef38a4c32e968b5992c31f5089bf28',
      review: "I couldn't be happier with their service. The team went above and beyond to ensure my satisfaction.",
    },
    {
      id: 5,
      name: "Naim Khan",
      title: "Happy Customer",
      image: 'https://img.freepik.com/free-photo/isolated-image-positive-fashionable-young-man-with-stylish-hairdo-bristle-smiling-camera_343059-3558.jpg?w=1060&t=st=1684645740~exp=1684646340~hmac=b30fafca8f9c8d06cb15c286dd827222042fd9395896b7f87daec83f06529104',
      review: "Their attention to detail is impressive. I keep coming back for more because of their exceptional quality.",
    },
    {
      id: 6,
      name: "S Jahan",
      title: "Satisfied Client",
      image: 'https://img.freepik.com/free-photo/portrait-smiling-handsome-man-eyeglasses_171337-4853.jpg?w=1060&t=st=1684645888~exp=1684646488~hmac=fd23860b43fe56816a5d427a1ba849f424ef38a4c32e968b5992c31f5089bf28',
      review: "I couldn't be happier with their service. The team went above and beyond to ensure my satisfaction.",
    }
  ];

  return (
    <div className="testimonial-container mb-32">
      <h1 data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500" className="text-3xl md:text-5xl font-bold text-center mb-32 mt-48 text-gray-600">Customer Review</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true} // Add navigation prop
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000, // Delay between slides (in milliseconds)
          disableOnInteraction: false, // Enable autoplay even when user interacts with the slider
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <div className="p-4 md:p-0">
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500" className="testimonial-item hover:shadow-2xl  p-10 rounded-lg">
                <div className="testimonial-content">

                  <div className="testimonial-details">

                    <div className="testimonial-review">
                      <blockquote className="flex">
                        <span className="quote-icon"><FaQuoteLeft /></span>
                        <p className="testimonial-text">{testimonial.review}</p>
                        <br />
                        <span className="quote-icon1"><FaQuoteRight /></span>
                      </blockquote>
                    </div>

                  </div>
                  <div className="testimonial-image mt-4">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-title">{testimonial.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
