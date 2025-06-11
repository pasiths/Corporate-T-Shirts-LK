import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ClientLayout = () => {
    return (<div className="min-h-screen">
        <main className="">
            <NavBar/>
            <Outlet />
            <Footer />
        </main>
    </div>);
}

export default ClientLayout;