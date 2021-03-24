import React, { useEffect } from 'react';

function Trailer(props) {
  useEffect(() => {
    // Ajuste la hauteur des blocs Trailer par rapport à la hauteur de l'image
    function trailerContentHeight() {
      var trailerImg = document.querySelector('.trailer-img');
      var trailerImgHeight = Math.floor(trailerImg.offsetHeight);
      var trailerContentArray = Array.from(
        document.querySelectorAll('.trailer-entry-content')
      );
      trailerContentArray.forEach(
        trailerContent =>
          (trailerContent.style.height = trailerImgHeight + 'px')
      );
    }
    trailerContentHeight();
    window.onresize = trailerContentHeight;
  });

  return (
    <div className="trailer">
      <div className="trailer-entry-content">
        <img src={props.imageTrailer} alt="" className="trailer-img" />
        <div className="overlay"></div>
        <h2 className="trailer-title">{props.title}</h2>
        <div className="trailer-players">
          <div className="players-container">
            {/* <img
              src={'/btn-trailer.png'}
              alt={props.title}
              style={{ width: 150, height: 33 }}
              onClick={props.onClick}
            /> */}
            <button className="btn-player" onClick={props.onClick}>
              Trailer
            </button>
          </div>
        </div>
      </div>

      <div className="trailer-infos">
        <h3 className="title">{props.title}</h3>
        <div className="year">
          <strong>Year:</strong> {props.year}
        </div>
        <div className="director">
          <strong>Director:</strong> {props.director}
        </div>
        <div className="prod">
          <strong>Production Co:</strong> {props.production}
        </div>
      </div>
    </div>
  );
}

export default Trailer;
