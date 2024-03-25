import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import FeatureHome from './features/home/FeatureHome'

import AppLayout from './layouts/AppLayout'

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="app" element={ <AppLayout/> }>
                <Route
                    path=""
                    element={<Navigate replace to="/app/home" />}
                />
                <Route path="blog" element={ <FeatureHome/> } />
                <Route path="calendar" element={ <FeatureHome/> } />
                <Route path="flashcards" element={ <FeatureHome/> } />
                <Route path="home" element={ <FeatureHome/> } />
                <Route path="notes" element={ <FeatureHome/> } />
                <Route path="to-do" element={ <FeatureHome/> } />
            </Route>
        </Routes>
        </BrowserRouter>
    )
}