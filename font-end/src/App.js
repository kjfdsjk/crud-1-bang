import logo from './logo.svg';
import './App.css';
import {Outlet, Route, Routes} from "react-router";
import Home from "./pages/Home";
import List from "./pages/student/List";
import Create from "./pages/student/Create";
import Edit from "./pages/student/Edit";
import Admin from "./pages/Admin";

function App() {
  return (
      <>
        <Outlet></Outlet>
        <Routes>
          <Route path="" element={<Home/>}>
            <Route path={'/'} element={<List/>}></Route>
            <Route path={'/create'} element={<Create/>}></Route>
            <Route path={'/edit/:id'} element={<Edit/>}></Route>
          </Route>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>
      </>
  );
}

export default App;
