import { Route, Routes } from 'react-router-dom';
import { Home } from './home';
import { Main } from './main';
import { Lesson } from './lesson';

const routes = [{ path: '/', Page: Home },{ path: '/main', Page: Main },{ path: '/lesson', Page: Lesson}];

function Routing() {
    const getRoutes = () => routes.map(({ path, Page }) => <Route key={path} path={path} element={<Page />} />);

    return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
