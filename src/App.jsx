import "./App.css";
import { useState } from "react";
import Nav from "./components/navs";
import Cards from "./components/cards";
import Stays from "./components/stays";

function App() {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  
// funcion para que el filtro funcione en los componentes navs y cards
  const handleSearch = (location, guests) => {
    setLocation(location);
    setGuests(guests);
  }

  return (
    <>
    <Nav onSearch={handleSearch} />
    <Stays />
    <Cards location={location} guests={guests} />
    </>
  )
}

export default App