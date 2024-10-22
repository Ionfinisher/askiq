import React from "react";

const LightBeam = () => {
  return (
    <div className="fixed inset-0 z-0 flex justify-center items-center bg-black">
      {/* Light Beam */}
      <div className="absolute z-10 w-full h-full bg-gradient-to-tl from-black via-gray-500/40 to-black"></div>

      {/* Light Particles */}
      <div className="absolute z-20 inset-0 flex flex-wrap justify-center items-center">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white rounded-full opacity-70`}
            style={{
              width: `${2}px`,
              height: `${2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 2 + 2}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LightBeam;
