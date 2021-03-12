import React from 'react';
// import Scroll from '../common/Scroll';

import { StaticImage } from 'gatsby-plugin-image';

const Partners = () => (
  <section id="partners" className="partenaires-content">
    <div className="partenaires-container container">
      <h1>Partners</h1>
      <table>
        <tbody>
          <tr>
            <td className="partners-logo">
              <StaticImage
                src="https://catlike-prod.com/wp-content/uploads/2017/09/boxon.jpg"
                width={200}
                quality={95}
                placeholder="blurred"
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Boxon"
              />
            </td>
            <td className="partners-infos">
              <strong>BOXON</strong>
              <br />
              Audio Post Facilities and Sound Coordination for Film
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className="partners-logo">
              <StaticImage
                src="https://catlike-prod.com/wp-content/uploads/2017/09/thepostbox.jpg"
                width={200}
                quality={95}
                placeholder="blurred"
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="The Post Box logo"
              />
            </td>
            <td className="partners-infos">
              <strong>THE POST BOX</strong>
              <br />
              Audio and Video Editing Solutions
              <br />
              Post-Production Coordination and Advice
              <br />
              Wallimage Eligibility
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className="partners-logo">
              <StaticImage
                src="https://catlike-prod.com/wp-content/uploads/2018/03/charbon_logo-e1519919892640.jpg"
                width={200}
                quality={95}
                placeholder="blurred"
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Charbon Studio logo"
              />
            </td>
            <td className="partners-infos">
              <strong>CHARBON STUDIO</strong>
              <br />
              Digital Lab, colour grading and finishing, mastering
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td className="partners-logo">
              <StaticImage
                src="https://catlike-prod.com/wp-content/uploads/2017/01/StudioEquipe.jpg"
                width={200}
                quality={95}
                placeholder="blurred"
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Charbon Studio logo"
              />
            </td>
            <td className="partners-infos">
              <strong>STUDIO L&rsquo;EQUIPE</strong>
              <br />
              Company that offers all post-production facilities for movies.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default Partners;
