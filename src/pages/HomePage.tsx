import { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { WhyGermany } from '../components/sections/WhyGermany';
import { Services } from '../components/sections/Services';
import { BillalMahmud } from '../components/sections/BillalMahmud';
import { Process } from '../components/sections/Process';
import { Universities } from '../components/sections/Universities';
import { Countries } from '../components/sections/Countries';
import { SuccessStories } from '../components/sections/SuccessStories';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Blog } from '../components/sections/Blog';
import { Faq } from '../components/sections/Faq';
import { Contact } from '../components/sections/Contact';
import { Newsletter } from '../components/sections/Newsletter';
import { UniversityTicker } from '../components/layout/UniversityTicker';

export default function HomePage() {
  useEffect(() => {
    document.title = 'StudyingGermany.de';
  }, []);

  return (
    <main>
      <Hero />
      <UniversityTicker />
      <WhyGermany />
      <Services />
      <BillalMahmud />
      <Process />
      <Universities />
      <Countries />
      <SuccessStories />
      <WhyChooseUs />
      <Blog />
      <Faq />
      <section className="py-12">
        <div className="container-page">
          <Newsletter />
        </div>
      </section>
      <Contact />
    </main>
  );
}
