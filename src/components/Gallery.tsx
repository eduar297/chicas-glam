import { useState } from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<'gallery' | 'transformations'>('gallery');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Actualizar imágenes de la galería con mejores URLs
  const galleryImages = [
    { id: 1, src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800', thumb: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300', alt: 'Salón Interior 1' },
    { id: 2, src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800', thumb: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300', alt: 'Salón Interior 2' },
    { id: 3, src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800', thumb: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300', alt: 'Nail Art 1' },
    { id: 4, src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800', thumb: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300', alt: 'Tratamiento Capilar' },
    { id: 5, src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800', thumb: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300', alt: 'Tratamiento de Cejas' },
    { id: 6, src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800', thumb: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300', alt: 'Tratamiento Facial' },
    { id: 7, src: 'https://images.unsplash.com/photo-1555716024-4686c5d19a49?w=800', thumb: 'https://images.unsplash.com/photo-1555716024-4686c5d19a49?w=300', alt: 'Nail Art 2' },
    { id: 8, src: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800', thumb: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=300', alt: 'Ambiente Spa' },
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const transformations = [
    {
      id: 1,
      category: 'Cejas',
      before: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=300',
      after: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300',
      description: 'Diseño y perfilado de cejas'
    },
    {
      id: 2,
      category: 'Uñas',
      before: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300',
      after: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300',
      description: 'Manicura completa con nail art'
    },
    {
      id: 3,
      category: 'Pelo',
      before: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300',
      after: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300',
      description: 'Tratamiento capilar y color'
    },
    {
      id: 4,
      category: 'Facial',
      before: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300',
      after: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=300',
      description: 'Limpieza facial profunda'
    }
  ];

  return (
    <section id="gallery" className="w-full py-12 md:py-16 lg:py-20 bg-gradient-to-b from-nude-50 to-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-elegant font-bold text-gray-800 mb-4 md:mb-6">
            Nuestra Galería
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto font-modern mb-6 md:mb-8 px-4">
            Descubre nuestro trabajo y las increíbles transformaciones que realizamos
          </p>

          {/* Tab Navigation - Mobile First */}
          <div className="flex justify-center">
            <div className="bg-white rounded-full p-1 shadow-lg w-full max-w-md">
              <div className="grid grid-cols-2 gap-1">
                <button
                  onClick={() => setActiveTab('gallery')}
                  className={`px-3 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                    activeTab === 'gallery'
                      ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-600'
                  }`}
                >
                  <span className="hidden sm:inline">Nuestro Salón</span>
                  <span className="sm:hidden">Salón</span>
                </button>
                <button
                  onClick={() => setActiveTab('transformations')}
                  className={`px-3 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                    activeTab === 'transformations'
                      ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-600'
                  }`}
                >
                  <span className="hidden sm:inline">Antes y Después</span>
                  <span className="sm:hidden">Antes/Después</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Content - Mobile First with Lightbox */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl transition-all duration-300 aspect-square cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.thumb}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-medium text-xs md:text-sm bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Transformations Content - Mobile First */}
        {activeTab === 'transformations' && (
          <div className="space-y-8 md:space-y-12">
            {transformations.map((transformation) => (
              <div
                key={transformation.id}
                className="bg-white rounded-lg md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-4 md:mb-6">
                  <span className="inline-block bg-gradient-to-r from-rose-500 to-rose-600 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-medium mb-2">
                    {transformation.category}
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {transformation.description}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                  {/* Before */}
                  <div className="text-center">
                    <div className="relative overflow-hidden rounded-lg md:rounded-xl shadow-md mb-2 md:mb-4">
                      <img
                        src={transformation.before}
                        alt="Antes"
                        className="w-full h-48 md:h-64 object-cover"
                      />
                      <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-gray-800 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                        Antes
                      </div>
                    </div>
                  </div>

                  {/* Arrow - Mobile: vertical, Desktop: horizontal */}
                  <div className="flex justify-center md:block order-3 md:order-2">
                    <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mx-auto md:mx-0">
                      <svg className="w-5 h-5 md:w-6 md:h-6 transform rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* After */}
                  <div className="text-center order-2 md:order-3">
                    <div className="relative overflow-hidden rounded-lg md:rounded-xl shadow-md mb-2 md:mb-4">
                      <img
                        src={transformation.after}
                        alt="Después"
                        className="w-full h-48 md:h-64 object-cover"
                      />
                      <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                        Después
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA - Mobile First */}
                <div className="text-center mt-4 md:mt-6">
                  <a
                    href={`https://wa.me/5350171464?text=Hola! Me interesa el tratamiento de ${transformation.category} que vi en la galería de Chicas Glam`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-medium hover:from-rose-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base w-full sm:w-auto"
                  >
                    <span>Quiero este resultado</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.905 3.512z"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Simple Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-60 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 z-60 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Image */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            <div className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center">
              <img
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Image Description */}
            <div className="mt-4 bg-black/50 text-white px-4 py-2 rounded-full text-center">
              <p className="font-medium">{galleryImages[currentImageIndex].alt}</p>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex space-x-2 overflow-x-auto pb-2 max-w-full">
              {galleryImages.map((image, index) => (
                <button
                  key={`thumb-${image.id}`}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded overflow-hidden ${
                    index === currentImageIndex ? 'ring-2 ring-rose-500' : ''
                  }`}
                >
                  <img
                    src={image.thumb}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;