"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface TabsProps {
  requestContent: string;
  responseContent: string;
}

export default function Tabs({ requestContent, responseContent }: TabsProps) {
  const [activeTab, setActiveTab] = useState("request");
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(requestContent).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="bg-black w-[300px] md:w-auto text-white p-4">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex mb-4 border-b border-gray-800">
          <button
            className={`mr-4 pb-2 px-3 text-lg focus:outline-none ${
              activeTab === "request"
                ? "text-white border-b-2 border-white"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("request")}
          >
            Request
          </button>
          <button
            className={`pb-2 px-3 focus:outline-none ${
              activeTab === "response"
                ? "text-white border-b-2 border-white"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("response")}
          >
            Response
          </button>
        </div>

        {activeTab === "request" && (
          <div className="bg-black rounded-lg p-4 overflow-x-auto relative">
            <pre
              className="text-sm pr-20 text-left text-gray-400 whitespace-pre-wrap break-words"
              data-langage="bash"
            >
              <code>{requestContent}</code>
            </pre>
            <Button
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white"
              onClick={copyToClipboard}
            >
              {isCopied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}

        {activeTab === "response" && (
          <div className="bg-black rounded-lg p-4 overflow-x-auto relative">
            <pre
              className="text-sm pr-20 text-left text-gray-400 whitespace-pre-wrap break-words"
              data-langage="bash"
            >
              <code>{responseContent}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
