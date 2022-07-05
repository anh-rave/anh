import { BrowserRouter as HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './global_style.css'
import Easter from './pages/easter/easter'
import Homepage from './pages/homepage/homepage'

export const routes = {
    root: '/',
    homepage: '/anh',
    easter: '/easter',
}

const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path={routes.root} element={<Navigate to={routes.homepage} />} />
                <Route path={routes.homepage} element={<Homepage />} />
                <Route path={routes.easter} element={<Easter />} />
            </Routes>
        </HashRouter>
    )
}

export default AppRouter
