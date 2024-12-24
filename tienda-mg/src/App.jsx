import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/Navbar'
import Home from './components/Home';
import ItemListContainer from './components/ItemListContainer'


function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path='productos' element={<ItemListContainer/>} /> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App
