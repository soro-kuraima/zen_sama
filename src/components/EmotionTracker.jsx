import { Link } from "react-router-dom";
import Relax from "./emotions/Relax";
import Focus from "./emotions/Focus";
import Calm from "./emotions/Calm";
import Happy from "./emotions/Happy";

export default function EmotionTracker({ children }) {
  return (
    <div className="emotion-tracker mb-4">
      <h1 className="text-lg text-purple font-semi-bold mb-4">
        {" "}
        Mood check-in
      </h1>
      <div className="emotion-tracker-card bg-transparent flex justify-between">
        <Happy />
        <Calm />
        <Relax />
        <Focus />
      </div>
    </div>
  );
}
