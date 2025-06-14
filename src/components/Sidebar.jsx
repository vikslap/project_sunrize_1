// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';
import blogBanner from '../assets/blog-Banner.webp';

export default function Sidebar({
  modules,
  activeModule,
  activeLesson,
  onLessonClick,
  collapsed,
}) {
  return (
    <aside
      className={`bg-gray-100 shadow-inner overflow-y-auto transition-all duration-500 ease-in-out ${
        collapsed ? 'w-0 opacity-0' : 'w-64 opacity-100'
      }`}
      style={{
        transitionProperty: 'width, opacity',
        minWidth: collapsed ? '0px' : '16rem', // Optional: avoid content jump
        
      }}
    >
      {!collapsed && (
        <div className="p-4">
          <Link to="/">
            <img src={blogBanner} alt="Course Thumbnail" className="rounded shadow" />
          </Link>
          <h2 className="text-lg font-semibold mt-4 mb-2">Lesson Sections</h2>
          {modules.map((module, moduleIndex) => (
            <div key={module.id} className="mb-4">
              <h3 className="text-sm font-bold px-2 text-gray-600">{module.title}</h3>
              <ul className="px-2">
                {module.items.map((lesson, lessonIndex) => (
                  <li
                    key={lesson.title}
                    onClick={() => onLessonClick(moduleIndex, lessonIndex)}
                    className={`cursor-pointer p-2 rounded mb-1 ${
                      activeModule === moduleIndex && activeLesson === lessonIndex
                        ? 'bg-blue-200 font-semibold'
                        : 'hover:bg-gray-200'
                    }`}
                  >
                    {lesson.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
