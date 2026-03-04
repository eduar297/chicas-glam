import { useState, useEffect } from 'react';
import servicesData from '../data/services.json';

interface Service {
  name: string;
  price: number;
}

interface ServiceCategory {
  category: string;
  items: Service[];
}

const Services = () => {
  const [services, setServices] = useState<ServiceCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Uñas');

  useEffect(() => {
    setServices(servicesData);
  }, []);

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Uñas': '💅',
      'Pelo': '💇‍♀️',
      'Cejas y Pestañas': '👁️',
      'Facial': '✨',
      'Talones': '🦶'
    };
    return icons[category] || '✨';
  };

  return (
    <section id="services" className="w-full py-16 md:py-20 bg-gradient-to-b from-white to-nude-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-gray-800 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-modern">
            Ofrecemos una amplia gama de servicios de belleza con los mejores profesionales y productos de calidad
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 px-2">
          {services.map((serviceCategory) => (
            <button
              key={serviceCategory.category}
              onClick={() => setSelectedCategory(serviceCategory.category)}
              className={`px-3 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-1 md:space-x-2 text-sm md:text-base ${
                selectedCategory === serviceCategory.category
                  ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-600 border border-gray-200'
              }`}
            >
              <span className="text-base md:text-lg">{getCategoryIcon(serviceCategory.category)}</span>
              <span className="hidden sm:inline">{serviceCategory.category}</span>
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services
            .find((cat) => cat.category === selectedCategory)
            ?.items.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 font-modern flex-1">
                    {service.name}
                  </h3>
                  <span className="text-2xl ml-2">{getCategoryIcon(selectedCategory)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-rose-600">
                    ${service.price}
                  </span>
                  <a
                    href={`https://wa.me/5350171464?text=Hola! Me gustaría reservar ${service.name} (${selectedCategory}) en Chicas Glam`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium hover:from-rose-600 hover:to-rose-700 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Reservar
                  </a>
                </div>
              </div>
            ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h3>
            <p className="text-rose-100 mb-6">
              Consultanos por tratamientos personalizados y paquetes especiales
            </p>
            <a
              href="https://wa.me/5350171464?text=Hola! Me gustaría consultar sobre servicios personalizados en Chicas Glam"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-rose-600 px-6 md:px-8 py-3 rounded-full font-medium hover:bg-rose-50 transition-all duration-300 inline-flex items-center space-x-2 text-sm md:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.905 3.512z"/>
              </svg>
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;