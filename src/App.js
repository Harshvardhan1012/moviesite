import './App.css';
import {  Routes, Route } from 'react-router-dom';
import { MovieDetail } from './components/MovieDetail';
import { PagenotFound } from './components/PagenotFound';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Header } from './components/Header';
import { ShowCard } from './components/ShowCard';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:imdbID' element={<MovieDetail/>}/>
      <Route path='*' element={<PagenotFound/>}/>
      <Route path='/shows' element={<ShowCard/>}/>
     </Routes>

    <Footer/>
    </div>
  );
}

export default App;
