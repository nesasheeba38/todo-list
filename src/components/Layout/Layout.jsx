import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;