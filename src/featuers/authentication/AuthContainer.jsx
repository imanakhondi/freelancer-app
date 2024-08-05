import { useEffect, useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOTPForm from "./CheckOTPForm";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import { useForm } from "react-hook-form";
import useUser from "./useUser";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit, getValues } = useForm();
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/", { replace: true });
  }, [user, navigate]);

  const sendOtpHadler = async (data) => {
    try {
      const { message } = await mutateAsync(data);
      setStep(2);
      toast.success(message);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const {
    isPending: isSendingOtp,
    mutateAsync,
    data: otpResponse,
  } = useMutation({
    mutationFn: getOtp,
  });

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            isPending={isSendingOtp}
            onSubmit={handleSubmit(sendOtpHadler)}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            otpResponse={otpResponse}
            onBack={() => setStep(1)}
            phoneNumber={getValues("phoneNumber")}
            onResendOtp={sendOtpHadler}
          />
        );
      default:
        return null;
    }
  };

  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
