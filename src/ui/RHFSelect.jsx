function RHFSelect({
  label,
  name,
  options,
  register,
  required,
  errors,
  validationSchema = {},
}) {
  return (
    <div>
      <label htmlFor="category" className="block mb-2 text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select
        id={name}
        {...register(name, validationSchema)}
        // className="w-full border border-gray-200 py-3 px-4 rounded-xl "
        className="textField__input"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors && errors[name] && (
        <span className="text-error block mt-2 text-sm">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default RHFSelect;
