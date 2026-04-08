import { useTranslation } from 'react-i18next';

export default function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-bg text-text font-body p-8">
      <h1 className="text-4xl font-display text-accent mb-4">{t('hero.title')}</h1>
      <p className="text-text-muted mb-4">{t('hero.subtitle')}</p>
      <div className="flex gap-2">
        {['fr', 'nl', 'en'].map((lng) => (
          <button
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            className={`px-3 py-1 text-sm uppercase tracking-wider border ${
              i18n.language === lng ? 'border-accent text-accent' : 'border-border text-text-muted'
            }`}
          >
            {lng}
          </button>
        ))}
      </div>
    </div>
  );
}
