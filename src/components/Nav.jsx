import { useState } from "react";
import PropTypes from "prop-types";

Nav.propTypes = {
  onSearch: PropTypes.func.isRequired,
  uniqueCities: PropTypes.array.isRequired,
};

function Nav({ onSearch, uniqueCities }) {
  const [location, setLocation] = useState("Helsinki");
  const [guests, setGuests] = useState("");
  const [border1, setBorder1] = useState();
  const [border2, setBorder2] = useState();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [error, setError] = useState(null);

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleSearch = () => {
    if (location === "" || guests === "") {
      setError(true);
    } else {
      onSearch(location, guests);
      setError(false);
    }
  };

  const openModal = () => {
    const modal = document.getElementById("navbar");
    modal.classList.add("nav");
  }

  const closeModal = () => {
    if (location === "" || guests === "") {
      setError(true);
    } else {
      const modal = document.getElementById("navbar");
      modal.classList.remove("nav");
    }
  }

  const closeModalV2 = () => {
    const modal = document.getElementById("navbar");
    modal.classList.remove("nav");
    setError(false);
  }

  const toggleBorder1 = () => {
    setBorder1(true);
    setBorder2(false);
  }

  const toggleBorder2 = () => {
    setBorder2(true);
    setBorder1(false);
  }

  const handleCountPlus = () => {
    setCount1(count1 + 1);
  }

  const handleCountPlus2 = () => {
    setCount2(count2 + 1);
  }

  const handleCountMinus = () => {
    setCount1(count1 - 1);
  }

  const handleCountMinus2 = () => {
    setCount2(count2 - 1);
  }

  const handleCityClick = (event) => {
    const city = event.target.getAttribute('data-city');
    setLocation(city);
  };

  return (
    <>
      <nav id="navbar" className="">
        <div className="contenedor-logo">
          <img className="logo" src=" /logo.svg" alt="" />
        </div>
        <section className="sectionSearch">
          <div className="inputsContainer">
            <div onClick={toggleBorder1} className={` inputContainer locationContainer ${border1 ? 'border' : ''}`}>
              <label htmlFor="location">Location</label>
              <input
                className="location"
                id="location"
                type="text"
                readOnly
                placeholder={uniqueCities[0] + ", Finland"}
                autoComplete="off"
                value={`${location}, Finland`}
                onClick={openModal}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div onClick={toggleBorder2} className={`inputContainer guestsContainer ${border2 ? 'border' : ''}`}>
              <label htmlFor="guests">Guests</label>
              <input
                className="addGuest"
                id="guests"
                type="text"
                placeholder="Add guest"
                autoComplete="off"
                value={`${guests}`}
                onClick={openModal}
                onChange={handleGuestsChange}
              />
            </div>
            <div className="inputContainer buttonContainer">
              <div onClick={closeModal} className="buttonDiv">
                <button onClick={handleSearch}>
                  <span id="lupa" className="material-symbols-outlined">
                    search
                  </span>
                </button>
                <span onClick={handleSearch} className="search">
                  Search
                </span>
              </div>
              <div className="buttonDiv filterDiv">
                <button onClick={handleSearch}>
                  <span className="material-symbols-outlined">
                    tune
                  </span>
                </button>
                <span  className="filter">
                  Clean <br /> filters
                </span>
              </div>
            </div>
          </div>
          <div className={` ${error ? 'errorContent' : 'dpNone'}`}></div>
          <div className="descriptionContainer">
            <div className={`description ${border1 ? '' : 'show'}`}>
              <ul>
                {
                  uniqueCities.map((city) => (
                    <li key={city}>
                      <span className="material-symbols-outlined">location_on</span>
                      <div>
                        <span onClick={handleCityClick} data-city={city} >{city} Finland</span>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className={`description coutContainer ${border2 ? '' : 'show'}`}>
              <div className="countContainer1">
                <h2>Adults</h2>
                <p>Age 13 and above</p>
                <div className="count1">
                  <img onClick={handleCountMinus} width="25" height="25" src="https://img.icons8.com/ios/25/minus-2-math.png" alt="minus-2-math" />
                  <h2>{count1}</h2>
                  <img onClick={handleCountPlus} width="25" height="25" src="https://img.icons8.com/ios/25/plus-2-math.png" alt="plus-2-math" />
                </div>
              </div>
              <div className="countContainer2">
                <h2>Children</h2>
                <p>Ages 2-12</p>
                <div className="count2">
                  <img onClick={handleCountMinus2} width="25" height="25" src="https://img.icons8.com/ios/25/minus-2-math.png" alt="minus-2-math" />
                  <h2>{count2}</h2>
                  <img onClick={handleCountPlus2} width="25" height="25" src="https://img.icons8.com/ios/25/plus-2-math.png" alt="plus-2-math" />
                </div>
              </div>
            </div>
            <div className="description"></div>
          </div>
        </section>
        <div onClick={closeModalV2} className="opacity"></div>
      </nav>
    </>
  );
}

export default Nav;
