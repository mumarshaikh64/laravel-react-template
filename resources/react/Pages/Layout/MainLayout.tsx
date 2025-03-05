import Footer from '@/Components/Footer/Footer'
import Header from '@/Components/Header/Header'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
           
            <Header />
            <ScrollToTop />
            <Outlet />
            <Footer />
        </>
    )
}



const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Default: Scrolls to top
    }, [pathname]); // Runs when the route changes

    return null;
};
export default MainLayout