export default function Internship() {
  const internships = [
    {
      role: "Frontend Developer",
      time: "May 2025 – Present",
      desc: "Designed and developed responsive, user-friendly web interfaces using React.js. Worked on state management, Git workflows, and performance optimization."
    },
    {
      role: "Data Analytics Intern – NIELIT, Patna",
      time: "June 2025 – July 2025",
      desc: "Applied data cleaning, processing, and visualization using Pandas, NumPy, and Matplotlib. Built dashboards and reports for real-world datasets."
    },
    {
      role: "Developer Intern – Salesforce",
      time: "Dec 2023 – Jan 2024",
      desc: "Gained hands-on experience with Salesforce Lightning, Apex, Visualforce, and API integrations through an 8-week internship."
    }
  ];

  return (
    <section id="internship" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-600 text-center">Internships</h2>
        <div className="mt-10 space-y-6">
          {internships.map((i, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-semibold">{i.role}</h3>
              <p className="text-sm text-gray-500">{i.time}</p>
              <p className="mt-3 text-gray-700">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
