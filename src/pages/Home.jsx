import { useNavigate } from "react-router-dom";
import useAthorize from "../featuers/authentication/useAthorize";

function Home() {
  const navigate = useNavigate();
  const { user } = useAthorize();

  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl flex flex-col items-center justify-center min-h-screen">
        {user ? (
          <button
            className=" btn btn--primary"
            onClick={() => navigate(`/${user.role.toLowerCase()}`)}
          >
            جهت ورود به داشبورد کلیک کنید
          </button>
        ) : (
          <button
            className=" btn btn--primary"
            onClick={() => navigate("/auth")}
          >
            جهت ورود کلیک کنید
          </button>
        )}
      </div>
    </div>
  );
}

export default Home;
