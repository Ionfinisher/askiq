# FAQ Generator API with GPT-4o

## Overview

This project is an **FAQ Generator API** built using **Next.js** and **GPT-4o**, designed to create precise and relevant FAQs based on input topics. The API is rate-limited using the (@unkey/ratelinit)[https://www.unkey.com/docs/libraries/ts/ratelimit] package, ensuring controlled access to the service.

### Features

- Generate FAQs with GPT-4o models for any topic.
- Rate-limiting with (Unkey)[https://www.unkey.com/] to manage API request quotas within a specific window.

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

Change the `.env.example` to `.env` in the project root and set the following environment variables:

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
  "response": "your response"
}
```

### Rate Limiting

The API is rate-limited using unkey. Users are limited by request quotas per 10 seconds. You can customize this limit in your configuration.

## Error Handling

The API returns the following error codes:

`400` Bad Request: Missing or incorrect parameters.
`429` Too Many Requests: Rate limit exceeded.
`500` Internal Server Error: Server issues (e.g., OpenAI API issues).

## License

This project is licensed under the MIT License. See the LICENSE file for details.
