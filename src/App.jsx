import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import JournalSection from "./components/JournalSection";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App bg-black">
      <nav>
        <ul>
          <li>Home</li>
          <li>sounds</li>
          <li>account</li>
        </ul>
      </nav>
      <audio autoPlay controls src="https://music.youtube.com/watch?v=yHLrjXGZT7k&feature=share">
        just a youtube audio
      </audio>
      <Outlet />
    </div>
  );
}

export default App;
