import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { useReward } from 'react-rewards';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import data from "./data";

export default function Main() {
    const { reward, isAnimating } = useReward('rewardId', 'confetti', {zIndex: 100, startVelocity:60, spread: 70, lifetime:75});
  
    const styles ={
    }
    const [state, setState] = useState(styles)
  
    function click(event) {
      var val = event.target.value;
      var newVal = val.split(",");
      var bool = newVal[1];
      if (bool === "true") {
        reward();
      } else {
        setState({
            backgroundColor: '#FF6863'
        });
        setTimeout(function(){
            setState({ });

       },500);
      }
      
    }
  
    return (
      <div style={state} className="h-screen pt-40">
      <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
        >
  
          {data.map((item, index) => (
            <SwiperSlide >
              <div  className="card" >
                <div className=" px-10 card-body">
                  <div className=" pt-20 pb-10">
                    <h5  className="card-title text-xl font-semibold">
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
        <span className="flex justify-center" id="rewardId"></span>      
  
      </div>
    );
  } 
  