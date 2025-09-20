import AdminSidebar from "@/app/componnent/deshboard/AdminSidebar";
import Header from "../../../componnent/deshboard/Header";

export default function SiteLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="pt-[100px] grid grid-cols-14 gap-5">
        <div className="col-span-14 lg:col-span-3 sticky top-0 lg:top-28 w-full">
          <AdminSidebar />
        </div>
        <div className="col-span-14 lg:col-span-11 w-full pt-12 pr-10 h-fit pb-12">
          {children}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
