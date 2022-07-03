import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useReward } from 'react-rewards';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import data from "./data";

import "./App.css";

function App() {

  const { reward, isAnimating } = useReward('rewardId', 'confetti');


  function click(event) {
    var val = event.target.value;
    var newVal = val.split(",");
    var bool = newVal[1];
    if (bool == "true") {
      reward();
    } else {
      console.log("no reward");
    }
    
  }

  return (
    <div>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className=" mt-40"
      >

        {data.map((item, index) => (
          <SwiperSlide>
            <div className="card">
              <div className=" px-10 card-body">
                <div className=" pt-20 pb-10">
                  <h5 className="card-title text-xl font-semibold">
                    {item.question}
                  </h5>
                </div>
                {item.answers.map((answer) => {
                  return (
                    <div className="flex justify-center">
                      <h2 className="font-medium text-lg">
                        <button
                          onClick={click}
                          class="btn btn-wide btn-active btn-ghost"
                          value={answer}
                          disabled={isAnimating}
                          id="rewardId"
                        >
                          {answer}
                        </button>
                      </h2>
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
