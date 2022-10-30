
import Header from './components/header';
import Footer from './components/Footer';
import Landing from './components/pages/Landing';
import { Routes, Route } from 'react-router-dom';
import About from './components/pages/About'
import Checkout from './components/pages/Checkout';
import Contact from './components/pages/Contact'
import Courses from './components/pages/Courses'
import Signin from './components/pages/Signin'
import Registration from './components/pages/Registration';
import AdminPanel from './components/pages/AdminPanel';
import { BrowserRouter as Router } from "react-router-dom"
import ThankYou from './components/pages/ThankYou';
import CourseDetails from './components/pages/CourseDetails';
import MyOrders from './components/pages/MyOrders';

function App() {
  
  
  return (
    <Router>
    
      <Header/>
      
      <Routes>
        <Route path='/' element={<Landing/>} exact/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='signin' element={<Signin />}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='adminpanel' element={<AdminPanel/>}/>
        <Route path='/checkout' element={<Checkout />}/>
        <Route path='/thankyou' element={<ThankYou/>}/>
        <Route path='/courses/:id' element={<CourseDetails/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
      

      <Footer />
    </Router>
  );
}

export default App;
