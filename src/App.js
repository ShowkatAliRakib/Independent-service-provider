
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import NotFound from './Components/Shared/NotFound/NotFound';
import Blogs from './Components/Pages/Blogs/Blogs';
import AboutMe from './Components/Pages/AboutMe/AboutMe';
import Register from './Components/Pages/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>} ></Route>

          <Route path='/aboutMe' element={<AboutMe></AboutMe>} ></Route>
          <Route path='/register' element={<Register></Register>} ></Route>





        <Route path='*' element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
