import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import CompletedTask from './components/Completed Task/CompletedTask';
import Calender from './components/Calender/Calender';
import Task from './components/AddTask/AddTask';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditTask from './components/EditTask/EditTask';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/task' element={<Task></Task>}></Route>
        <Route path='/edittask/:id' element={<EditTask></EditTask>}></Route>
        <Route path='/completedtask' element={<CompletedTask></CompletedTask>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
