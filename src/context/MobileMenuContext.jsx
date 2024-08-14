import { createContext, useState } from "react";

export const MobileMenuContext = createContext();

export function MobileMenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);
  return (
    <MobileMenuContext.Provider value={{ toggleMenu, closeMenu, isMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}
