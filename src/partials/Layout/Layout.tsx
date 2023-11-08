import { Outlet } from "react-router-dom";
import "./layout.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div className="app-layout">
      <div className="app-layout__header">
        <Header />
      </div>
      <div className="app-layout__main">
        <Outlet />
      </div>
      <div className="app-layout__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
