export default function Projects() {
  const projects = [
    "Face Recognition Attendance System – Automated attendance using OpenCV",
    "Library Management System – CRUD-based book management",
    "App Clones – Instagram, Facebook, Netflix UI using React",
    "E-Commerce Website – Responsive frontend with cart & payment UI",
    "Sentiment Analyzer – Social media sentiment using NLP"
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600">Projects</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="p-6 bg-white border rounded-lg shadow hover:shadow-lg">
              <p className="text-gray-700">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
