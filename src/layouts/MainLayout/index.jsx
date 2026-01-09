import Navbar from '@components/Navbar/index';
import MobileNavbar from '@components/MobileNavbar/index';
import Footer from '@components/Footer/index';
import { Outlet } from 'react-router-dom';
import classes from '@layouts/MainLayout/style.module.scss';

const MainLayout = () => {
  return (
    <div className={classes.mainLayout}>
      <Navbar />
      <Outlet />
      <Footer />
      <MobileNavbar />
    </div>
  );
};

export default MainLayout;
