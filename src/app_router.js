import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';

const routes = {
    homepage: () => '/'
};

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={routes.homepage()} element={<Homepage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
