import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [showData, setShowData] = useState([]);
  const getData = async () => {
    // console.log("hello");
    const res = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10"
    );
    // console.log(res);
    const data = res.data;
    setShowData(data);
    // console.log(data);
  };
  // console.log(showData);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="p-6">
      <button
        onClick={getData}
        className="bg-teal-400 px-6 py-3 rounded font-semibold text-2xl active:scale-95 "
      >
        Get Data
      </button>
      <div className="p-5 bg-gray-950 mt-5 text-teal-500 rounded-2xl">
        {showData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="bg-slate-100 w-full flex py-6 px-6 mb-3 items-center justify-between rounded-md "
            >
              <img className="h-40" src={elem.download_url} alt="" />
              <h1 className="font-semibold text-2xl text-black">
                {elem.author}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
