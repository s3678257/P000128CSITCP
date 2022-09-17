
import Header from './components/header';
import Footer from './components/Footer';
import Landing from './components/pages/Landing';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Courses from './components/pages/Courses'
import Signin from './components/pages/Signin'
import Registration from './components/pages/Registration';

function App() {
  
  return (
    <div className="App">
    
      <Header />
      <Routes>
        <Route path='/' element={<Landing/>} exact/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='signin' element={<Signin />}/>
        <Route path='/registration' element={<Registration/>}/>
      </Routes>
      

      <Footer />
    </div>
  );
}

export default App;
