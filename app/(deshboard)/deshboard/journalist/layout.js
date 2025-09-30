import JournalistSidebar from "@/app/componnent/deshboard/JournalistSidebar";
import Header from "../../../componnent/deshboard/Header";

export default function SiteLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="pt-[100px] grid grid-cols-12 gap-5">
        <div className="col-span-3 relative w-full">
          <JournalistSidebar />
        </div>
        <div className="col-span-8 pt-12">
          {children}
        </div>
      </div>
    </div>
  );
}
