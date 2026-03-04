const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-nude-50 via-beige-50 to-rose-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Floating shapes */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-nude-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        {/* Beauty icons scattered */}
        <div className="absolute top-20 left-10 opacity-10 animate-float" style={{ animationDelay: '1s' }}>
          <svg className="w-16 h-16 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L8 6v12h8V6l-4-4zm2 14h-4v-2h4v2zm0-4h-4V8h4v4z"/>
          </svg>
        </div>
        
        <div className="absolute top-32 right-20 opacity-10 animate-float" style={{ animationDelay: '3s' }}>
          <svg className="w-12 h-12 text-beige-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-32 left-20 opacity-10 animate-float" style={{ animationDelay: '4s' }}>
          <svg className="w-14 h-14 text-nude-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
        
        <div className="absolute bottom-20 right-16 opacity-10 animate-float" style={{ animationDelay: '0.5s' }}>
          <svg className="w-10 h-10 text-rose-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
          </svg>
        </div>
        
        {/* Geometric patterns */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-rose-300/40 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-nude-300/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-beige-400/60 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              {/* Beauty badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6">
                <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-gray-700 font-medium">Salón de Belleza Premium</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-elegant font-bold text-gray-800 mb-6 leading-tight">
              <span className="block">Chicas</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-400 block">
                Glam
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-modern animate-slide-up">
              Tu belleza es nuestra pasión. Descubre la mejor versión de ti misma con nuestros tratamientos especializados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="https://wa.me/5350171464?text=Hola! Me gustaría reservar una cita en Chicas Glam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-rose-500 to-rose-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.905 3.512z"/>
                </svg>
                <span>Reservar por WhatsApp</span>
              </a>
              
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto border-2 border-rose-300 text-rose-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg hover:bg-rose-50 transition-all duration-300 hover:border-rose-400"
              >
                Ver Servicios
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">500+</div>
                <div className="text-sm text-gray-600">Clientas felices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">5</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-rose-600">15+</div>
                <div className="text-sm text-gray-600">Servicios disponibles</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="relative lg:block animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Main illustration */}
            <div className="relative mx-auto w-full max-w-lg">
              {/* Background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-200/40 to-nude-200/40 rounded-full blur-2xl transform scale-110"></div>
              
              {/* Beauty tools illustration */}
              <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-12 border border-white/30">
                <div className="grid grid-cols-2 gap-8">
                  {/* Nail polish */}
                  <div className="flex flex-col items-center space-y-2 animate-float">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L8 6v12h8V6l-4-4zm2 14h-4v-2h4v2zm0-4h-4V8h4v4z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Uñas</span>
                  </div>
                  
                  {/* Hair */}
                  <div className="flex flex-col items-center space-y-2 animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-nude-400 to-nude-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Pelo</span>
                  </div>
                  
                  {/* Facial */}
                  <div className="flex flex-col items-center space-y-2 animate-float" style={{ animationDelay: '1s' }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-beige-400 to-beige-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Facial</span>
                  </div>
                  
                  {/* Eyebrows */}
                  <div className="flex flex-col items-center space-y-2 animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-300 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-700">Cejas</span>
                  </div>
                </div>
                
                {/* Center crown */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M5 16L3 14v-4l5.5-5.5L12 2l3.5 2.5L21 10v4l-2 2H5zm2.5-2h9l1-1v-2.5L15 8l-3-2L9 8l-2.5 2.5V13l1 1z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-500 font-medium">Descubre más</span>
          <svg className="w-6 h-6 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;