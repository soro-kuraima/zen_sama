import TextArea from "../base_components/TextArea";

export default function OpenJournal({children, prompt}) {
  return (
    <div className="journal-section">
      <TextArea prompt={"open journal"}/>
    </div>
  );
}