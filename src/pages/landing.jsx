import { Link } from "react-router-dom";
import lessons from '../data/lessons';
import blogBanner from "../assets/blog-Banner.webp"


export default function Landing () {
  return (
    <div className="min-h-screen bg-white p-8 text-center">
      <img
        src={blogBanner}
        alt="Banner Image"
        className="mx-auto mb-8 w-full max-w-3xl rounded-lg shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4">Welcome to the Course</h1>
      <p className="text-gray-600 mb-10">Select a lesson to begin your learning journey.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {lessons.map((lesson) => (
          <Link
            key = {lesson.id}
            to = {`/lesson/${lesson.id}`}
            className="block bg-blue-100 hover:bg-blue-200 rounded p-6 text-lg font-medium shadow transition"
          >
            {lesson.title}
          </Link>
        ))}

      </div>

    </div>
  );
}