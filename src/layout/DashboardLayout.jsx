import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/website/Header";

export default function DashboardLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <Header/>
            <div className="flex-1 p-[1rem] h-screen overflow-auto">
                <Outlet /> 
            </div>
        </div>
    );
}
