import { Outlet } from "react-router-dom";
import AppNav from "../nav/AppNav";

export default function AppLayout(props) {
    return (
        <div className="app-root">
            <AppNav/>
            <Outlet/>
        </div>
    )
}