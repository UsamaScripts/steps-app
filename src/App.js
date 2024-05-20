import { useState } from "react";

function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  function HandleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  function HandlePrevous() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen((is) => !is);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className={"numbers"}>
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            {/* <button
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
            </button> */}

            <Button onClick={HandlePrevous} bg="#7950f2" textColor="#fff">
              <span>👈🏼</span> Prevoius
            </Button>
            <Button onClick={HandleNext} bg="#7950f2" textColor="#fff">
              Next <span>👉🏼</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3> Step {step} </h3>
      {children}
    </div>
  );
}
function Button({ onClick, bg, textColor, children }) {
  return (
    <>
      <button
        onClick={onClick}
        style={{ backgroundColor: bg, color: textColor }}
      >
        {children}
      </button>
    </>
  );
}

export default App;
