import { useState } from "react";

function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [step, setStep] = useState(1);
  function HandleNext() {
    if (step < 3) setStep(step + 1);
  }
  function HandlePrevous() {
    if (step > 1) setStep(step - 1);
  }

  return (
    <div className="steps">
      <div className={"numbers"}>
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step}:{messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          onClick={HandlePrevous}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Prevoius
        </button>
        <button
          onClick={HandleNext}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
