import './App.scss';
import Home from './pages/home';
import Nav from './components/nav';
import { Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';



function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>

      </Routes>    
    </div>
  );
}

export default App;

