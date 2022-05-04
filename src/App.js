// import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Tasks from './Pages/Tasks';
import  User from './Pages/User';
import Login from './Features/Login';
import { useSelector } from 'react-redux';

function App() {
  const auth=useSelector(state=>state.auth.isAuthenticated);
  return (
    <Router>
    {auth&&<Header/>}
    <Routes>
     {auth && <Route path='/' element={<Home/>} />}
     {auth &&  <Route path='/tasks' element={<Tasks/>} />}
     {auth && <Route path='/User' element={<User/>} />}
      <Route path="*" element={<Login/>} />
    </Routes>
    </Router>

  );
}

export default App;
