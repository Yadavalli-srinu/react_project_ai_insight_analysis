export const fetchAIResponse = async (text) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 800)); // simulate API delay

    // Simple sentiment logic
    const lower = text.toLowerCase();
    let sentiment = "Neutral";
    if (lower.includes("good") || lower.includes("happy") || lower.includes("love")) sentiment = "Positive";
    if (lower.includes("bad") || lower.includes("sad") || lower.includes("hate")) sentiment = "Negative";

    return {
      id: Date.now(),
      input: text,
      analysis: `Simulated AI analysis: "${text}"`,
      score: Math.floor(Math.random() * 21) + 80,
      sentiment,
    };
  } catch (error) {
    return {
      id: Date.now(),
      input: text,
      analysis: `Fallback AI analysis: "${text}"`,
      score: 75,
      sentiment: "Neutral",
    };
  }
};
