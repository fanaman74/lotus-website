'use client';
import { useState } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

type Locale = 'fr' | 'nl' | 'en';

const EVENT_TYPES = ['birthday', 'corporate', 'wedding', 'family', 'catering', 'other'] as const;

export default function EventContactPage() {
  const { locale, dict } = useLanguage();
  const t = (dict as any).eventContact as Record<string, any>;

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    event_type: 'other',
    event_date: '',
    guests: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  function set(key: string, val: string) {
    setForm(f => ({ ...f, [key]: val }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    try {
      const res = await fetch('/api/event-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
      } else {
        setError(data.error || 'Error');
        setStatus('error');
      }
    } catch {
      setError('Network error');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-[72px] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-display italic text-3xl mb-4">{t?.successTitle}</h1>
            <p className="text-text-muted leading-relaxed mb-8">{t?.successBody}</p>
            <Link href="/" className="inline-block border border-accent text-accent px-8 py-3 text-sm uppercase tracking-wider hover:bg-accent hover:text-bg transition-colors">
              {t?.backHome}
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[72px]">
        {/* Header — matches Events section style */}
        <div
          className="relative py-32 px-6 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}
        >
          <div className="absolute inset-0 bg-bg/80" />
          <div className="relative z-10 text-center max-w-[600px] mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">{t?.subtitle}</p>
            <h1 className="font-display italic text-4xl md:text-5xl">{t?.title}</h1>
          </div>
        </div>

        {/* Form */}
        <div className="py-20 px-6 max-w-[640px] mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Name row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">{t?.firstName} *</label>
                <input
                  type="text"
                  required
                  value={form.first_name}
                  onChange={e => set('first_name', e.target.value)}
                  className="w-full bg-transparent border border-border rounded-sm px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">{t?.lastName} *</label>
                <input
                  type="text"
                  required
                  value={form.last_name}
                  onChange={e => set('last_name', e.target.value)}
                  className="w-full bg-transparent border border-border rounded-sm px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">{t?.email} *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => set('email', e.target.value)}
                  className="w-full bg-transparent border border-border rounded-sm px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">{t?.phone}</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => set('phone', e.target.value)}
                  placeholder="+32 …"
                  className="w-full bg-transparent border border-border rounded-sm px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            {/* Event type */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">{t?.eventType} *</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {EVENT_TYPES.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => set('event_type', type)}
                    className={`px-3 py-2.5 text-xs uppercase tracking-wider border rounded-sm transition-colors text-left ${
                      form.event_type === type
                        ? 'border-accent bg-accent/10 text-accent'
                        : 'border-border text-text-muted hover:border-accent/50 hover:text-text'
                    }`}
                  >
                    {t?.eventTypes?.[type]}
                  </button>
                ))}
              </div>
            </div>

            {/* Date + Guests */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">{t?.eventDate}</label>
                <input
                  type="date"
                  value={form.event_date}
                  onChange={e => set('event_date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full bg-transparent border border-border rounded-sm px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">{t?.guests}</label>
                <input
                  type="number"
                  min={1}
                  max={500}
                  value={form.guests}
                  onChange={e => set('guests', e.target.value)}
                  placeholder="10"
                  className="w-full bg-transparent border border-border rounded-sm px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-text-muted mb-2">{t?.message}</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={e => set('message', e.target.value)}
                className="w-full bg-transparent border border-border rounded-sm px-4 py-3 text-text focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            {/* Error */}
            {status === 'error' && (
              <div className="bg-red-900/30 border border-red-500/40 text-red-300 px-4 py-3 rounded-sm text-sm">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full border border-accent text-accent py-4 text-sm uppercase tracking-widest hover:bg-accent hover:text-bg transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? t?.submitting : t?.submit}
            </button>
          </form>
        </div>
      </main>
      <Footer dict={{ nav: dict.nav, findUs: dict.findUs, footer: dict.footer }} />
    </>
  );
}
