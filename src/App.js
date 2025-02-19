import { useState } from "react";

export default function App() {
  return <DateCounter />;
}
function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      {/* Floating bubbles */}
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>
      <div className="bubble"></div>

      <div className="counter-container">
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />

        <div className="control">
          <span className="value-display">Step: {step}</span>
        </div>

        <div className="control">
          <button className="button" onClick={() => setCount((c) => c - step)}>
            -
          </button>
          <span className="value-display">Count: {count}</span>
          <button className="button" onClick={() => setCount((c) => c + step)}>
            +
          </button>
        </div>

        <p className="date-message">
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today will be`
              : `${Math.abs(count)} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
        {(count !== 0 || step !== 1) && (
          <div className="control">
            <button
              className="button"
              onClick={() => {
                setCount(0);
                setStep(1);
              }}
            >
              RESET
            </button>
          </div>
        )}
        <h3>IHSAN SAIF</h3>
      </div>
    </>
  );
}
