export type layoutProps = {
  children: React.ReactNode;
  header: React.ReactNode;
};

export default function Layout({ children, header }: layoutProps) {
  return (
    <>
      {header}
      <main>{children}</main>
    </>
  );
}
