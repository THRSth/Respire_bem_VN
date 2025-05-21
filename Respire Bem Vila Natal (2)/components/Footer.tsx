
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Respire Bem Vila Natal. Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Feito com ❤️ pela comunidade e para a comunidade.</p>
      </div>
    </footer>
  );
};

export default Footer;
