const Button = ({ name, className = "", type = "button", onClick, ...props }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md cursor-pointer  text-lg text-white transition duration-300 ${className}`}
      {...props}
    >
      {name}
    </button>
  );
};

export default Button;
