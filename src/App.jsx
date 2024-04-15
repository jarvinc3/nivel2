import "./App.css";
import { useEffect, useState } from "react";
import Nav from "./components/navs";
import Cards from "./components/cards";
import Stays from "./components/stays";
import stays from "./data/stays.json";

function App() {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [data, setData] = useState([]);

  const getData = () => {
    setData(stays);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (location, guests) => {
    setLocation(location);
    setGuests(guests);
  };

  const filteredData = data.filter((item) => {
    return (
      item.city.toLowerCase().includes(location.toLowerCase()) &&
      item.maxGuests >= guests
    );
  });

  return (
    <div className="principal">
      <Nav onSearch={handleSearch} />
      <Stays filteredData={filteredData} />
      <Cards filteredData={filteredData} />
    </div>
  );
}

export default App;
