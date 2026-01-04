export default function PageList({ pages }) {
  return (
    <div>
      <h2>Pages</h2>
      {pages.map(page => (
        <div key={page.url} style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "8px 0"
        }}>
          <span>{page.url}</span>
          <strong>{page.score}</strong>
        </div>
      ))}
    </div>
  );
}
