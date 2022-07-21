import TextArea from "../base_components/TextArea";

export default function Venting({children, prompt}) {
  return (
    <div className="journal-section">
      <TextArea prompt={"venting"}/>
    </div>
  );
}