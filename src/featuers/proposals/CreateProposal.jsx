import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import useCreateProposal from "./useCreateProposal";

function CreateProposal({ onClose, projectId }) {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm();

  const { isCreating, createProposal } = useCreateProposal();

  const requestHandel = (data) => {
    const newProposal = { ...data, projectId };
    createProposal(newProposal, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(requestHandel)}>
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          errors={errors}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 10,
              message: "حداقل 10 کاراکتر وارد کنید",
            },
          }}
        />
        <TextField
          label="قیمت"
          name="price"
          type="number"
          register={register}
          errors={errors}
          required
          validationSchema={{
            required: "قیمت ضروری است",
          }}
        />
        <TextField
          label="مدت زمان"
          name="duration"
          type="number"
          register={register}
          errors={errors}
          required
          validationSchema={{
            required: "مدت زمان ضروری است",
          }}
        />
        {isCreating ? (
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

export default CreateProposal;
