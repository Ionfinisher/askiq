"use client";

import GradientButton from "@/components/gradientButton";
import LightBeam from "@/components/lightBeam";
import Tabs from "@/components/tabs";

export default function Home() {
  const requestContent = `curl -X POST https://askiq.vercel.app/api/v1/askiq \\
  -H "Content-Type: application/json" \\
  -d '{
    "topic": "Artificial Intelligence"
  }'`;

  const responseContent = `{
  "faqs": [
    {
      "question": "What is Artificial Intelligence?",
      "answer": "Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems."
    },
    {
      "question": "What are the different types of AI?",
      "answer": "The different types of AI include narrow AI, general AI, and superintelligent AI."
    },
    {
      "question": "What are the applications of AI?",
      "answer": "The applications of AI include natural language processing, image recognition, and autonomous vehicles."
    },
    {
      "question": "What are the benefits of AI?",
      "answer": "The benefits of AI include increased efficiency, improved accuracy, and enhanced decision-making."
    },
    {
      "question": "What are the risks of AI?",
      "answer": "The risks of AI include job displacement, bias in algorithms, and ethical concerns."
    }
  ]
}`;

  return (
    <div className="relative z-10">
      <LightBeam />
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <GradientButton
          text="Give us a ⭐️"
          href="https://github.com/Ionfinisher/askiq"
        />
        <h1 className="text-6xl font-bold text-gray-300 mt-4">ASKIQ</h1>
        <p className="text-lg text-gray-400 my-4">
          An API Powered by GPT-4o-mini for intelligent FAQ generation
        </p>
        <Tabs
          requestContent={requestContent}
          responseContent={responseContent}
        />
      </div>
    </div>
  );
}
