import React from 'react';

const experiences = [
  {
    title: "Intern Pharmacist",
    company: "Dr.Pharmacy",
    period: "2024 - Present",
    description: "Assisted in dispensing medications, providing patient counseling, and managing inventory. Conducted quality checks and maintained compliance with drug storage regulations."
  },
  {
    title: "Academic Project: Formulation of Herbal Cough Syrup",
    period: "2022 - 2023",
    description: "Researched and developed an effective herbal remedy for common cough, focusing on formulation and stability testing. Successfully presented findings during the college symposium."
  },
  {
    title: "Seminar on Antibiotic Resistance",
    period: "2020 - 2021",
    description: "Organized an awareness campaign and workshops for patients on the risks of antibiotic resistance, enhancing community understanding of proper medication usage."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-rose-600">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}