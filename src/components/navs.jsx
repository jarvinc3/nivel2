import { useState } from "react";
import PropTypes from "prop-types";

Nav.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

function Nav({ onSearch }) {
  const [Location, setLocation] = useState("");
  const [Guests, setGuests] = useState("");
  const [border1, setBorder1] = useState();
  const [border2, setBorder2] = useState();
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [error, setError] = useState(null);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleSearch = () => {
    if (Location === "" || Guests === "") {
      setError(true);
    } else {
      onSearch(Location, Guests);
      setError(false);
    }
  };

  const openModal = () => {
    const modal = document.getElementById("navbar");
    modal.classList.add("nav");
  }

  const closeModal = () => {
    if (Location === "" || Guests === "") {
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

  return (
    <>
      <nav id="navbar" className="">
        <div className="contenedor-logo">
          <img className="logo" src="/src/img/logo.svg" alt="" />
        </div>
        <section className="sectionSearch">
          <div className="inputsContainer">
            <div onClick={toggleBorder1} className={` inputContainer locationContainer ${border1 ? 'border' : ''}`}>
              <label htmlFor="location">Location</label>
              <input
                className="location"
                id="location"
                type="text"
                placeholder=" Add city"
                value={Location}
                onClick={openModal}
                onChange={handleLocationChange}
              />
            </div>
            <div onClick={toggleBorder2} className={`inputContainer guestsContainer ${border2 ? 'border' : ''}`}>
              <label htmlFor="guests">Guests</label>
              <input
                className="addGuest"
                id="guests"
                type="text"
                placeholder="Add guest"
                value={Guests}
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
            </div>
          </div>
          <div className={` ${error ? 'errorContent' : 'dpNone'}`}></div>
          <div className="descriptionContainer">
            <div className={`description ${border1 ? '' : 'show'}`}>
              <ul>
                <li>
                  <span className="material-symbols-outlined">location_on</span>
                  <span>Helsinki, Finland</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">location_on</span>
                  <span>Helsinki, Finland</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">location_on</span>
                  <span>Helsinki, Finland</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">location_on</span>
                  <span>Helsinki, Finland</span>
                </li>
                <li>
                  <span className="material-symbols-outlined">location_on</span>
                  <span>Helsinki, Finland</span>
                </li>
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
