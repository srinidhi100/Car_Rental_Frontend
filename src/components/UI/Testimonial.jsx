import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Had a great experience with ZoomCar! The booking was easy, the car was clean and well-maintained, and the delivery was on time. No hidden fees, flexible rental options, and excellent customer support made my trip hassle-free. I’ll definitely rent from ZoomCar again!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Jhon Doe</h6>
            <p className="section__description">Customer</p>
            
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          
        As a woman traveling solo, I felt completely safe and comfortable with ZoomCar. The booking process was simple, and the car was spotless and ready for my journey. I loved the flexibility of self-driving, and the customer support was friendly and efficient. It was a hassle-free experience from start to finish, and I’ll definitely be using ZoomCar again for my future travels!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Elena</h6>
            <p className="section__description"> Regular Customer</p>
            
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Absolutely loved my experience with ZoomCar! The booking was super quick, and the car was spotless and ready to go when I arrived. The entire process was seamless, from delivery to pickup. I felt so free driving around without any stress, and the customer support was fantastic. I’ll definitely be using ZoomCar for all my future trips. Highly recommend to anyone looking for an easy, fun, and safe ride!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Mateo</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Such a fantastic experience with ZoomCar! From easy booking to getting the car delivered right to my doorstep, everything was seamless. The car was in great condition, and I had the freedom to drive at my own pace. Plus, the customer service was top-notch, answering all my questions promptly. I had a blast on my trip and will definitely choose ZoomCar again!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sofia</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
