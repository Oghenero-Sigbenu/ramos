import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="w-full ">
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
