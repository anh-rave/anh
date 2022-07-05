import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './global_style.css'
import Easter from './pages/easter/easter'
import Homepage from './pages/homepage/homepage'

const routes = {
    homepage: () => '/',
    easter: () => '/easter',
}

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={routes.homepage()} element={<Homepage />} />
                <Route path={routes.easter()} element={<Easter />} />
            </Routes>
        </Router>
    )
}

export default AppRouter
