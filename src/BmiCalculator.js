import React, { useState } from "react";

function BmiCalculator() {
  const [input, setInput] = useState({
    weight: "",
    height: "",
    info: "",
    bmi: "",
  });

  const calculateBMI = (e) => {
    e.preventDefault();
    const val = ((input.weight / input.height ** 2) * 10000).toFixed(1);
    setInput({ ...input, count: true });
    if (val > 0) {
      if (val <= 18.5) {
        return setInput({ ...input, bmi: val, info: "Under weight" });
      } else if (val > 18.5 && val <= 24.9) {
        return setInput({ ...input, bmi: val, info: "Healthy" });
      } else if (val > 24.9 && val < 30) {
        return setInput({ ...input, bmi: val, info: "Over weight" });
      } else {
        return setInput({ ...input, bmi: val, info: "obese" });
      }
    }
  };

  //   const errorHandling = (e) => {
  //     e.preventDefault();
  //   };

  return (
    <div className="bmiCalculator">
      <input
        type="text"
        value={input.weight}
        placeholder="Enter weight in Kgs"
        onChange={(e) => setInput({ ...input, weight: e.target.value })}
        // onError={errorHandling}
      />
      <br></br>
      <input
        type="text"
        value={input.height}
        placeholder="Enter height in cms"
        onChange={(e) => setInput({ ...input, height: e.target.value })}
        // onError={errorHandling}
      />
      <br></br>
      <input type="button" value="calculate BMI" onClick={calculateBMI} />
      <br></br>
      <br></br>
      {input.bmi && (
        <>
          <h2>{`Your BMI is ${input.bmi}`}</h2>
          <h3>{`You are currently ${input.info}`}</h3>
        </>
      )}
    </div>
  );
}

export default BmiCalculator;
