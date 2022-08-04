import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import NotFound from './Notfound';
import Home from './components/home/Home';
import Events from './container/Sidebar/events/Events';
import Gallery from './container/Sidebar/gallery/Gallery';
import Clubs from './container/Sidebar/clubs/Clubs';
import Hostels from './components/hostels/Hostels';
import Contact from './components/contact/Contact';
import Blog from './components/blog/Blog';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="events" element={<Events />} />
          <Route exact path="clubs" element={<Clubs />} />
          <Route exact path="gallery" element={<Gallery />} />
          <Route exact path="hostels" element={<Hostels />} />
          <Route exact path="*" element={<NotFound />} />
          <Route exact path="contact" element={<Contact />} />
          <Route exact path="blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
