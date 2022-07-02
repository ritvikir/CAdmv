import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import data from "./data";

import './App.css';



function App() {






  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >

        {data.map((item, index) => (
          <SwiperSlide>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.question}</h5>
                {item.answers.map((answer) => {
              return (
                <div >
                  <h2>Answer: {answer}</h2>
                </div>
              );
            })}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


export default App;
