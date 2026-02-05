import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { analyzeText, clearResult } from "../features/ai/aiSlice";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Analyze = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { loading, result, error } = useSelector((state) => state.ai);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!text.trim()) return;
      dispatch(analyzeText(text));
    },
    [text, dispatch]
  );

  const getSentimentColor = (sentiment) => {
    if (sentiment === "Positive") return "green";
    if (sentiment === "Negative") return "#ef4444";
    return "gray";
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Analyze Text</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          style={{ width: "100%", height: "100px", marginTop: "10px" }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div style={{ marginTop: "10px" }}>
          <button type="submit" style={{ padding: "10px 20px" }}>Analyze</button>
          <button
            type="button"
            onClick={() => {
              dispatch(clearResult());
              setText("");
            }}
            style={{ marginLeft: "10px", padding: "10px 20px" }}
          >
            Clear
          </button>
        </div>
      </form>

      {loading && <Loader />}
      {error && <Error message={error} />}
      {!loading && !result && <p style={{ color: "gray" }}>Enter text to analyze AI response.</p>}

      {result && (
        <div style={{ marginTop: "20px", padding: "20px", borderRadius: "12px", backgroundColor: "var(--card-bg, #111827)" }}>
          <p><strong>Input:</strong> {result.input}</p>
          <p><strong>Analysis:</strong> {result.analysis}</p>
          <p><strong>Score:</strong> {result.score}</p>
          <p><strong>Sentiment:</strong> <span style={{ color: getSentimentColor(result.sentiment) }}>{result.sentiment}</span></p>
        </div>
      )}
    </div>
  );
};

export default Analyze;