const HeroHeader = () => (
  <div className=" md:mt-0">
    <p className="text-xl md:text-2xl text-[#00f2f8] mb-4 font-bold">
      👋 Hello, I'm
    </p>

    <h1 className="text-4xl mt-6 md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]">
      Mitali Gohel
    </h1>

    <h2 className="mt-6 text-xl md:text-4xl font-semibold text-[#94A3B8] tracking-wide">
      <span className="text-[#42d7f5]">&lt;</span>
      <span className="text-[#94A3B8]">Frontend Developer</span>
      <span className="text-[#42d7f5]">/&gt;</span>
    </h2>
  </div>
);

export default HeroHeader;
