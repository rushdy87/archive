import Nav from "./components/Nav/Nav";

import {data} from './data/income'

function App() {
  console.log(data);
  return <>
  <Nav />
    <h1>الصادر والوارد</h1>
  </>
}

export default App;
