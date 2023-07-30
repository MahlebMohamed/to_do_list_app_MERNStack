import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Routes/Home/home';
import About from './Routes/About/about';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AddNote from './Routes/Home/AddNote';
import UpdateNote from './Routes/Home/note';

function App() {

  return (
    <>
      <Router>

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/add-note' element={<AddNote />} />
          <Route path='/note/:id' element={<UpdateNote />} />
        </Routes>

        <Footer />

      </Router>
    </>
  )
}

export default App;
