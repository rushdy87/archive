import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Hi there</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
