import React from "react";
// import { Cards } from "./assets/components/Cards";
import Cards from "./assets/components/Cards";

const App = () => {
  console.log(userName);
  let userName = "Aditya";
  return (
    <div>
      <Cards name={userName} />
    </div>
  );
};
export default App;
