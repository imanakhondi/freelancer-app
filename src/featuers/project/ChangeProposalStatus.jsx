import { useForm } from "react-hook-form";
import RHFSelect from "../../ui/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../ui/Loading";

const options = [
  {
    label: "رد شده",
    value: 0,
  },
  {
    label: "در انتظار تائید",
    value: 1,
  },
  {
    label: "تائید شده",
    value: 2,
  },
];

function ChangeProposalStatus({ proposalId, onClose }) {
  const { id: projectId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { changeProposalStatus, isUpdating } = useChangeProposalStatus();
  const queryClient = useQueryClient();

  const changeStatusHandler = (data) => {
    changeProposalStatus(
      { proposalId, projectId, ...data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({
            queryKey: ["project", projectId],
          });
        },
      }
    );
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(changeStatusHandler)}>
        <RHFSelect
          label="تغییر وضعیت "
          name="status"
          register={register}
          required
          errors={errors}
          options={options}
          validationSchema
        />
        {isUpdating ? (
          <Loading />
        ) : (
          <button type="submit" className="btn btn--primary w-full">
            تائید
          </button>
        )}
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
