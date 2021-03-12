import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Trailer from './Trailer';

export default function TrailersDocumentary({ children }) {
  const dataDocumentary = useStaticQuery(
    graphql`
      query {
        allTrailersXml(
          filter: {
            xmlChildren: {
              elemMatch: {
                content: { eq: "Documentary" }
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

  const trailerDocumentary = dataDocumentary.allTrailersXml.edges;

  return (
    <div id="trailersDocumentary" className="trailers-content">
      <div className="trailers-cat">
        <h1>Documentary</h1>
      </div>
      <div className="trailers-container">
        {trailerDocumentary.map(({ node }, index) => (
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
