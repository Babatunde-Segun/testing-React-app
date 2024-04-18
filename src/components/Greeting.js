import React from "react";
import { useState } from "react";

// Component to be tested
function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>Happy to see you</p>}
      {changedText && <p>Changed!</p>}

      <button onClick={changeTextHandler}>Changed Text</button>
    </div>
  );
}

export default Greeting;
