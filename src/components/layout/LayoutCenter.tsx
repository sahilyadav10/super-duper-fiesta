type Props = {
  children: JSX.Element;
};

export default function LayoutCenter({ children }: Props) {
  return (
    <section className="bg-black min-h-screen flex flex-col items-center justify-center">
      {children}
    </section>
  );
}
