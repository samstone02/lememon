import FeatureHome from './features/home/FeatureHome'

import '../styles/app-main.css'
import { Outlet } from 'react-router-dom'

export default function AppMain() {
    return (
        <main className="app-main">
            <Outlet/>
        </main>
    )
}