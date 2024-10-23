export function parseFaqResponse(response: any) {
  const answer = response.choices[0].message.content;

  // Parse the content to create an array of FAQs
  const faqs = answer.split("\n\n").map((faqPair: string) => {
    const [question, answer] = faqPair.split("\nA: ");
    return {
      question: question.replace("Q: ", "").trim(),
      answer: answer.trim(),
    };
  });

  return faqs;
}
