import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        {/* <Route path="/detailUser/:id" element={<DetailUser />} /> */}
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
