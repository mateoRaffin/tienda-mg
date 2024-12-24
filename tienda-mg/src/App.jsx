import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/Home';
import NavBar from './components/Navbar';
import Error from './components/Error';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path='/productos' element={<ItemListContainer />} />
            <Route path='/productos/:id' element={<ItemDetailContainer />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App