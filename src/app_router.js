import { BrowserRouter as HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './global_style.css'
import Easter from './pages/easter/easter'
import Event from './pages/event/event'
import Homepage from './pages/homepage/homepage'

export const routes = {
    root: '/',
    homepage: '/anh',
    easter: '/easter',
    event: '/event',
}

const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path={routes.root} element={<Navigate to={routes.homepage} />} />
                <Route path={routes.homepage} element={<Homepage />} />
                <Route path={routes.easter} element={<Easter />} />
                <Route path={routes.event} element={<Event />} />
            </Routes>
        </HashRouter>
    )
}

export default AppRouter
