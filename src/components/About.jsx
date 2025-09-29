export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-600">About Me</h2>
      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        I’m a passionate Software Engineer with strong frontend skills in React, TypeScript, and Tailwind CSS. 
        Experienced with Git, Jira, Figma, and backend concepts. 
        I enjoy solving problems, collaborating in teams, and building impactful projects.
      </p>
      <h3 className="mt-10 text-2xl font-semibold">Skills</h3>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
        {["C, C++, Python, TypeScript, JavaScript", 
          "HTML, CSS, React, Tailwind CSS, ShadCN UI",
          "MySQL, Git, GitHub, Jira, Figma, LaTeX",
          "Problem-Solving", 
          "Communication & Team Collaboration"].map((skill, i) => (
          <p key={i} className="p-3 bg-gray-100 rounded-lg shadow">{skill}</p>
        ))}
      </div>
    </section>
  );
}
