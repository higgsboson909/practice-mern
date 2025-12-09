import Home from "./pages/Home.jsx";
import CreateTodo from "./pages/CreateTodo.jsx";
import NoteDetail from "./pages/NoteDetail.jsx";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/create", element: <CreateTodo /> },
  { path: "/note/:id", element: <NoteDetail /> },
];

export default routes;
