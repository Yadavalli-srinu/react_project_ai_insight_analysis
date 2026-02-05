import { useMemo } from "react";

const Home = () => {
  const features = useMemo(
    () => [
      { icon: "⚡", title: "Fast AI Analysis" },
      { icon: "🧠", title: "Smart Insights" },
      { icon: "📜", title: "History Tracking" },
    ],
    []
  );

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>AI Insight Hub</h1>
      <p>Analyze text using AI-powered logic</p>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {features.map((f, i) => (
          <div key={i} style={{ background: "#111827", padding: "20px", borderRadius: "12px" }}>
            {f.icon} {f.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
