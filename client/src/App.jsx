import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/home';
import About from './Routes/About/about';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <Router>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>

        <Footer />

      </Router>
    </>
  )
}

export default App;
