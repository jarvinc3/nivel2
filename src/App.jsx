import "./App.css";
import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Stays from "./components/Stays";
import stays from "./data/stays.json";
import Cards from "./components/Cards";
import Loader from "./components/Loader";

function App() {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setData(stays);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (location, guests) => {
    setLocation(location);
    setGuests(guests);
    setLoading(true); 
  };

  const filteredData = data.filter((item) => {
    return (
      item.city.toLowerCase().includes(location.toLowerCase()) &&
      item.maxGuests >= guests
    );
  });

  const newData = data.reduce((citiesObj, item) => {
    citiesObj[item.city] = true;
    return citiesObj;
  }, {});
  const uniqueCities = Object.keys(newData);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 4500);
  }, [filteredData]); 

  return (
    <div className="principal">
      <Nav onSearch={handleSearch} uniqueCities={uniqueCities} />
      <Stays filteredData={filteredData} />
      {loading ? (
        <Loader />
      ) : (
        <Cards filteredData={filteredData} />
      )}
    </div>
  );
}

export default App;
