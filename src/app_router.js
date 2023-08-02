import { BrowserRouter as HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import './global_style.css'
import Easter from './pages/easter/easter'
import Event from './pages/event/event'
import Homepage from './pages/homepage/homepage'
import NewHomepage from './pages/new_homepage/new_homepage'
import Profile from './pages/profile/profile'
import Where from './pages/where/where'

export const routes = {
    root: '/',
    homepage: '/anh',
    easter: '/easter',
    event: '/event',
    where: '/where',
    oldHomepage: '/oldHomepage',
    profile: '/profile',
}

const AppRouter = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path={routes.root} element={<Navigate to={routes.homepage} />} />
                <Route path={routes.oldHomepage} element={<Homepage />} />
                <Route path={routes.easter} element={<Easter />} />
                <Route path={routes.event} element={<Event />} />
                <Route path={routes.homepage} element={<NewHomepage />} />
                <Route path={routes.where} element={<Where />} />
                <Route path={routes.profile} element={<Profile />} />
            </Routes>
        </HashRouter>
    )
}

export default AppRouter
