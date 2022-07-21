import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import OpenJournal from "./components/journals/OpenJournal";
import Gratitude from "./components/journals/Gratitude";
import Overwhelm from "./components/journals/Overwhelm";
import Planning from "./components/journals/Planning";
import Reflection from "./components/journals/Reflection";
import Venting from "./components/journals/Venting";
import "./index.css";
import Home from "./Home";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="journal/open-journal" element={<OpenJournal />} />
          <Route path="journal/planning" element={<Planning />} />
          <Route path="journal/reflection" element={<Reflection />} />
          <Route path="journal/gratitude" element={<Gratitude />} />
          <Route path="journal/overwhelm" element={<Overwhelm />} />
          <Route path="journal/venting" element={<Venting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
