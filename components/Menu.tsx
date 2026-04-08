'use client';
import { useState } from 'react';
import { useOrder } from './OrderProvider';

type MenuItem = {
  id: string;
  num: string;
  name: string;
  description: string;
  priceRestaurant: number;
  priceTakeaway: number | null;
};

type Category = {
  id: string;
  name: string;
  items: MenuItem[];
};

type Section = {
  id: string;
  name: string;
  categories: Category[];
};

type MenuDict = {
  title: string;
  priceRestaurant: string;
  priceTraiteur: string;
  addButton?: string;
};

interface MenuProps {
  sections: Section[];
  dict: MenuDict;
}

export default function Menu({ sections, dict }: MenuProps) {
  const { addItem } = useOrder();
  const [activeSectionId, setActiveSectionId] = useState(sections[0]?.id || '');
  const activeSection = sections.find(s => s.id === activeSectionId);
  const [activeCategoryId, setActiveCategoryId] = useState(activeSection?.categories[0]?.id || '');

  function switchSection(sectionId: string) {
    setActiveSectionId(sectionId);
    const section = sections.find(s => s.id === sectionId);
    if (section?.categories[0]) {
      setActiveCategoryId(section.categories[0].id);
    }
  }

  const activeCategory = activeSection?.categories.find(c => c.id === activeCategoryId);

  function handleAdd(item: MenuItem) {
    if (!item.priceTakeaway) return;
    addItem({
      id: item.id,
      name: item.name,
      desc: item.description,
      price: item.priceTakeaway,
    });
  }

  return (
    <section id="menu" className="py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-display italic text-3xl md:text-4xl text-center mb-10">
          {dict.title}
        </h2>

        {/* Section toggle (Thai / Viet) */}
        {sections.length > 1 && (
          <div className="flex justify-center gap-4 mb-8">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => switchSection(section.id)}
                className={`px-6 py-2 text-sm uppercase tracking-wider border transition-colors ${
                  activeSectionId === section.id
                    ? 'border-accent bg-accent text-bg font-medium'
                    : 'border-border text-text-muted hover:text-text hover:border-text'
                }`}
              >
                {section.name}
              </button>
            ))}
          </div>
        )}

        {/* Category tabs */}
        {activeSection && activeSection.categories.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {activeSection.categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-full transition-colors ${
                  activeCategoryId === cat.id
                    ? 'bg-accent/15 text-accent font-medium'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Items table */}
        {activeCategory && activeCategory.items.length > 0 && (
          <div className="max-w-[800px] mx-auto">
            {/* Column headers */}
            <div className="flex items-center text-xs uppercase tracking-wider text-text-muted border-b border-border pb-2 mb-4">
              <span className="w-10">#</span>
              <span className="flex-1">Plat</span>
              <span className="w-16 text-center">{dict.priceRestaurant}</span>
              <span className="w-16 text-center">{dict.priceTraiteur}</span>
              <span className="w-10" />
            </div>

            {activeCategory.items.map(item => (
              <div key={item.id} className="flex items-center py-3 border-b border-border/50 group">
                <span className="w-10 text-text-muted text-sm">{item.num}</span>
                <div className="flex-1 min-w-0 pr-4">
                  <span className="text-sm font-medium">{item.name}</span>
                  {item.description && (
                    <span className="text-text-muted text-xs ml-2">{item.description}</span>
                  )}
                </div>
                <span className="w-16 text-center text-sm">{item.priceRestaurant.toFixed(2)}</span>
                <span className="w-16 text-center text-sm text-text-muted">
                  {item.priceTakeaway ? item.priceTakeaway.toFixed(2) : '\u2014'}
                </span>
                <span className="w-10 flex justify-center">
                  {item.priceTakeaway && (
                    <button
                      onClick={() => handleAdd(item)}
                      className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm hover:bg-accent hover:text-bg transition-colors opacity-0 group-hover:opacity-100"
                      aria-label={`Add ${item.name}`}
                    >
                      +
                    </button>
                  )}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {activeCategory && activeCategory.items.length === 0 && (
          <p className="text-center text-text-muted py-12">--</p>
        )}
      </div>
    </section>
  );
}
