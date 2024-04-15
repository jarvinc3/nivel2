import PropTypes from "prop-types";

Cards.propTypes = {
  filteredData: PropTypes.array.isRequired,
};

function Cards({ filteredData }) {
  return (
    <>
      <main>
        {filteredData.map((e, i) => {
          return (
            <div className="cards" key={i}>
              <div className="imgContainer">
                <img className="photo" src={e.photo} alt="" />
              </div>
              <div className="indicationsContainer">
                <div className="typeContainer">
                  {e.superHost && <p className="superHost">SUPER HOST</p>}
                  <p className="type"> {e.type} </p>
                  {e.beds && <p className="bed"> . {e.beds} beds</p>}
                </div>
                <div className="starRting">
                  <span id="star" className="material-symbols-outlined">
                    star
                  </span>
                  <p className="rating">{e.rating}</p>
                </div>
              </div>
              <div className="description">
                <h2 className="title">{e.title}</h2>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default Cards;
