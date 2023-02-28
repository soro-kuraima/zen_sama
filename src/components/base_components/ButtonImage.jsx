export default function ButtonImage({ children, onClick }) {
  return (
    <div className="button-image">
      <button className="image" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}