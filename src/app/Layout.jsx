import { Outlet } from 'react-router-dom'
import Navbar from '../components/All/Navbar';
import Footer from '../components/All/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;