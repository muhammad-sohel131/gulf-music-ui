import Calendar from "../componnent/Calender";
import CastsSection from "../componnent/site/Casts";
import ContactForm from "../componnent/site/ContactForm";
import FevArtist from "../componnent/site/FevArtist";
import HeroSection from "../componnent/site/Hero";
import HeroAfter from "../componnent/site/HeroAfter";
import MerchSection from "../componnent/site/Merch";
import WavesFeature from "../componnent/site/Waves";


export default function Home() {
  return (
    <main className="h-fit">

      <HeroSection />
      <HeroAfter />
      <Calendar />
      <MerchSection />
      <CastsSection />
      <FevArtist />
      <WavesFeature />
      <ContactForm />
    </main>
  );
}
