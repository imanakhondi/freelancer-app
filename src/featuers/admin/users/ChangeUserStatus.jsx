import { useForm } from "react-hook-form";
import Loading from "../../../ui/Loading";
import RHFSelect from "../../../ui/RHFSelect";
import useChangeUserStatus from "./useChangeUserStatus";
import { useQueryClient } from "@tanstack/react-query";

const userStatus = [
  {
    value: 0,
    label: "رد شده",
    className: "badge--danger",
  },
  {
    value: 1,
    label: "در انتظار تائید",
    className: "badge--secondary",
  },
  {
    value: 2,
    label: "تائید شده",
    className: "badge--success",
  },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, formState: errors, handleSubmit } = useForm();
  const { changeUserStatus, isUpdating } = useChangeUserStatus();
  const queryClient = useQueryClient();

  const handelChangeStatus = (value) => {
    changeUserStatus(
      { data: value, userId },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["users"],
          });
        },
      }
    );
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(handelChangeStatus)}>
      <RHFSelect
        label="تغییر وضعیت کاربر"
        name="status"
        register={register}
        required
        errors={errors}
        options={userStatus}
      />
      {isUpdating ? (
        <Loading />
      ) : (
        <button type="submit" className="btn btn--primary w-full">
          تائید
        </button>
      )}
    </form>
  );
}

export default ChangeUserStatus;
