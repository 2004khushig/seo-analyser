export default function ScoreGauge({ score }) {
  let color = "#ef4444";
  if (score >= 70) color = "#22c55e";
  else if (score >= 50) color = "#facc15";

  return (
    <div style={{
      fontSize: 48,
      fontWeight: "bold",
      color,
      marginBottom: 24
    }}>
      SEO Score: {score}
    </div>
  );
}
