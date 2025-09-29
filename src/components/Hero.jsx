export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center">
      <h1 className="text-5xl font-extrabold">Khushi Kumari</h1>
      <p className="mt-3 text-xl">Software Engineer | React | JavaScript | TypeScript | Tailwind</p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow hover:bg-gray-200">View Projects</a>
        <a href="#contact" className="px-6 py-3 border border-white rounded-lg font-semibold hover:bg-white hover:text-blue-600">Contact Me</a>
      </div>
    </section>
  );
}
