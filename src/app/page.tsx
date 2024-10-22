"use client";

import GradientButton from "@/components/gradientButton";
import LightBeam from "@/components/lightBeam";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import Tabs from "@/components/tabs";

export default function Home() {
  const requestContent = `curl -X POST https://api.faqgenerator.com/v1/generate \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "topic": "Artificial Intelligence",
    "num_questions": 5
  }'`;

  const responseContent = `{
    "id": "chatcmpl-123",
    "object": "chat.completion",
    "created": 1677652288,
    "model": "gpt-3.5-turbo-0613",
    "choices": [{
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! How can I assist you today?"
      },
      "finish_reason": "stop"
    }],
    "usage": {
      "prompt_tokens": 9,
      "completion_tokens": 12,
      "total_tokens": 21
    }
  }`;

  return (
    <div className="relative z-10">
      <LightBeam />
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center">
        <GradientButton text="Give us a ⭐️" href="/about" />
        <h1 className="text-6xl font-bold text-gray-300 mt-4">ASKIQ</h1>
        <p className="text-lg text-gray-400 my-4">
          An API Powered by GPT-4o for intelligent FAQ generation
        </p>
        <Tabs
          requestContent={requestContent}
          responseContent={responseContent}
        />
      </div>
    </div>
  );
}
