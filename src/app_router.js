import { BrowserRouter as HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './global_style.css'
import Easter from './pages/easter/easter'
import Event from './pages/event/event'
import Homepage from './pages/homepage/homepage'
import WildForestPromo from './pages/new_homepage/wild_forest_promo'
import Where from './pages/where/where'

export const routes = {
    root: '/',
    homepage: '/anh',
    easter: '/easter',
    event: '/event',
    where: '/where',
    oldHomepage: '/oldHomepage',
}

const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path={routes.root} element={<Navigate to={routes.homepage} />} />
                <Route path={routes.oldHomepage} element={<Homepage />} />
                <Route path={routes.easter} element={<Easter />} />
                <Route path={routes.event} element={<Event />} />
                <Route path={routes.homepage} element={<WildForestPromo />} />
                <Route path={routes.where} element={<Where />} />
            </Routes>
        </HashRouter>
    )
}

export default AppRouter
