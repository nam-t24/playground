import { Routes, Route} from 'react-router-dom';
import Home from './components/Home.js';
import Navbars from './components/navbars.js';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/navbars" element={<Navbars/>} />
      </Routes>
    </>
  );
}

export default App;
