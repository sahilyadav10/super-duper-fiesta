type Props = {
  children: JSX.Element;
};

export default function LayoutCenter({ children }: Props) {
  return (
    <section className="p-5 text-center bg-white rounded-md shadow-md w-full">
      {children}
    </section>
  );
}
