const Button = ({ url, title }) => {
  return (
    <button className="cursor-pointer bg-button-bg text-button-text px-4 py-2 rounded-md border-none max-w-max text-sm">
      {title}
    </button>
  );
};

export default Button;
