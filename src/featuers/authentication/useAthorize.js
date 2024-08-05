import { useLocation } from "react-router-dom";
import useUser from "./useUser";

export default function useAthorize() {
  const { user, isLoading } = useUser();
  const { pathname } = useLocation();

  let isAthenticated = false;
  let isAthorized = false;
  let isVerified = false;

  if (user) isAthenticated = true;
  if (user && Number(user.status) === 2) isVerified = true;

  const ROLES = {
    admin: "ADMIN",
    owner: "OWNER",
    freelancer: "FREELANCER",
  };

  const desiredRole = pathname.split("/").at(1);

  if (Object.keys(ROLES).includes(desiredRole)) {
    if (user && user.role === ROLES[desiredRole]) isAthorized = true;
  }

  return { isAthenticated, isAthorized, isLoading, user, isVerified };
}
