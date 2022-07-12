import { Routes, Route } from 'react-router-dom';
import Navs from './Components/Nav';
import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
    <div>
      <Navs />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
      </Routes>
    </div>
  );
}

export default App;
