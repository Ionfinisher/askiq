import Link from "next/link";
import React from "react";

interface GradientButtonProps {
  text: string;
  href: string;
}

const GradientButton: React.FC<GradientButtonProps> = ({ text, href }) => {
  return (
    <div className="relative">
      <div className="absolute -inset-5">
        <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-700 via-pink-800 to-green-900 rounded-full"></div>
      </div>
      <Link
        href={href}
        className="relative z-10 inline-flex items-center justify-center w-full px-8 py-2 text-lg text-gray-300 transition-all duration-200 bg-transparent border-2 border-zinc-700 sm:w-auto rounded-full hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        role="button"
        target="_blank"
      >
        {text}
      </Link>
    </div>
  );
};

export default GradientButton;
