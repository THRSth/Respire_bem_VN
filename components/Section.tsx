
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  bgClassName?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, bgClassName }) => {
  return (
    <section className={`py-8 ${bgClassName || ''}`}>
      <h2 className="text-3xl font-semibold text-brand-blue mb-6 text-center">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
