import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner"
import {actions,originals,comedyMovies,horrorMovies,romanceMovies,documentaries} from './urls'
import "./App.css"
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div>
     <NavBar />
     <Banner />
     <RowPost url={originals}  title="Netflix Originals"/>
     <RowPost url={actions} title="Action" isSmall/>
     <RowPost url={comedyMovies} title="Comedy Movies" isSmall/>
     <RowPost url={horrorMovies} title="Horror Movies" isSmall/>
     <RowPost url={romanceMovies} title="Romance Movies" isSmall/>
     <RowPost url={documentaries} title="Documentaries" isSmall/>
    </div>
  );
}

export default App;
