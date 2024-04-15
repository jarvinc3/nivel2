import PropTypes from "prop-types";

Stays.propTypes = {
  filteredData: PropTypes.array.isRequired,
};

function Stays({ filteredData }) {
  return (
    <>
      <div className="divStay">
        <h1 className="stayText">Stays in Finland</h1>
        <p>{filteredData.length -2}+ stays</p>
      </div>
    </>
  );
}

export default Stays;
