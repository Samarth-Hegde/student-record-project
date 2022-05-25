import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/login";
import Students from './Pages/students';
import AddStudents from './Pages/addStudents';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/students" element={<Students/>}></Route>
          <Route path="/add-student" element={<AddStudents/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
