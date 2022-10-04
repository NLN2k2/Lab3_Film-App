import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Films from "./components/Films";
import Detail from "./components/Detail";
import Contact  from "./components/Contact";

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Films/>}> 
      </Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}


export default App;
