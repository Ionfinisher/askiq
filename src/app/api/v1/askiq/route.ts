import { NextResponse, NextRequest } from "next/server";
import rateLimit from "@/lib/unkey";
import openai from "@/lib/openai";
import { parseFaqResponse } from "@/lib/responseParser";

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { topic } = await request.json();

  //   Make sure the 'topic' parameter is provided
  if (!topic || typeof topic !== "string") {
    return NextResponse.json(
      { error: "Missing or invalid 'topic' parameter" },
      { status: 400 }
    );
  }

  // Get the user's IP address
  const ip = request.headers.get("x-forwarded-for") || "anonymous";

  // Verify the rate limit
  const rateLimitResponse = await rateLimit.limit(ip, { cost: 2 });
  if (!rateLimitResponse.success) {
    // Return a 429 status response if the limit is exceeded
    return NextResponse.json(
      { message: "API rate limit exceeded. Try again later" },
      { status: 429 }
    );
  }

  try {
    // Generate FAQ answer using GPT-4o
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are an experienced customer relations agent.I will give you a topic and you will generate a 5 points FAQ related to the topic. Please provide answers that are clear, concise, and structured for a wide audience. Responde with nothing but the FAQ and ensure the answers are based on reliable information and address common questions. Ensure that the answers are accurate and helpful to both beginners and intermediate users. Return nothing but the FAQ in the following format: Q: question? A: answer...",
        },
        {
          role: "user",
          content: `Here is the topic: "${topic}"`,
        },
      ],
    });

    const answer = parseFaqResponse(response);

    return NextResponse.json(answer, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error generating FAQ" },
      { status: 500 }
    );
  }
}
