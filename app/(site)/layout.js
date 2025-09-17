import Footer from "../componnent/site/Footer";
import Header from "../componnent/site/Header";

export default function SiteLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
