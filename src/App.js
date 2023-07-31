import './App.css';
import GetMovies from './Components/GetMovies';
import Navbar from './Components/Navbar';
import Categories from './Components/Categories';
function App() {
  return (
    <div>
      <Navbar/>
    
      <Categories/>
      <GetMovies/>
    </div>
  );
}

export default App;
