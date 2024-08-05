import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { checkOtp } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import Loading from "../../ui/Loading";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";

const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const navigate = useNavigate();

  const checkOtpHadler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);

      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تائید می باشد!", {
          icon: "👏",
        });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>

      {otpResponse && (
        <p className="flex items-center gap-x-4 my-4">
          <span>{otpResponse?.message}</span>
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-primary-900" />
          </button>
        </p>
      )}

      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد </p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد تائید</button>
        )}
      </div>
      <form className="space-y-8" onSubmit={checkOtpHadler}>
        <p className="font-bold text-secondary-800">
          کد تائید را وارد نمائید...
        </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 items-center"
          inputStyle={{
            width: "2.5rem",
            padding: "0.5rem 0.2rem",
            border: "1px solid rgb(var(--color-primary-400))",
            borderRadius: "0.5rem",
          }}
        />
        {isPending ? <Loading /> : <Button> تائید</Button>}
      </form>
    </div>
  );
}

export default CheckOTPForm;
