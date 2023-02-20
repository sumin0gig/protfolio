import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/page/home/Home';
import Portfolio from './components/page/portfolio/Portfolio';
import About from './components/page/About/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutMe' element={<About/>}/>
          <Route path='/portfolio/1' element={<Portfolio/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
