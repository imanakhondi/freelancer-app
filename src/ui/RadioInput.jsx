function RadioInput({
  label,
  name,
  id,
  value,
  register,
  validationSchema,
  watch,
}) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        className="cursor-pointer w-4 h-4 accent-red-500 form-radio text-primary-900 focus:ring-primary-900"
        type="radio"
        name={name}
        id={id}
        value={value}
        {...register(name, validationSchema)}
        checked={watch(name) === value}
        // onChange={onChange}
      />
      <label htmlFor={value}>{label}</label>
    </div>
  );
}

export default RadioInput;
