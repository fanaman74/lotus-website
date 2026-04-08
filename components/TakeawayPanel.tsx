'use client';
import { useState } from 'react';
import { useOrder } from './OrderProvider';

type OrderDict = {
  title: string;
  close: string;
  total: string;
  emailOrder: string;
  reserveOrder: string;
  empty: string;
};

interface TakeawayPanelProps {
  dict: OrderDict;
}

export default function TakeawayPanel({ dict }: TakeawayPanelProps) {
  const { items, updateQuantity, removeItem, clearOrder, total } = useOrder();
  const [open, setOpen] = useState(false);

  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  async function handleEmailOrder() {
    const lines = items.map(i => `${i.quantity}x ${i.name} - ${(i.price * i.quantity).toFixed(2)}E`).join('\n');
    const body = `${lines}\n\nTotal: ${total.toFixed(2)}E`;

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, total }),
      });
      if (!res.ok) throw new Error('API error');
      clearOrder();
      setOpen(false);
    } catch {
      const subject = encodeURIComponent('Commande Traiteur Lotus');
      const mailBody = encodeURIComponent(body);
      window.open(`mailto:info@lotus-laeken.be?subject=${subject}&body=${mailBody}`, '_blank');
    }
  }

  function handleReserveOrder() {
    setOpen(false);
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  if (count === 0 && !open) return null;

  return (
    <>
      {/* Floating cart badge */}
      {!open && count > 0 && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-bg flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          aria-label="Open cart"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-bg text-accent text-xs font-medium flex items-center justify-center">
            {count}
          </span>
        </button>
      )}

      {/* Slide-in panel */}
      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)} />

          {/* Panel */}
          <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[400px] bg-bg border-l border-border flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="font-display text-xl italic">{dict.title}</h3>
              <button onClick={() => setOpen(false)} className="text-text-muted hover:text-text transition-colors text-sm">
                {dict.close}
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <p className="text-text-muted text-center py-12">{dict.empty}</p>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        {item.desc && <p className="text-xs text-text-muted truncate">{item.desc}</p>}
                        <p className="text-sm text-accent mt-1">{(item.price * item.quantity).toFixed(2)}&euro;</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full border border-border text-text-muted hover:border-accent hover:text-accent transition-colors flex items-center justify-center text-xs"
                        >
                          &minus;
                        </button>
                        <span className="text-sm w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full border border-border text-text-muted hover:border-accent hover:text-accent transition-colors flex items-center justify-center text-xs"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-1 text-text-muted hover:text-red-400 transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm uppercase tracking-wider text-text-muted">{dict.total}</span>
                  <span className="font-display text-xl text-accent">{total.toFixed(2)}&euro;</span>
                </div>
                <button
                  onClick={handleEmailOrder}
                  className="w-full py-3 text-sm uppercase tracking-wider bg-accent text-bg hover:bg-accent/90 transition-colors"
                >
                  {dict.emailOrder}
                </button>
                <button
                  onClick={handleReserveOrder}
                  className="w-full py-3 text-sm uppercase tracking-wider border border-border text-text-muted hover:border-text hover:text-text transition-colors"
                >
                  {dict.reserveOrder}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
