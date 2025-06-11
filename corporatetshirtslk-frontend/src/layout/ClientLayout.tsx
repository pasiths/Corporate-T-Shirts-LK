import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ClientLayout = () => {
    return (<div className="min-h-screen">
        <NavBar />
        <main className="">
            <Outlet />
        </main>
        <Footer />
    </div>);
}

export default ClientLayout;