import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Chat } from "./chat";
import { Main } from "./main";

const routes = [
  { path: "/", Page: Home },
  { path: "/main", Page: Main },
  { path: "/chat", Page: Chat },
];

function Routing() {
  const getRoutes = () =>
    routes.map(({ path, Page }) => (
      <Route key={path} path={path} element={<Page />} />
    ));

  return <Routes>{getRoutes()}</Routes>;
}

export { Routing };
