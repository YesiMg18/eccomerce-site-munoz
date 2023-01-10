import { Navbar } from "./components/navbar.js";
import {ItemListContainer} from "./components/ItemsListContainer.js";
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from "./components/contenedores/itemDetailContainer.js";



function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
