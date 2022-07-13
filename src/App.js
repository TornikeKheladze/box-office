import { Routes, Route } from 'react-router-dom';
import Show from './Components/show/Show';
import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/starred" element={<Starred />} />
      <Route exact path="/show/:id" element={<Show />} />
    </Routes>
  );
}

export default App;
