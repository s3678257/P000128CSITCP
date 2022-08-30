
import Content from './components/Content';
import Header from './components/header';
import Testimonial from './components/Testimonials';
import Pricing from './components/Pricing'
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
function App() {
  return (
    <div className="App">
      <Header/>
      <Content />
      <Pricing />
      <Testimonial />
      <CallToAction />
      
      <Footer />
    </div>
  );
}

export default App;
