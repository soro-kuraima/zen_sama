import TextArea from "../base_components/TextArea";

export default function Planning({children, prompt}) {
  return (
    <div className="journal-section">
      <TextArea prompt={"planning"}/>
    </div>
  );
}