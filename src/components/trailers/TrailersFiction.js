import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Trailer from './Trailer';

export default function TrailersFiction({ children }) {
  const dataFiction = useStaticQuery(
    graphql`
      query {
        allTrailersXml(
          filter: {
            xmlChildren: {
              elemMatch: {
                content: { eq: "Fiction" }
                name: { eq: "Typesdetrailers" }
              }
            }
          }
        ) {
          edges {
            node {
              id
              xmlChildren {
                name
                content
              }
            }
          }
        }
      }
    `
  );

  const trailerFiction = dataFiction.allTrailersXml.edges;

  const [imageToShow, setImageToShow] = useState('');
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const videoUrl = `https://player.vimeo.com/video/${imageToShow}`;

  const showImage = image => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  return (
    <div id="trailersFiction" className="trailers-content">
      <div className="trailers-cat">
        <h1>Fiction</h1>
      </div>
      <div className="trailers-container">
        {trailerFiction.map(({ node }, index) => (
          <Trailer
            key={index}
            imageTrailer={node.xmlChildren[3].content}
            title={node.xmlChildren[1].content}
            year={node.xmlChildren[8].content}
            production={node.xmlChildren[7].content}
            director={node.xmlChildren[5].content}
            onClick={() => showImage(node.xmlChildren[4].content)}
          />
        ))}
        {lightboxDisplay ? (
          <div id="lightbox" onClick={hideLightBox}>
            {/* <img id="lightbox-img" src={imageToShow}></img> */}
            <button onClick={hideLightBox} class="btn-close">
              Fermer
            </button>
            <iframe
              src={videoUrl}
              width="640"
              height="360"
              allow="autoplay; fullscreen; picture-in-picture"
              title="Catlike Fiction Trailer"
            ></iframe>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
