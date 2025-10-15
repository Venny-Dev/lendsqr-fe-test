import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.scss";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function AppLayout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Sidebar />
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
