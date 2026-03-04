const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 md:py-20 bg-gradient-to-b from-white to-nude-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant font-bold text-gray-800 mb-6">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-modern">
            Estamos aquí para ayudarte. Reserva tu cita o consultanos cualquier duda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-rose-100 p-2 md:p-3 rounded-xl">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Dirección</h3>
                  <p className="text-sm md:text-base text-gray-600">Los altos al lado de Panorama</p>
                  <p className="text-sm md:text-base text-gray-600">Frente a Michel el Veterinario</p>
                  <p className="text-sm md:text-base text-gray-600">Güines, Mayabeque, Cuba</p>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-rose-100 p-2 md:p-3 rounded-xl">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Horarios de Atención</h3>
                  <div className="space-y-1 text-gray-600 text-sm md:text-base">
                    <p>Lunes a Viernes: 9:00 - 18:00</p>
                    <p>Sábados: 9:00 - 16:00</p>
                    <p>Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="bg-rose-100 p-2 md:p-3 rounded-xl">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">Teléfono</h3>
                  <p className="text-sm md:text-base text-gray-600">+53 50171464</p>
                  <p className="text-xs md:text-sm text-rose-600">También por WhatsApp</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 md:p-8 text-white text-center">
              <div className="bg-white/20 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.905 3.512z"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">¡Reserva tu cita!</h3>
              <p className="text-green-100 mb-4 md:mb-6 text-sm md:text-base">
                La forma más rápida y fácil de reservar tu cita es por WhatsApp
              </p>
              <a
                href="https://wa.me/5350171464?text=Hola! Me gustaría reservar una cita en Chicas Glam"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-green-50 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Enviar WhatsApp</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Instagram Card */}
            <div className="bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl p-6 md:p-8 text-white text-center">
              <div className="bg-white/20 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.149-1.191C4.598 15.095 4.1 13.944 4.1 12.646s.498-2.449 1.2-3.15c.7-.7 1.852-1.191 3.149-1.191s2.448.49 3.149 1.191c.701.701 1.2 1.852 1.2 3.15s-.499 2.449-1.2 3.15c-.701.701-1.852 1.191-3.149 1.191zm7.424-6.748a.68.68 0 01-.678-.678c0-.374.304-.678.678-.678s.678.304.678.678c0 .374-.304.678-.678.678zM12.017 7.729c-2.209 0-4.002 1.792-4.002 4.001s1.793 4.002 4.002 4.002 4.002-1.793 4.002-4.002-1.793-4.001-4.002-4.001z"/>
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2">Síguenos</h3>
              <p className="text-rose-100 mb-4 md:mb-6 text-sm md:text-base">
                Descubre nuestro trabajo diario y mantente al día con las últimas tendencias
              </p>
              <a
                href="https://instagram.com/chicasglam___"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-rose-600 px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-rose-50 transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>@chicasglam___</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;