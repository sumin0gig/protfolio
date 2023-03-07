import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/page/home/Home';
import Portfolio from './components/page/portfolio/Portfolio';
import About from './components/page/About/About';
import Start from './components/page/Start/Start';
import Cookies from 'react-cookie/cjs/Cookies';

const cookies= new Cookies()
export const setCookie=(name,value,options)=>{
  return cookies.set(name,value,{...options})
}
export const getCookie=(name)=>{
  return cookies.get(name);
}
export const delCookie=(name)=>{
  return cookies.remove(name);
}
export const isDone= getCookie("r")&&getCookie("g")&&getCookie("b")&&getCookie("a");

function App() {
  const colorRGBA= `rgba(${getCookie("r")},${getCookie("g")},${getCookie("b")},${getCookie("a")})`;
  const colorRGBA_mini= `rgba(${getCookie("r")},${getCookie("g")},${getCookie("b")},.1)`;
  document.documentElement.style.setProperty(`--user-color`,colorRGBA);
  document.documentElement.style.setProperty(`--main-color`,colorRGBA_mini);
  if(((getCookie("r")*1+getCookie("g")*1+getCookie("b")*1)/3)>200){
    document.documentElement.style.setProperty(`--font-color`,'black');
    document.documentElement.style.setProperty(`--font-color-toowhitebg`,'black');
  }

  return (
    isDone ?
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
    </BrowserRouter>:
    <Start/>
  );
}

export default App;
