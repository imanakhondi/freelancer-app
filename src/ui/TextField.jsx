function TextField({
  label,
  name,
  type = "text",
  register,
  errors,
  validationSchema = {},
  required,
}) {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        className="textField__input"
        type={type}
        id={name}
        autoComplete="off"
        {...register(name, validationSchema)}
      />
      {errors && errors[name] && (
        <span className="text-error block mt-2 text-sm">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
