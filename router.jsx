import { HashRouter, Routes, Route } from "react-router-dom";
import Landing from "./src/pages/landing";
import LessonPage from "./src/pages/LessonPage";

export default function AppRouter () {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/lesson/:id" element={<LessonPage/>} />
      </Routes>
    </HashRouter>
  );
}