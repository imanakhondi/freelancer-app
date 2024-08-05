import { useNavigate } from "react-router-dom";
import useAthorize from "../featuers/authentication/useAthorize";
import { useEffect } from "react";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { isAthorized, isAthenticated, isLoading, isVerified } = useAthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAthenticated && !isLoading) navigate("/auth");
    if (!isVerified && !isLoading) {
      toast.error("پروفایل شما هنوز تائید نشده است");
      navigate("/");
    }
    if (!isAthorized && !isLoading) navigate("/not-access");
  }, [isAthenticated, isAthorized, isLoading, navigate, isVerified]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-100">
        <Loading />
      </div>
    );

  if (isAthenticated && isAthorized) return <div>{children}</div>;
}

export default ProtectedRoute;
