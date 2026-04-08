import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { t } = useTranslation();
  const { ref, className } = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 items-center ${className}`}
      >
        {/* Image */}
        <div>
          <img
            src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Restaurant interior"
            loading="lazy"
            className="rounded-lg h-[400px] w-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="font-display italic text-3xl md:text-4xl mb-6">
            {t('about.title')}
          </h2>
          <p className="text-text-muted leading-relaxed">
            {t('about.body')}
          </p>
        </div>
      </div>
    </section>
  );
}
