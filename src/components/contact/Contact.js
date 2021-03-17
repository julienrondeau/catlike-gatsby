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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.721610449503!2d4.358583916032421!3d50.83632027953037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c48891c479f3%3A0xca90074bc9cd199e!2sRue%20de%20Stassart%2048%2C%201050%20Ixelles%2C%20Belgique!5e0!3m2!1sfr!2sfr!4v1615972923761!5m2!1sfr!2sfr"
            width="350"
            height="240"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.729657269377!2d1.4467363158249107!3d43.59134707912345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc8739d29be7%3A0x1fc12af59208a48e!2s16%20Rue%20Joly%2C%2031400%20Toulouse!5e0!3m2!1sfr!2sfr!4v1615973409625!5m2!1sfr!2sfr"
            width="350"
            height="240"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="location">
          <strong>SPAIN</strong>
          <br />
          Calle baja, 5<br />
          22144 Las Almunias de Rodellar
          <br />
          España
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.0708890740407!2d-0.071628184210609!3d42.25565867919395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd580b5df9fb5183%3A0x526a192fc9547c69!2sCalle%20Baja%2C%205%2C%2022144%20Las%20Almunias%2C%20Huesca%2C%20Espagne!5e0!3m2!1sfr!2sfr!4v1615973451600!5m2!1sfr!2sfr"
            width="350"
            height="240"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
