export default function TextArea({children, prompt}) {
  return (
    <div className="text-area">
        <h1>{prompt}</h1>
      <textarea className="text-area__textarea" placeholder="Enter your journal here..."></textarea>
    </div>
  );
}