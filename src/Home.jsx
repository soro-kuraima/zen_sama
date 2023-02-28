import Welcome from "./components/Welcome";
import JournalSection from "./components/JournalSection";
import EmotionTracker from "./components/EmotionTracker";

export default function Home() {
  return (
    <div className="p-2">
      <Welcome>Abhishek</Welcome>
      <EmotionTracker />
      <JournalSection />
      <Welcome>Abhishek</Welcome>
      <EmotionTracker />
      <JournalSection />
      <Welcome>Abhishek</Welcome>
      <EmotionTracker />
      <JournalSection />
      <Welcome>Abhishek</Welcome>
      <EmotionTracker />
      <JournalSection />
      <Welcome>Abhishek</Welcome>
      <EmotionTracker />
      <JournalSection />
    </div>
  );
}
