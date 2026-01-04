import { useEffect, useState } from "react";
import { analyzeSite } from "../services/api";
import ScoreGauge from "../components/scoreGauge";
import PageList from "../components/pageList";
import IssueGroup from "../components/issueGroup";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    analyzeSite("https://en.wikipedia.org/wiki/Main_Page")
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return <p>Analyzing site…</p>;

  return (
    <div style={{ padding: 24 }}>
      <ScoreGauge score={data.siteScore} />

      <PageList pages={data.pages} />

      {/* ✅ THIS IS THE FIX */}
      <IssueGroup issues={data.issues} />
    </div>
  );
}
