import TextArea from "../base_components/TextArea";

export default function Reflection({children, prompt}) {
  return (
    <div className="reflection">
        <TextArea prompt={"reflection"}/>
    </div>
  );
}