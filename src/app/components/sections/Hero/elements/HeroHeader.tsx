import React from "react";

const HeroHeader = () => {
  return (
    <>
      <p className="text-xl md:text-2xl text-indigo-400 mb-2 animate-pulse">
        👋 Hello, I'm
      </p>

      <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-400 drop-shadow-lg">
        Mitali
      </h1>

      <h2 className="mt-4 text-2xl md:text-4xl font-semibold text-indigo-300 tracking-wide">
        {`<Frontend Developer/>`}
      </h2>
    </>
  );
};

export default HeroHeader;
