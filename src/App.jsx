import { icon, patternDesktop, patternMobile } from "./index";
import React, { useState, useEffect } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");
  useEffect(() => {
    handleClick();
  }, []);

  function handleClick() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip.advice);
        setAdviceId(data.slip.id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-dark-blue font-Manrope text-center">
      <div className="w-[484px] bg-dark-grayish-blue px-5 pt-[30px] pb-[60px] rounded-[10px] relative mobile:w-[355px] mobile:px-[30px]">
        <h1 className="text-neon-green tracking-[2.5px] pb-[20px]">
          ADVICE #{adviceId}
        </h1>
        <p className="text-[28px] leading-[36px] text-light-cyan pb-[30px] font-[800] mobile:text-[24px]">
          "{advice}"
        </p>
        <img
          srcSet={`${patternMobile} 375w, ${patternDesktop} 769w`}
          alt="pattern image"
          className="w-full"
        />
        <div
          className="w-[60px] h-[60px] rounded-full flex justify-center items-center bg-neon-green cursor-pointer absolute left-[50%] -translate-x-1/2 -translate-y-1/2 -bottom-14 hover:shadow-[0_0_30px_15px_#52ffc5]"
          role="button"
          onClick={handleClick}
        >
          <img src={icon} alt="dice" />
        </div>
      </div>
    </div>
  );
};

export default App;
