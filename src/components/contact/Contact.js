import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => (
  <section id="contact" className="contact-content">
    <h1>Contact</h1>

    <div className="contact-container">
      <p>
        +32 (0)486 87 22 38 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="mailto:info@catlike-prod.com">info@catlike-prod.com</a>
      </p>
      <p>
        <strong>OFFICES AND MAILING ADDRESSES:</strong>
      </p>
      <div className="location-container">
        <div className="location">
          <strong>BELGIUM</strong>
          <br />
          48 rue de Stassart
          <br />
          1050 Bruxelles
          <br />
          Belgique
          <br />
          <StaticImage
            src="../../images/iframe-img.jpg"
            width={350}
            quality={95}
            placeholder="blurred"
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Catlike Productions"
          />
        </div>
        <div className="location">
          <strong>FRANCE</strong>
          <br />
          16 rue Joly
          <br />
          31400 Toulouse
          <br />
          France
          <br />
          <StaticImage
            src="../../images/iframe-img.jpg"
            width={350}
            quality={95}
            placeholder="blurred"
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Catlike Productions"
          />
        </div>
        <div className="location">
          <strong>SPAIN</strong>
          <br />
          Calle baja, 5<br />
          22144 Las Almunias de Rodellar
          <br />
          España
          <br />
          <StaticImage
            src="../../images/iframe-img.jpg"
            width={350}
            quality={95}
            placeholder="blurred"
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="Catlike Productions"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
