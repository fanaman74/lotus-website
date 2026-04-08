import { getDictionary } from '@/lib/i18n/server';
import { getMenuData, getFeaturedDishes } from '@/lib/menu';
import type { Locale } from '@/lib/i18n/config';
import ScrollReveal from '@/components/ScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedDishes from '@/components/FeaturedDishes';
import Menu from '@/components/Menu';
import Events from '@/components/Events';
import FindUs from '@/components/FindUs';
import Reservation from '@/components/Reservation';
import Footer from '@/components/Footer';
import TakeawayPanel from '@/components/TakeawayPanel';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const menuData = await getMenuData(locale);
  const featured = await getFeaturedDishes(locale);

  return (
    <>
      <Navbar locale={locale} dict={{ nav: dict.nav }} />
      <Hero dict={dict.hero} />
      <ScrollReveal><About dict={dict.about} /></ScrollReveal>
      <ScrollReveal><FeaturedDishes dict={dict.featured} dishes={featured} /></ScrollReveal>
      <Menu sections={menuData} dict={dict.menu} />
      <ScrollReveal><Events dict={dict.events} /></ScrollReveal>
      <ScrollReveal><FindUs dict={dict.findUs} /></ScrollReveal>
      <Reservation dict={dict.reservation} locale={locale} />
      <Footer dict={{ nav: dict.nav, findUs: dict.findUs, footer: dict.footer }} />
      <TakeawayPanel dict={dict.order} />
    </>
  );
}
