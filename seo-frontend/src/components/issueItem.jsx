export default function IssueItem({ issue }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, marginBottom: 12 }}>
      <strong>{issue.title}</strong>
      <p>{issue.issue}</p>

      <p><b>Affected pages:</b> {issue.count}</p>

      {issue.pages?.length > 0 && (
        <details>
          <summary>View pages</summary>
          {issue.pages.map(p => (
            <div key={p}>{p}</div>
          ))}
        </details>
      )}

      <p><b>Fix:</b> {issue.fix}</p>
    </div>
  );
}
