import React from "react";
import { useState } from "react";
import Output from "./Output";

// Component to be tested
function Greeting() {
  // useState for re-rendering ui when change
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>Happy to see you</Output>}
      {changedText && <Output>Changed!</Output>}

      <button onClick={changeTextHandler}>Changed Text</button>
    </div>
  );
}

export default Greeting;
