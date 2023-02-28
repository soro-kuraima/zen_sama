import { useNavigate } from "react-router-dom";
import ButtonImage from "./base_components/ButtonImage";

export default function JournalSection({ children }) {
  let navigate = useNavigate()
  return (
    <div className="journal-section">
      <ButtonImage onClick={() => navigate('/journal/open-journal', {replace: true})}>Open Journal</ButtonImage>
      <ButtonImage onClick={() => navigate('/journal/gratitude', {replace: true})}>Gratitude</ButtonImage>
      <ButtonImage onClick={() => navigate('/journal/overwhelm', {replace: true})}>Overwhelm</ButtonImage>
      <ButtonImage onClick={() => navigate('/journal/planning', {replace: true})}>Planning</ButtonImage>
      <ButtonImage onClick={() => navigate('/journal/reflection', {replace: true})}>Reflection</ButtonImage>
      <ButtonImage onClick={() => navigate('/journal/venting', {replace: true})}>Venting</ButtonImage>
    </div>
  );
}
