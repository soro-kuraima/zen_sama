import calm from "../../assets/Calm.svg"

export default function Calm({children}) {
  return (
    <div className="calm">
      {children}
      <img src={calm} alt="" />
    </div>
  );
}