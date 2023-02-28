import TextArea from "../base_components/TextArea";

export default function Overwhelm({children, prompt}) {
  return (
    <div className="overwhelm">
      <TextArea prompt={"overwhelm"}/>
    </div>
  );
}