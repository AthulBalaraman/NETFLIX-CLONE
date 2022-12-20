import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner"
import {actions,originals} from './urls'
import "./App.css"
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div>
     <NavBar />
     <Banner />
     <RowPost url={originals}  title="Netflix Originals"/>
     <RowPost url={actions} title="Action" isSmall/>
    </div>
  );
}

export default App;
