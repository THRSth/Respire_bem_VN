
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-brand-blue text-white p-6 shadow-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
