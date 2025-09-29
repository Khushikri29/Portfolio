export default function Certifications() {
  const certs = [
    "Python Programming – IIT Bombay",
    "Machine Learning, Data Science & Web Development – iHUB",
    "Cloud Computing & IoT – NPTEL",
    "Generative AI – Gen AI Academy"
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600">Certifications</h2>
        <ul className="mt-6 space-y-3">
          {certs.map((c, i) => (
            <li key={i} className="p-3 bg-white shadow rounded">{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
