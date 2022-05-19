import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTask from './components/AddTask';
import Home from './components/Home';
import Login from './components/Login';
import MyTask from './components/MyTask';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addtask' element={<RequireAuth>
          <AddTask></AddTask>
        </RequireAuth>}></Route>
        <Route path='/mytask' element={<RequireAuth>
          <MyTask></MyTask>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
