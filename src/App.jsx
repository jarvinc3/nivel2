import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/navs";
// import Cards from "./components/cards";
import Stays from "./components/stays";


function App() {
  // La variable data es la que va a almacenar los datos de "stays.json" y setData nos ayudará a guardar esos datos en esa variable. Es necesario que inicialicemos esa variable como un array vacío para evitar errores.
  const [data, setData] = useState([]);

  // Función para traer los datos de "stays.json".
  const getData = async () => {
    // Esta sentencia try-catch sirve para manejar los errores que se podrían generar al importar los datos de "stays.json".
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      // Aquí guardamos los datos de "stays.json" en la variable data.
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };

  // Este Hook te va a ejecutar la función getData cada vez que la página se renderice.
  useEffect(() => {
     getData();
  }, []);

  // Puedes ver la variable data en consola.
  console.log(data);
  return (

  
    <>
      <Nav />
      <Stays />
      <main>
        {data.map((e, i) => {
          return (
            <div className="cards" key={i}>
              <div className="imgContainer">
                <img className="photo" src={e.photo} alt="" />
              </div>
                <div className="indicationsContainer">
                <div className="typeContainer"><h2 className="superHost">{e.superHost}</h2><p className="type"> {e.type} </p><p className="bed"> {e.beds} </p></div>
                <div className="starRting">
                  <span id="star" className="material-symbols-outlined">star</span>
                  <p className="rating">{e.rating}</p>
                </div>
              </div>
              <div className="description">
                <h2 className="title">{e.title}</h2>
              </div>
            </div>
          )
          })
        }
      </main>
    </>
  );
}

export default App;
