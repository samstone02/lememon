import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import FeatureHome from '$/components/app/home/FeatureHome'
import AppLayout from '$/components/layouts/AppLayout'
import Dnd from '$/components/proto/Dnd'

export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="proto">
                <Route path="dnd" element={ <Dnd/> }></Route>
            </Route>
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