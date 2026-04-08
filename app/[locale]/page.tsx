import { getDictionary } from '@/lib/i18n/server';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'fr' | 'nl' | 'en');

  return (
    <div className="min-h-screen bg-bg text-text font-body flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl text-accent mb-4">LOTUS</h1>
        <p className="text-text-muted">{dict.hero.subtitle}</p>
        <p className="text-accent mt-4">Next.js + Supabase — {locale.toUpperCase()}</p>
      </div>
    </div>
  );
}
