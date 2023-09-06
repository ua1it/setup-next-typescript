import NavBar from "./Navbar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}