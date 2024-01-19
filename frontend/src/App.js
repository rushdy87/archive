import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import { Ingoing, Outgoing, Search, Adding } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Hi there!!!</h1>} />
        <Route path='/ingoing' element={<Ingoing />} />
        <Route path='/outgoing' element={<Outgoing />} />
        <Route path='/search' element={<Search />} />
        <Route path='/adding' element={<Adding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
