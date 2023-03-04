type Props = {
  type: "button" | "submit" | "reset" | undefined;
  label?: string;
  disabled: boolean;
  onClick?: () => void;
  children?: JSX.Element | string;
};

export default function PrimaryButton({
  type,
  label,
  disabled,
  onClick,
  children,
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="w-full px-4 py-2 text-lg font-bold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow enabled:hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4 disabled:opacity-75"
    >
      {children ? children : label}
    </button>
  );
}
