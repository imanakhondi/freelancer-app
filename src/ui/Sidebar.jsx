import { useEffect } from "react";
import { useMobileMenu } from "../hooks/useMobileMenu";

function Sidebar({ children }) {
  const { closeMenu, isMenuOpen } = useMobileMenu();
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [closeMenu]);

  return (
    <div
      className={`hidden md:block bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4 ${
        isMenuOpen ? "!block absolute right-0 left-0 top-14 z-50" : ""
      }`}
    >
      <ul className="flex flex-col gap-y-4">{children}</ul>
    </div>
  );
}

export default Sidebar;
