'use client';
import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const photos = [
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bb1f5abc46f6d5eaedceb44/1538740326566-5XLFTER4LUKZU99M4Q7N/01.JPG',
    caption: { fr: 'Wan Tan', nl: 'Wan Tan', en: 'Wan Tan' },
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bb1f5abc46f6d5eaedceb44/1538741916944-3GQIYAEJTIJRCZ5LR6FP/02.JPG',
    caption: { fr: 'Nems', nl: 'Nems', en: 'Spring Rolls' },
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bb1f5abc46f6d5eaedceb44/1538742024569-NJ9AN24C0O3HKBQR0E51/03.jpg',
    caption: { fr: 'Assiette Entrée Maison', nl: 'Huisvoorgerecht', en: 'House Starter Platter' },
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bb1f5abc46f6d5eaedceb44/1538748165597-UEFZJUYUJ2Y75TFEOZDI/Rouleaux+de+printemps',
    caption: { fr: 'Rouleaux de Printemps', nl: 'Lenterolle', en: 'Fresh Spring Rolls' },
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bb1f5abc46f6d5eaedceb44/1538748181565-R0M1RG02PB4LX1ZLJXZ1/05.JPG',
    caption: { fr: 'Salade de Poulet aux Herbes Fraîches', nl: 'Kipsalade met Verse Kruiden', en: 'Chicken Salad with Fresh Herbs' },
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bb1f5abc46f6d5eaedceb44/1538767030694-RU1I013TY3MHVV2IQ5QR/06Assiette+Banian.jpg',
    caption: { fr: 'Assiette Banian', nl: 'Banian Schotel', en: 'Banian Platter' },
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bb1f5abc46f6d5eaedceb44/1538767056267-H83S9GP5UIJM8CCYS15X/07Dim+Sum.jpg',
    caption: { fr: 'Dim Sum', nl: 'Dim Sum', en: 'Dim Sum' },
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bb1f5abc46f6d5eaedceb44/1538767145756-L61P49XOBST0NPK1O965/08nouilles.jpg',
    caption: { fr: 'Nouilles Sautées', nl: 'Gebakken Noedels', en: 'Stir-Fried Noodles' },
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bb1f5abc46f6d5eaedceb44/1538767203824-XE980KRLK9Q4T651K48D/09curry.jpg',
    caption: { fr: 'Curry Vert', nl: 'Groene Curry', en: 'Green Curry' },
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bb1f5abc46f6d5eaedceb44/1538767255931-WND9VM3QIGN84UBPP9Q2/10.jpg',
    caption: { fr: 'Canard Laqué', nl: 'Gelakte Eend', en: 'Lacquered Duck' },
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bb1f5abc46f6d5eaedceb44/1538767976643-I8WRRUS82P2N9BRLDN6L/14.jpg',
    caption: { fr: "Cuisses de Grenouilles à l'Ail", nl: 'Kikkerbilletjes met Knoflook', en: 'Garlic Frog Legs' },
  },
  {
    src: 'https://images.squarespace-cdn.com/content/v1/5bb1f5abc46f6d5eaedceb44/1538768040726-6ZFDR8P9BS13FT4FFMCM/16.jpg',
    caption: { fr: 'Teppan de Fruits de Mer', nl: 'Teppan Zeevruchten', en: 'Seafood Teppan' },
  },
];

type Locale = 'fr' | 'nl' | 'en';

export default function PhotosPage() {
  const { locale, dict } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox(i => i !== null ? (i + 1) % photos.length : null);
      if (e.key === 'ArrowLeft') setLightbox(i => i !== null ? (i - 1 + photos.length) % photos.length : null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  const photosDict = (dict as any).photos as { title: string; subtitle: string };

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-[72px]">
        {/* Page header */}
        <div className="py-16 px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">{photosDict?.subtitle}</p>
          <h1 className="font-display italic text-4xl md:text-5xl">{photosDict?.title}</h1>
        </div>

        {/* Grid */}
        <div className="px-6 pb-24 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative aspect-square overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <img
                  src={photo.src}
                  alt={photo.caption[locale as Locale]}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Caption overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end p-3">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {photo.caption[locale as Locale]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Back link */}
        <div className="text-center pb-8">
          <Link href="/" className="text-text-muted hover:text-accent text-sm uppercase tracking-wider transition-colors">
            ← {dict.nav.home}
          </Link>
        </div>
      </main>

      <Footer dict={{ nav: dict.nav, findUs: dict.findUs, footer: dict.footer }} />

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none z-10 px-2"
            onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}
            aria-label="Previous"
          >
            ‹
          </button>

          {/* Image */}
          <div className="max-w-[90vw] max-h-[85vh] flex flex-col items-center gap-4" onClick={e => e.stopPropagation()}>
            <img
              src={photos[lightbox].src}
              alt={photos[lightbox].caption[locale as Locale]}
              className="max-w-full max-h-[75vh] object-contain rounded"
            />
            <p className="text-white/80 text-sm uppercase tracking-wider">
              {photos[lightbox].caption[locale as Locale]}
            </p>
            <p className="text-white/30 text-xs">{lightbox + 1} / {photos.length}</p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-4xl leading-none z-10 px-2"
            onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
