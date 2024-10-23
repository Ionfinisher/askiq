import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_PROJECT_KEY,
});

export default openai;
