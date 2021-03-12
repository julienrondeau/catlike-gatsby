import React, { useEffect } from 'react';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

function Trailer(props) {
  // let imageUrl = '';
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
    // imageUrl = getImage(props.imageTrailer);
    // console.log(imageUrl);
  });

  // render() {
  return (
    <div className="trailer">
      <div className="trailer-entry-content">
        <img src={props.imageTrailer} alt="" className="trailer-img" />
        {/* <GatsbyImage image={imageUrl} alt="" /> */}
        {/* <StaticImage
          src={props.imageTrailer}
          width={312}
          quality={95}
          placeholder="blurred"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="Catlike Productions"
          className="trailer-img"
        /> */}

        <div className="overlay"></div>
        <h2 className="trailer-title">{props.title}</h2>
        <div className="trailer-players">
          <div className="players-container">
            <button className="btn-player">Player</button>
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
  // }
}

export default Trailer;
