export const fetchAIResponse = async (text) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 800)); // simulate API delay

    // Simple sentiment logic
    const positiveWords = [
        "good","great","excellent","amazing","awesome","fantastic","wonderful","superb","outstanding","brilliant",
        "happy","joy","joyful","delighted","cheerful","pleased","glad","smile","smiling","laugh",
        "love","loved","lovely","adorable","affection","caring","kind","kindness","compassion","friendly",
        "positive","optimistic","hopeful","confident","excited","thrilled","motivated","inspired","encouraged","energized",
        "successful","success","achievement","achieve","winner","winning","victory","progress","improvement","growth",
        "best","better","beautiful","attractive","charming","graceful","elegant","bright","shining","peaceful",
        "calm","relaxed","comfortable","safe","secure","support","supported","trust","trusted","reliable",
        "creative","innovative","smart","intelligent","talented","skilled","capable","strong","powerful","dynamic",
        "fun","enjoy","enjoyed","enjoying","entertaining","pleasant","satisfying","satisfied","grateful","thankful",
        "awesome","cool","nice","fabulous","marvelous","spectacular","impressive","magnificent","perfect","fantabulous",
        "blessed","fortunate","lucky","prosperous","thriving","valuable","worthy","amused","content","ecstatic"
      ];
    const negativeWords = [
       "bad","worse","worst","terrible","awful","horrible","poor","disappointing","disappointed","fail",
       "failure","failed","sad","unhappy","depressed","angry","mad","upset","frustrated","annoyed",
       "hate","hated","hateful","dislike","disliked","fear","afraid","scared","worried","anxious",
       "negative","pessimistic","hopeless","confused","stressed","tired","exhausted","weak","hurt","pain",
       "painful","damage","damaged","broken","loss","lost","problem","issue","trouble","difficult",
       "hard","critical","serious","danger","dangerous","toxic","rude","mean","selfish","greedy",
       "ugly","boring","dull","lazy","slow","waste","useless","worthless","pathetic","shame",
       "guilty","regret","regretful","embarrassed","lonely","alone","miserable","cry","crying","sorrow",
       "disaster","tragic","tragedy","conflict","argument","fight","complaint","complain","criticize","blame",
       "rejected","ignored","abandoned","betrayed","jealous","envy","hostile","aggressive","violent","harsh",
       "unfair","unjust","corrupt","fake","fraud","cheat","liar","angrily","resent","furious"
     ];


    const lower = text.toLowerCase();
    let sentiment = "Neutral";
    for (let word of positiveWords) {
    if (lower.includes(word)) {
        sentiment = "Positive";
        break;
         }
      }
      
      for (let word of negativeWords) {
          if (lower.includes(word)) {
              sentiment = "Negative";
              break;
          }
      }
    // if (lower.includes("good") || lower.includes("happy") || lower.includes("love")) sentiment = "Positive";
    // if (lower.includes("bad") || lower.includes("sad") || lower.includes("hate")) sentiment = "Negative";

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
