type Props = {
  type: "button" | "submit" | "reset" | undefined;
  label: string;
};

export default function PrimaryButton({ type, label }: Props) {
  return (
    <button
      type={type}
      className="w-full px-4 py-2 text-lg font-bold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
    >
      {label}
    </button>
  );
}
