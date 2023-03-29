import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [currentTime, setTime] = useState(time);

  const UpdateTime = () => {
    let UpdateTime = new Date().toLocaleTimeString();
    setTime(UpdateTime);
  };

  setInterval(UpdateTime, 1000);
  return <h1>{currentTime}</h1>;
};

export default App;
