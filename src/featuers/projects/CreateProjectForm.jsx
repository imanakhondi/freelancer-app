import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../ui/RHFSelect";
import { TagsInput } from "react-tag-input-component";
import { useState } from "react";
import DatePickerField from "../../ui/DatePickerField";
import useGategories from "../../hooks/useCategories";
import useCreateProject from "./useCreateProject";
import Loading from "../../ui/Loading";
import Button from "../../ui/Button";
import useEditProject from "./useEditProject";

function CreateProjectForm({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const isEditSession = Boolean(editId);

  const {
    title,
    description,
    tags: prevTags,
    category,
    budget,
    deadline,
  } = projectToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      category: category._id,
      budget,
    };
  }

  const [tags, setTags] = useState(prevTags || []);
  const [date, setDate] = useState(new Date(deadline || ""));
  const { categories } = useGategories();
  const { createProject, isCreating } = useCreateProject();
  const { editProject } = useEditProject();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: editValues });

  const onSubmit = async (data) => {
    const newProject = {
      ...data,
      deadline: new Date(date).toISOString(),
      tags,
    };

    if (isEditSession) {
      editProject(
        { id: projectToEdit._id, newProject },
        {
          onSuccess: () => {
            onClose();
          },
        }
      );
    } else {
      createProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <div>
      <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="عنوان پروژه"
          name="title"
          register={register}
          required
          validationSchema={{
            required: "عنوان ضروری است",
            minLength: {
              value: 8,
              message: "طول عنوان نامعتبر است",
            },
          }}
          errors={errors}
        />
        <TextField
          label="توضیحات"
          name="description"
          register={register}
          required
          validationSchema={{
            required: "توضیحات ضروری است",
            minLength: {
              value: 8,
              message: "طول توضیحات نامعتبر است",
            },
          }}
          errors={errors}
        />
        <TextField
          label="بودجه"
          name="budget"
          register={register}
          required
          validationSchema={{
            required: "بودجه ضروری است",
            minLength: {
              value: 8,
              message: "طول بودجه نامعتبر است",
            },
          }}
          errors={errors}
        />
        <RHFSelect
          label="دسته بندی"
          required
          name="category"
          register={register}
          errors={errors}
          options={categories}
        />
        <div>
          <label className="mb-2 block text-secondary-700">تگ</label>
          <TagsInput value={tags} onChange={setTags} />
        </div>

        <DatePickerField date={date} setDate={setDate} label="ددلاین پروژه" />

        {/* <button className="btn btn--primary w-full">تائید</button> */}
        {isCreating ? <Loading /> : <Button> تائید</Button>}
      </form>
    </div>
  );
}

export default CreateProjectForm;
