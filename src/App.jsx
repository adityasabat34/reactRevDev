import React, { useEffect } from "react";
import { useMemo, useState } from "react";

const App = () => {
  const [count, setcount] = useState(0);
  const [dark, setdark] = useState(false);

  const expensiveTask = useMemo(() => {
    return count * 2;
  }, [count]);

  const darkMode = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={darkMode}>
      <h1 className="text-2xl text-orange-500 ">Theme</h1>
      <p>count:{count}</p>
      <p> Expensive Calc : {expensiveTask}</p>
      <button className="block" onClick={() => setdark(!dark)}>
        Switch to dark
      </button>
      <button onClick={() => setcount(count + 1)}>Count + 1 </button>
    </div>
  );
};

export default App;
