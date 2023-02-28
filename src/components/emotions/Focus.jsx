import focus from "../../assets/Focus.svg"

export default function Focus({children}) {
  return (
    <div className="focus">
      {children}
      <img src={focus} alt="" />
    </div>
  );
}