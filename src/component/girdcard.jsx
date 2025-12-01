// import React from 'react'

function Girdcard({ id, imgurl, title, desp, width }) {
  return (
    <div
      id={id}
      className={`bg-blue-100 rounded-xl  relative z-[-3] shadow ${width}`}
    >
      <img
        src={imgurl}
        alt="lab test"
        className="h-full w-full object-cover absolute z-[-2]"
      />
      <div className="h-full w-full absolute bg-linear-to-t from-white via-transparent to-transparent z-[-1]"></div>
      <div className="h-full w-full flex flex-col justify-end z-10 p-3 gap-2 bg-linear-to-b from-transparent to-white">
        <h1 className="geist-bold text-2xl">{title}</h1>
        <p className="geist-semi-bold text-xs text-gray-600">{desp}</p>
      </div>
    </div>
  );
}

export default Girdcard;
