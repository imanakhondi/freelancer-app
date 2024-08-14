import { useContext } from "react";
import { MobileMenuContext } from "../context/MobileMenuContext";

export function useMobileMenu() {
  const context = useContext(MobileMenuContext);

  if (context === undefined)
    throw new Error("useMobileMenu must be used within a MobileMenuProvider");

  return context;
}
