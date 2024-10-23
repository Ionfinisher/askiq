# FAQ Generator API with GPT-4o

## Overview

This project is an **FAQ Generator API** built using **Next.js** and **GPT-4o**, designed to create precise and relevant FAQs based on input topics. The API is rate-limited using the [@unkey/ratelimit](https://www.unkey.com/docs/libraries/ts/ratelimit) package, ensuring controlled access to the service.

### Features

- Generate FAQs with GPT-4o models for any topic.
- Rate-limiting with [Unkey](https://www.unkey.com/) to manage API request quotas within a specific window.

## Prerequisites

- Node.js (>= 18.x.x)
- Project API Key for GPT-4o from OpenAI
- Unkey root key

## Getting Started

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Ionfinisher/askiq.git
cd askiq
npm install
```

### Environment Setup

Change the `.env.example` to `.env.local` in the project root and set the following environment variables:

```bash
# OpenAI project API Key
OPENAI_PROJECT_KEY=your-openai-project-key
# Unkey rate-limiting secret
UNKEY_ROOT_KEY=your-unkey-root-key
```

### Run Locally

After configuring the environment variables, start the development server:

```bash
npm run dev
```

The API will be available at http://localhost:3000/api/v1/askiq.

## API Usage

### Endpoint: /api/v1/askiq

Generate an FAQ for a given topic.

Method: `POST`

Request Body:

```json
{
  "topic": "your-topic-here"
}
```

Response:

```json
{
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
}
```

### Rate Limiting

The API is rate-limited using unkey. Users are limited by request quotas per 10 seconds. You can customize this limit in your configuration.

## Error Handling

The API returns the following error codes:

`400` Bad Request: Missing or incorrect parameters.<br/>
`429` Too Many Requests: Rate limit exceeded.<br/>
`500` Internal Server Error: Server issues (e.g., OpenAI API issues).

## License

This project is licensed under the MIT License. See the [LICENCE](https://github.com/Ionfinisher/askiq/blob/main/LICENCE) file for details.
