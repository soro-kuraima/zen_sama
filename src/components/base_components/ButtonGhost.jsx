export default function ButtonGhost({ children }) {
  return (
    <div className="button-ghost">
      <button className="ghost">{children}</button>
    </div>
  );
}
