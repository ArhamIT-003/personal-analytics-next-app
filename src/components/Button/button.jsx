const Button = ({ url, title }) => {
  return (
    <button className="cursor-pointer bg-button-bg text-button-text px-3 py-1 rounded-md border-none max-w-max">
      {title}
    </button>
  );
};

export default Button;
