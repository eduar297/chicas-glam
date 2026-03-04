import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-elegant font-bold text-rose-600">
              Chicas Glam
            </h1>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Inicio', id: 'hero' },
              { name: 'Servicios', id: 'services' },
              { name: 'Galería', id: 'gallery' },
              { name: 'Contacto', id: 'contact' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-rose-600 font-modern font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/5350171464"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 md:px-6 py-2 rounded-full font-medium text-sm md:text-base hover:from-rose-600 hover:to-rose-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            <span className="hidden sm:inline">Reservar Cita</span>
            <span className="sm:hidden">💬</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;