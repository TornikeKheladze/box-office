import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Starred from './Pages/Starred';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/starred" element={<Starred />} />
    </Routes>
  );
}

export default App;
