import TextArea from "../base_components/TextArea";

export default function Gratitude({children, prompt}) {
  return (
    <div className="journal-section">
      <TextArea prompt={"Gratitude"}/>
    </div>
  );
}       