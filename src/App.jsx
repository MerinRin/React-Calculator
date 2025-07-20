import React, { useState } from 'react'

function App() {

  const [result, setResult] = useState("0");

  const display = (value) => {
    setResult((current) => (current === "0" ? value : current + value));
  };

  const back = () => {
    setResult(result.slice(0, -1));
  };

    const allClear = () => {
    setResult("0");
  };

  const answer = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
      setTimeout(() => setResult("0"), 1000);
    }
  };


  return (
    <div className="container-fluid h-screen flex w-full justify-center items-center bg-blue-50 p-10">
      <div className="container bg-blue-200 md:h-[640px] h-[440px] w-[550px] rounded-2xl border border-pink-900 shadow-md shadow-black md:p-3">
        <div className="md:p-8 p-5">
          <input id="result" type="text" value={result} className="bg-white w-full p-3 rounded-md text-4xl text-blue-900 shadow-xl text-right" readOnly/></div>
        <div className="grid grid-cols-4 md:pe-8 md:ps-3 pe-4 gap-4 max-h-full mt-4">
          <div className="col-span-3">
            <div className="grid grid-rows-5 md:gap-6 gap-4 text-center md:px-5 ps-5 pe-2">
              <div className="grid grid-cols-3 md:gap-7 gap-3">
                <div onClick={() => display("7")} className="bg-white md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">7</div>
                <div onClick={() => display("8")} className="bg-white md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">8</div>
                <div onClick={() => display("9")} className="bg-white md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">9</div>
              </div>
              <div className="grid grid-cols-3 md:gap-7 gap-3">
                <div onClick={() => display("4")} className="bg-white md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">4</div>
                <div onClick={() => display("5")} className="bg-white md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">5</div>
                <div onClick={() => display("6")} className="bg-white md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">6</div>
              </div>
              <div className="grid grid-cols-3 md:gap-7 gap-3">
                <div onClick={() => display("1")} className="bg-white md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">1</div>
                <div onClick={() => display("2")} className="bg-white md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">2</div>
                <div onClick={() => display("3")} className="bg-white md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">3</div>
              </div>
              <div className="grid grid-cols-3 md:gap-7 gap-3">
                <div onClick={() => allClear()} className="bg-white   md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">AC</div>
                <div onClick={() => display("0")} className="bg-white md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">0</div>
                <div onClick={() => display(".")} className="bg-white md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">.</div>
              </div>
              <div className="grid grid-cols-2 md:gap-7 gap-3">
                <div onClick={() => back()} className="bg-white   md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">Clear</div>
                <div onClick={() => answer()} className="bg-white md:p-5 p-2 rounded-md shadow-black shadow-md text-lg">=</div>
              </div>
            </div>
          </div>
          <div className="col-span-1 grid grid-rows-6 md:h-[440px] h-[290px] md:gap-5 gap-3">
            <div onClick={() => display("/")} className="row row-span-1 bg-white md:ms-5 rounded-md shadow-black shadow-md text-xl flex items-center justify-center">÷</div>
            <div onClick={() => display("*")} className="row row-span-1 bg-white md:ms-5 rounded-md shadow-black shadow-md text-xl flex items-center justify-center">*</div>
            <div onClick={() => display("-")} className="row row-span-1 bg-white md:ms-5 rounded-md shadow-black shadow-md text-xl flex items-center justify-center">-</div>
            <div onClick={() => display("+")} className="row row-span-3 bg-white md:ms-5 rounded-md shadow-black shadow-md text-xl flex items-center justify-center">+</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App