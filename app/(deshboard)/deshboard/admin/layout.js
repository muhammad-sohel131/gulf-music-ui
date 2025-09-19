import ArtistsSidebar from "../../../componnent/deshboard/ArtistsSidebar";
import Header from "../../../componnent/deshboard/Header";
import Footer from "../../../componnent/site/Footer";

export default function SiteLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="pt-[100px] grid grid-cols-12 gap-5">
        <div className="col-span-3 relative w-full">
          <ArtistsSidebar />
        </div>
        <div className="col-span-8 pt-12">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
