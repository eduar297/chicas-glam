const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-nude-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-nude-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-beige-300 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="animate-fade-in">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
                  <span className="block text-rose-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-2">
                    Bienvenida a
                  </span>
                  Chicas Glam
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Tu salón de belleza de confianza en Güines, Mayabeque. 
                  <span className="block mt-2 text-rose-600 font-medium">
                    Donde tu belleza es nuestra pasión
                  </span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <a
                  href="https://wa.me/5350171464?text=Hola! Me gustaría reservar una cita en Chicas Glam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.905 3.512z"/>
                  </svg>
                  <span>Reservar Cita</span>
                </a>
                
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto border-2 border-rose-300 text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 transition-all duration-300 hover:border-rose-400"
                >
                  Ver Servicios
                </button>
              </div>

              {/* Quick Info */}
              <div className="mt-8 md:mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span>Lun - Vie: 9:00 - 18:00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span>Güines, Mayabeque</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                  <span>@chicasglam___</span>
                </div>
              </div>
            </div>

            {/* Hero Image/Illustration */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg animate-float">
                {/* Main Circle */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                  {/* Background Circle with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-300 via-rose-200 to-nude-200 rounded-full shadow-2xl"></div>
                  
                  {/* Beauty Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl md:text-8xl">💅</div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-8 animate-bounce-slow">
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <span className="text-2xl">✨</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-4 animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <span className="text-2xl">💄</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-1/3 left-2 animate-bounce-slow" style={{ animationDelay: '1s' }}>
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <span className="text-xl">👁️</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-1/3 right-2 animate-bounce-slow" style={{ animationDelay: '1.5s' }}>
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <span className="text-xl">💫</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;