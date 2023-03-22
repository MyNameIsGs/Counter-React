import React, { useState, useEffect } from "react";

const Counter = () => {
  let [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let Interval = setInterval(() => {
      setSeconds((seconds += 1));
    }, 1000);

    return () => clearInterval(Interval);
  }, []);
  return (
    <div className="container text-white border-rounded border text-center bg-black position-absolute top-50 start-50 translate-middle">
      <div className="container mb-3">
        <div className="centrar mx-2 separador">
          <i className="far fa-clock  text-center relojIcon "></i>
        </div>
        <div className=" centrar mx-2 mt-3 px-3 border-rounded border text-center">
          {Math.floor((seconds / 10000000) % 10)}
          {Math.floor((seconds / 1000000) % 10)}
        </div>
        <p className="centrar mx-2 separador">:</p>
        <div className=" centrar mx-2 mt-3 px-3 border-rounded border text-center">
          {Math.floor((seconds / 100000) % 10)}
          {Math.floor((seconds / 10000) % 10)}
        </div>
        <p className="centrar mx-2 separador">:</p>
        <div className=" centrar mx-2 mt-3 px-3 border-rounded border text-center">
          {Math.floor((seconds / 1000) % 10)}
          {Math.floor((seconds / 100) % 10)}
        </div>
        <p className="centrar mx-2 separador ">:</p>
        <div className=" centrar mx-2 mt-3 px-3 border-rounded border text-center">
          {Math.floor((seconds / 10) % 10)}
          {Math.floor((seconds / 1) % 10)}
        </div>
      </div>
    </div>
  );
};
export default Counter;
