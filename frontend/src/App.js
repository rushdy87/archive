import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Incoming from "./components/Incoming/Incoming";
import Outcoming from "./components/Outcoming/Outcoming";

function App() {
  return <BrowserRouter>
  <Nav />
    <Routes>
    <Route path="/" element={<h1>Hi there</h1>} />
    <Route path="/incoming" element={<Incoming />} />
    <Route path="/outcoming" element={<Outcoming />} />
    </Routes>
  </BrowserRouter>
}

export default App;
