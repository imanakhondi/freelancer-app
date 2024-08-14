import { Outlet } from "react-router-dom";
import Header from "./Header";
import { MobileMenuProvider } from "../context/MobileMenuContext";

function AppLayout({ children }) {
  return (
    <MobileMenuProvider>
      <div className="h-screen grid grid-rows-[auto,1fr] md:grid-cols-[15rem,1fr]">
        <Header />
        {children}
        <div className="bg-secondary-100 p-8 overflow-y-auto">
          <div className="mx-auto max-w-screen-lg flex flex-col gap-y-12">
            <Outlet />
          </div>
        </div>
      </div>
    </MobileMenuProvider>
  );
}

export default AppLayout;
