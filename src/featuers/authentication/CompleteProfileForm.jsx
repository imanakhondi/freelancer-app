import Button from "../../ui/Button";
import Loading from "../../ui/Loading";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import RadioInput from "../../ui/RadioInput";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function CompleteProfileForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: completeProfile,
  });

  const completeProfileHandler = async (data) => {
    try {
      const { user, message } = await mutateAsync(data);
      toast.success(message);
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

  return (
    <div className="w-full sm:max-w-sm">
      <form
        className="space-y-8"
        onSubmit={handleSubmit(completeProfileHandler)}
      >
        <TextField
          label="نام و نام خانوادگی"
          name="name"
          register={register}
          validationSchema={{ required: "نام و نام خانوادگی ضروری است" }}
          errors={errors}
        />
        <TextField
          label="ایمیل"
          name="email"
          register={register}
          validationSchema={{
            required: "ایمیل ضروری است",
            pattern: {
              message: "ایمیل نامعتبر است",
              value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
            },
          }}
          errors={errors}
        />
        <div>
          <div className="flex flex-wrap items-center justify-center gap-x-8">
            <RadioInput
              name="role"
              id="OWNER"
              label="کارفرما"
              watch={watch}
              value="OWNER"
              register={register}
              validationSchema={{ required: "انتخاب نقش ضروری است" }}
              errors={errors}
            />
            <RadioInput
              name="role"
              id="FREELANCER"
              label="فریلنسر"
              watch={watch}
              value="FREELANCER"
              register={register}
              validationSchema={{ required: "انتخاب نقش ضروری است" }}
              errors={errors}
            />
          </div>
          {errors && errors["role"] && (
            <span className="text-error block mt-2 text-sm">
              {errors["role"]?.message}
            </span>
          )}
        </div>
        {isPending ? <Loading /> : <Button> تائید</Button>}
      </form>
    </div>
  );
}

export default CompleteProfileForm;
