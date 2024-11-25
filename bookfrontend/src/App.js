
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddBooks from './pages/AddBooks';
import Books from './pages/Books';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
   Routes,
  Route,
} from "react-router-dom";
import UpdateBook from './pages/UpdateBook';
import DeleteBook from './pages/DeleteBook';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/books" element={<Books/>}/>
        <Route  path="/addBooks" element={<AddBooks/>}/>
        <Route path='/updateBooks/:id' element={<UpdateBook/>}/> 
        <Route path='/deleteBooks/:id' element={<DeleteBook/>} />
      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
