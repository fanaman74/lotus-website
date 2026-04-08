import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useOrder } from '../context/OrderContext';
import { menuSections } from '../data/menuData';

export default function Menu() {
  const { t } = useTranslation();
  const { ref, className } = useScrollReveal();
  const { addItem } = useOrder();
  const [activeSectionId, setActiveSectionId] = useState(menuSections[0].id);
  const [activeCategoryId, setActiveCategoryId] = useState(menuSections[0].categories[0].id);

  const activeSection = menuSections.find((s) => s.id === activeSectionId);
  const activeCategory = activeSection?.categories.find((c) => c.id === activeCategoryId);

  function handleSectionChange(sectionId) {
    setActiveSectionId(sectionId);
    const section = menuSections.find((s) => s.id === sectionId);
    if (section) {
      setActiveCategoryId(section.categories[0].id);
    }
  }

  function handleAddItem(item) {
    addItem({
      id: item.id,
      name: item.name,
      desc: item.desc,
      price: item.priceTraiteur,
    });
  }

  return (
    <section id="menu" className="py-24 px-6 bg-bg-alt">
      <div ref={ref} className={`max-w-[900px] mx-auto ${className}`}>
        <h2 className="font-display italic text-3xl md:text-4xl text-center mb-10">
          {t('menu.title')}
        </h2>

        {/* Section tabs (Thai / Viet) */}
        <div className="flex justify-center gap-4 mb-6">
          {menuSections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionChange(section.id)}
              className={`px-6 py-2.5 text-sm uppercase tracking-wider rounded-full transition-colors ${
                activeSectionId === section.id
                  ? 'bg-accent text-bg'
                  : 'border border-border text-text-muted hover:text-text'
              }`}
            >
              {section.id === 'thai' ? 'Thailandaises' : 'Vietnamiennes'}
            </button>
          ))}
        </div>

        {/* Category tabs */}
        {activeSection && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {activeSection.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-full transition-colors ${
                  activeCategoryId === cat.id
                    ? 'bg-surface text-text'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Price column headers */}
        <div className="flex items-center justify-end gap-4 mb-4 pr-2 text-xs uppercase tracking-wider text-text-muted">
          <span className="w-14 text-center">Rest.</span>
          <span className="w-14 text-center">Trait.</span>
          <span className="w-20" />
        </div>

        {/* Menu items */}
        {activeCategory && (
          <div className="flex flex-col">
            {activeCategory.items.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-between gap-3 py-4 border-b border-border last:border-b-0"
              >
                {/* Left: number + name + desc */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="text-text-muted text-xs shrink-0 w-6">{item.num}</span>
                    <h3 className="font-display text-lg">{item.name}</h3>
                  </div>
                  {item.desc && (
                    <p className="text-text-muted text-sm mt-0.5 ml-8">{item.desc}</p>
                  )}
                </div>

                {/* Right: prices + add button */}
                <div className="flex items-center gap-4 shrink-0">
                  <span className="w-14 text-center text-accent font-display">
                    {item.priceRestaurant.toFixed(2)}
                  </span>
                  <span className="w-14 text-center text-accent font-display">
                    {item.priceTraiteur !== null ? item.priceTraiteur.toFixed(2) : '\u2014'}
                  </span>
                  <div className="w-20">
                    {item.priceTraiteur !== null ? (
                      <button
                        onClick={() => handleAddItem(item)}
                        className="border border-accent-alt text-accent-alt px-3 py-1 text-xs rounded hover:bg-accent-alt hover:text-bg transition-colors"
                      >
                        + {t('menu.addButton')}
                      </button>
                    ) : (
                      <span />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
