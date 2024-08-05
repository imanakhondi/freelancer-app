import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../hooks/useDarkMode";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMod } = useDarkMode();

  return (
    <button onClick={toggleDarkMod}>
      {isDarkMode ? (
        <HiOutlineSun className="w-5 h-5 text-primary-900" />
      ) : (
        <HiOutlineMoon className="w-5 h-5 text-primary-900" />
      )}
    </button>
  );
}

export default DarkModeToggle;
