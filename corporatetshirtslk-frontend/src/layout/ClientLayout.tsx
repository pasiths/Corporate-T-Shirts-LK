import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import bgImg from '@/assets/img/bg-img.svg';

const ClientLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImg})` }}>
            <NavBar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default ClientLayout;