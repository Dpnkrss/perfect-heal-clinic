import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Routers from '../routes/Routers';
import { Toaster } from 'react-hot-toast';
const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
        <Toaster />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
