import FlipCard from "../../../components/flipcard.jsx";
import lesson1Banner from "../lesson1/assets/lesson1_1_banner.jpg";

export default function Lesson1() {
  return (
    <div>
      <img
        src={lesson1Banner}
        alt="Lesson Banner"
        className="w-full h-64 object-cover object-center mb-10"
      />

      <div  className="space-y-5 max-w-7xl mx-auto mb-5">
        <h2 className="text-2xl font-bold">What Is Employee Development?</h2>
        <p> Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Ultrices tincidunt arcu non sodales neque sodales. Adipiscing enim eu turpis egestas pretium aenean pharetra magna.</p> <p>Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Sit amet nisl suscipit adipiscing bibendum est. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing.</p>

      </div>
      
      <div className="space-y-5 max-w-7xl mx-auto mb-5">
        <blockquote className="border-l-4 border-blue-500 bg-blue-50 text-gray-800 italic px-6 py-4 rounded-md shadow-sm">
          “Employee development is a continuous process of professional growth, learning, and improvement.”
        </blockquote>
      </div>
      
      
      <div className="space-y-5 max-w-7xl mx-auto mb-5">
        <h2 className="text-2xl font-bold">Myth or Fact?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>    


      

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4">
        <FlipCard
          front={
            <p className="text-center font-semibold">
              Employee development only benefits the company.
            </p>
          }
          back={
            <p className="text-center text-green-700 font-semibold">
              ❌ Myth! It benefits both employee and organization.
            </p>
          }
        />

        <FlipCard
          front={
            <p className="text-center font-semibold">
              Development programs improve employee engagement.
            </p>
          }
          back={
            <p className="text-center text-green-700 font-semibold">
              ✅ Fact! Engaged employees are more productive and loyal.
            </p>
          }
        />
      </div>
    </div>
  );
}
