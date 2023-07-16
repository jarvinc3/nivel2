import { useState } from "react";
function nav({onSearch}) {
    const [Location, setLocation] = useState ("");
    const [Guests, setGuests] = useState ("");


    // esta funcion sirve como filtro para identificar la ciudad que ingreses
    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }
    // esta funcion sirve como filtro para identificar el nummero de guests que ingreses
    const handleGuestsChange = (event) => {
        setGuests(event.target.value);
    }

    // esta funcion sirve para filtrar la informacion al dar click en el boton
    const handleSearch = () => {
        onSearch(Location, Guests);
    }


    return(
        <>
        <nav>
            <div className="contenedor-logo">
                <img className="logo" src="/src/img/logo.svg" alt=""/>
            </div>
            <section className="sectionSearch">
                <input className="location" type="text" placeholder=" Add city" value={Location} onChange={handleLocationChange}/>
                <hr className="hr1" />
                <input className="addGuest" type="text" placeholder="Add guest" value={Guests} onChange={handleGuestsChange}/>
                <hr className="hr2"  />
                <button onClick={handleSearch}> 
                    <span id="lupa" className="material-symbols-outlined">search</span>
                </button>
            </section>
        </nav>
        </>
    );
}

export default nav;