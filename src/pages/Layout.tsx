import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Tabs from '../components/Tabs';
const Layout = () => {
  return (
    <>
      <NavBar />
      <section className="flex items-center justify-center mt-20   ">
        <Tabs />
      </section>
      <Outlet />
    </>
  );
};

export default Layout;
