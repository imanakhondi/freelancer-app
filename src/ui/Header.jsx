import useUser from "../featuers/authentication/useUser";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../featuers/authentication/UserAvatar";
import useOutsideClick from "../hooks/useOutsideClick";
import { BiMenu } from "react-icons/bi";
import { useMobileMenu } from "../hooks/useMobileMenu";

function Header() {
  const { isLoading } = useUser();
  const { toggleMenu, closeMenu } = useMobileMenu();

  const ref = useOutsideClick(closeMenu);
  return (
    <div className="bg-secondary-0 py-4 border-b border-secondary-200 flex">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-between md:justify-end px-8 gap-x-8 ${
          isLoading ? "blur-sm opacity-50" : ""
        }`}
        ref={ref}
      >
        <div onClick={toggleMenu} className="block md:hidden">
          <BiMenu className="w-5 h-5 text-primary-900" />
        </div>
        <div className="flex gap-x-8">
          <UserAvatar />
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
