import { Outlet } from 'react-router-dom';
import { FooterComponent } from '../components';

function Dashboard() {
  return (
    <>
      <Outlet />
      <FooterComponent />
    </>
  );
}
export default Dashboard;
