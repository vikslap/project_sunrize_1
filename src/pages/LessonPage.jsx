// src/pages/LessonPage.jsx
import { useState, useEffect, Suspense } from 'react';
import Sidebar from '../components/Sidebar';
import lessons from '../data/lessons';
import lessonComponents from '../data/LessonComponentMap';
import { Menu } from 'lucide-react';

export default function LessonPage() {
  const [collapsed, setCollapsed] = useState(true); // Sidebar collapsed by default
  const [selectedModuleIndex, setSelectedModuleIndex] = useState(0);
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [LessonComponent, setLessonComponent] = useState(null);

  const selectedModule = lessons[selectedModuleIndex];
  const selectedLesson = selectedModule.items[selectedLessonIndex];
  const selectedModuleId = selectedModule.id;
  const selectedLessonId = `lesson${selectedLessonIndex + 1}`;

  useEffect(() => {
    const importComponent = lessonComponents[selectedModuleId]?.[selectedLessonId];
    if (importComponent) {
      importComponent().then((mod) => setLessonComponent(() => mod.default));
    } else {
      setLessonComponent(() => () => <p>Lesson not found</p>);
    }
  }, [selectedModuleId, selectedLessonId]);

  const handleLessonClick = (moduleIndex, lessonIndex) => {
    setSelectedModuleIndex(moduleIndex);
    setSelectedLessonIndex(lessonIndex);
  };

  return (
    <div className="flex h-screen relative">
      {/* Sidebar (always rendered, collapsible) */}
      <Sidebar
        modules={lessons}
        activeModule={selectedModuleIndex}
        activeLesson={selectedLessonIndex}
        onLessonClick={handleLessonClick}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* Menu toggle button — always visible */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="fixed top-4 left-4 z-50 bg-white shadow p-2 rounded-full"
        title={collapsed ? 'Open menu' : 'Collapse menu'}
      >
        <Menu size={20} />
      </button>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">{selectedLesson.title}</h1>
        <Suspense fallback={<p>Loading lesson...</p>}>
          {LessonComponent ? <LessonComponent /> : <p>No content available.</p>}
        </Suspense>
      </div>
    </div>
  );
}
