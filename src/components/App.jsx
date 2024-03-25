import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import FeatureHome from './features/home/FeatureHome'

import AppLayout from './layouts/AppLayout'

export default function App() {
    return (
        <div className="app-root">
            <BrowserRouter>
            <Routes>
                <Route path="app" element={ <AppLayout/> }>
                    <Route
                        path=""
                        element={<Navigate replace to="/app/home" />}
                    />
                    <Route path="home" element={ <FeatureHome/> } />
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}