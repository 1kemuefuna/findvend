import { Outlet } from "react-router-dom";
import "./home_layout.scss";
import Footer from "../Footer/Footer";
import Logo from "../../components/Logo/Logo";

const Layout = () => {
  return (
    <div className="app-home-layout">
      <div className="app-home-layout__main">
        <div className="app-home-layout__header">
          <Logo className="app-home-layout__header__logo" />
        </div>
        <div className="app-home-layout__main-inner">
          <Outlet />
        </div>
      </div>
      <div className="app-home-layout__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
