import React from 'react';
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
          />
        ))}
      </div>
    </div>
  );
}
