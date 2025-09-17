import Calendar from "../componnent/Calender";
import CastsSection from "../componnent/site/Casts";
import ContactForm from "../componnent/site/ContactForm";
import HeroSection from "../componnent/site/Hero";
import MerchSection from "../componnent/site/Merch";
import WavesSection from "../componnent/site/Waves";


export default function Home() {
  return (
    <main className="h-fit">

      <HeroSection />
      <Calendar />
      <MerchSection />
      <CastsSection />
      <WavesSection />
      <ContactForm />
    </main>
  );
}
