import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<h1>home</h1>} />
      <Route path="/starred" element={<h1>starred</h1>} />
    </Routes>
  );
}

export default App;
