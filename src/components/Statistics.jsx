import { useState } from 'react';

import { useInView } from 'react-intersection-observer';

const stats = [
  { value: 15000, label: "Happy Patients", suffix: "+" },
  { value: 25, label: "Years Experience", suffix: "+" },
  { value: 5000, label: "Implants Placed", suffix: "+" },
  { value: 12, label: "Expert Doctors", suffix: "" }
];

export default function Statistics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-softblue-50 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-slate-200">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-2">
                {inView ? (
                  <span>{stat.value.toLocaleString()}</span>
                ) : (
                  "0"
                )}
                <span className="text-softblue-500">{stat.suffix}</span>
              </div>
              <p className="text-slate-600 font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
