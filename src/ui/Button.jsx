function Button({ children }) {
  return (
    <button className="w-full btn btn--primary" type="submit">
      {children}
    </button>
  );
}

export default Button;
