import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import { Ingoing, Outgoing, Search, Adding } from './pages';

import Modal from './components/Modal/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      {isOpen && <Modal closeOverlay={() => setIsOpen(false)} />}
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <button onClick={() => setIsOpen(!isOpen)}>toggle Modal</button>
          }
        />
        <Route path='/ingoing' element={<Ingoing />} />
        <Route path='/outgoing' element={<Outgoing />} />
        <Route path='/search' element={<Search />} />
        <Route path='/adding' element={<Adding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
