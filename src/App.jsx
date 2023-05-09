import { Route, Routes } from 'react-router-dom';
import Home from './pages/Homepage';
import About from './pages/Aboutpages';
import SingleCocktail from './pages/SingleCocktailPage';
import Navbar from './componets/Navbar';
import Error from './pages/Error';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cocktailbar/:id" element={<SingleCocktail />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
