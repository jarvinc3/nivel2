
function nav() {
    return(
        <>
        <nav>
            <div className="contenedor-logo">
                <img className="logo" src="/src/img/logo.svg" alt=""/>
            </div>
            <section className="sectionSearch">
                <span className="location">
                <p>Helsinki, Finland</p>
                </span>
                <hr className="hr1" />
                <input type="text" placeholder="Add guest"/>
                <hr className="hr2"  />
                <button> 
                    <span id="lupa" className="material-symbols-outlined">search</span>
                </button>
            </section>
        </nav>
        </>
    );
}

export default nav;