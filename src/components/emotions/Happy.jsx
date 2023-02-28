import happy from "../../assets/Happy.svg"

export default function Happy({children}) {
  return (
    <div className="happy">
      {children}
      <img src={happy} alt="" />
    </div>
  );
}