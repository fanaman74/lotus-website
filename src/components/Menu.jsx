import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useOrder } from '../context/OrderContext';
import { menuCategories, menuItems } from '../data/menuData';

export default function Menu() {
  const { t } = useTranslation();
  const { ref, className } = useScrollReveal();
  const { addItem } = useOrder();
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const filtered = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 bg-bg-alt">
      <div ref={ref} className={`max-w-[700px] mx-auto ${className}`}>
        <h2 className="font-display italic text-3xl md:text-4xl text-center mb-10">
          {t('menu.title')}
        </h2>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-sm uppercase tracking-wider rounded-full transition-colors ${
                activeCategory === cat.id
                  ? 'bg-accent text-bg'
                  : 'border border-border text-text-muted hover:text-text'
              }`}
            >
              {t(cat.nameKey)}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="flex flex-col gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between gap-4 pb-6 border-b border-border last:border-b-0"
            >
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg">{t(item.nameKey)}</h3>
                  <span className="text-accent font-display text-lg shrink-0">
                    {item.price}€
                  </span>
                </div>
                <p className="text-text-muted text-sm mt-1">{t(item.descKey)}</p>
              </div>

              <button
                onClick={() => addItem(item)}
                className="shrink-0 border border-accent-alt text-accent-alt px-3 py-1 text-sm rounded hover:bg-accent-alt hover:text-bg transition-colors"
              >
                {t('menu.addButton')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
