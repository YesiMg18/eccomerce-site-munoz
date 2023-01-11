import { Navbar } from "./components/navbar.js";
import {ItemListContainer} from "./components/ItemsListContainer.js";
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/contenedores/itemDetailContainer.js";



function App() {
  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/productos/:categoryId" element={ <ItemListContainer/>}/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer/>}/>       
        <Route path="*" element={<Navigate to={"/"}/>}/>

      </Routes>
     
    </BrowserRouter>

   
  );
}

export default App;



{/*<Route path="/" element={<ItemDetailContainer/>}/>*/}