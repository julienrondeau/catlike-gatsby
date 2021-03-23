import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import Trailer from './Trailer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,
};

export default function TrailersTv({ children }) {
  const dataTv = useStaticQuery(
    graphql`
      query {
        allTrailersXml(
          filter: {
            xmlChildren: {
              elemMatch: {
                content: { eq: "TV" }
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

  const trailerTv = dataTv.allTrailersXml.edges;

  // console.log(trailerTv);

  return (
    <div id="trailersTV" className="trailers-content">
      <div className="trailers-cat">
        <h1>Tv</h1>
      </div>
      <div className="trailer-tv-container">
        <Slider {...settings}>
          {trailerTv.map(({ node }, index) => (
            <div key={index}>
              <img src={node.xmlChildren[3].content} alt="" />
              <div className="slide-infos">
                <h2>{node.xmlChildren[1].content}</h2>
                <div className="director">
                  A film by {node.xmlChildren[5].content}
                </div>
                <div className="prod">{node.xmlChildren[7].content}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
