import Home from "./pages/Home.jsx";
import toast from "react-hot-toast";
import CreateTodo from "./pages/CreateTodo.jsx";
import NoteDetail from "./pages/NoteDetail.jsx";

import { Route, Routes } from "react-router";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<CreateTodo></CreateTodo>}></Route>
        <Route path="/note/:id" element={<NoteDetail />}></Route>
      </Routes>
    </div>
  );
};

export default App;
