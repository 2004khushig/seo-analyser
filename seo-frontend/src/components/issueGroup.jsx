import IssueItem from "./issueItem";

export default function IssueGroup({ issues }) {
  if (!issues) return null; // ✅ guard

  return (
    <div style={{ marginTop: 32 }}>
      <h2>Issues</h2>

      {["High", "Medium"].map(level => (
        <div key={level}>
          <h3>{level} Priority</h3>

          {issues[level]?.length > 0 ? (
            issues[level].map(issue => (
              <IssueItem
                key={`${level}-${issue.id}`} // ✅ unique
                issue={issue}
              />
            ))
          ) : (
            <p>No issues</p>
          )}
        </div>
      ))}
    </div>
  );
}
