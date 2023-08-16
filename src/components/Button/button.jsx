const Button = ({ url, title }) => {
  return (
    <button className="cursor-pointer bg-button-bg text-button-text px-2 py-4 rounded-md border-none max-w-max text-sm">
      {title}
    </button>
  );
};

export default Button;
