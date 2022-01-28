import React, { useState } from "react";
import "./submitButton.css";

const SubmitButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const AnimateBtn = () => {
    isAnimating ? setIsAnimating(false) : setIsAnimating(true);
  };

  return (
    <main>
      <button
        className={isAnimating ? "btn animating" : "btn"}
        onClick={AnimateBtn}
        data-btn
      >
        Submit
      </button>
      <div className="checkmark-container">
        <svg
          x="0px"
          y="0px"
          fill="none"
          className="checkmark-svg"
          viewBox="0 0 25 30"
        >
          <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
        </svg>
      </div>
    </main>
  );
};

export default SubmitButton;
