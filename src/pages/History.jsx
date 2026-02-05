// import { useSelector } from "react-redux";

// const History = () => {
//   const history = useSelector((state) => state.ai.history);

//   return (
//     <div style={{ padding: "40px", color: "white" }}>
//       <h1>History</h1>
//       {!history.length && <p style={{ color: "gray" }}>No analysis history yet.</p>}
//       {history.map((item) => (
//         <div key={item.id} style={{ marginTop: "15px", background: "#111827", padding: "15px", borderRadius: "12px" }}>
//           <p><strong>Input:</strong> {item.input}</p>
//           <p><strong>Analysis:</strong> {item.analysis}</p>
//           <p><strong>Score:</strong> {item.score}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default History;
import { useState } from "react";
import { useSelector } from "react-redux";

const History = () => {
  const history = useSelector((state) => state.ai.history);
  const [search, setSearch] = useState("");

  const filteredHistory = history.filter((item) =>
    item.input.toLowerCase().includes(search.toLowerCase())
  );

  const getSentimentColor = (sentiment) => {
    if (sentiment === "Positive") return "green";
    if (sentiment === "Negative") return "#ef4444";
    return "gray";
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Analysis History</h1>

      <input
        type="text"
        placeholder="Search history..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
      />

      {!filteredHistory.length && <p style={{ color: "gray" }}>No results found.</p>}

      {filteredHistory.map((item) => (
        <div key={item.id} style={{ marginTop: "15px", padding: "15px", borderRadius: "12px", backgroundColor: "var(--card-bg, #111827)" }}>
          <p><strong>Input:</strong> {item.input}</p>
          <p><strong>Analysis:</strong> {item.analysis}</p>
          <p><strong>Score:</strong> {item.score}</p>
          <p><strong>Sentiment:</strong> <span style={{ color: getSentimentColor(item.sentiment) }}>{item.sentiment}</span></p>
        </div>
      ))}
    </div>
  );
};

export default History;