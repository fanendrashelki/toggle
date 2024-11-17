import { useState } from "react";
import "./App.css";

function App() {
  const [isOn, setisOn] = useState(false);
  document.body.style.backgroundColor = isOn ? "lightgreen" : "lightcoral";

  const toggleButton = () => {
    setisOn(!isOn);
    document.body.style.backgroundColor = !isOn ? "lightgreen" : "lightcoral";
  };

  return (
    <>
      <div
        className={`rounded-pill m-5  w-10  ${isOn ? "bgon" : "bgoff"}`}
        onClick={toggleButton}
      >
        <button className={`rounded-circle p-2 ${isOn ? "on" : "off"}`}>
          {isOn ? "ON" : "OFF"}
        </button>
      </div>
    </>
  );
}

export default App;
