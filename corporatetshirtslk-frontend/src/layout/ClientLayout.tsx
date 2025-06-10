import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const ClientLayout = () => {
    return (<div className="min-h-screen">
        <main className="">
            <NavBar/>
            <Outlet />
        </main>
    </div>);
}

export default ClientLayout;