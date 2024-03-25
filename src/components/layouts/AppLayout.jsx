import { Outlet } from "react-router-dom";
import AppNav from "../nav/AppNav";

import '../../styles/app-main.css'

export default function AppLayout() {
    return (
        <div className="app-layout">
            <AppNav/>
            <main className="app-main">
                <Outlet/>
            </main>
        </div>
    )
}