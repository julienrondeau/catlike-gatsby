import React from 'react';
// import Scroll from '../common/Scroll';
// import { StaticImage } from 'gatsby-plugin-image';

const About = () => (
  <section id="about" className="wrapper about-content">
    <h1>About</h1>
    <div className="container">
      <div className="catlike-title">
        <strong>CATLIKE</strong> Productions
      </div>
      <div className="catlike-subTitle">BRUSSELS BASED PRODUCTION COMPANY</div>
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/charline-branger-1243a94a/"
          className="icon linkedin"
        >
          Linkedin
        </a>
      </div>
      <div className="flags">
        <div id="en" className="flag en">
          english version
        </div>
        <div id="fr" className="flag fr">
          version française
        </div>
        <div id="es" className="flag es">
          versión española
        </div>
      </div>
      <div className="about-blocks">
        <div id="aboutEN" className="about-block">
          <p>
            <em>Trailers are catlike.</em>
            <br />
            <em>Elegant and slender. Smart and agile.</em>
            <br />
            <em>With big eyes that glow at night..</em>
            <br />
            <em>They run really fast, and their claws are fearsome.</em>
            <br />
            <em>They’re real hunters &#8230;.</em>
          </p>
          <div className="content">
            <div className="bloc-gauche">
              <h4>
                <strong>TRAILERS CREATORS</strong>
              </h4>
              <p>
                Founded in 2017 by Charline Branger, CATLIKE is a young company
                specialising in branding feature films. Our studio is nestled
                within a postproduction hub in the heart of Brussels.
              </p>
              <p>
                Our main focus is to produce film trailers, but we also
                conceptualise teasers, showreels as well as pitch-pilots.
                <br />
                We define the identity of your film.
                <br />
                We show your film in its best light at any stage of its
                production, thanks to our customised work.
              </p>
              <p>
                We are particularly fond of art house films and documentaries,
                and we always work in respect of the film and its author.
              </p>
              <p>
                We work with all manner of directors, productions houses and
                films distributors (Cinema and TV).
                <br />
                We endeavour to surprise and create the best trailer possible,
                whilst still respecting the brief and the scope of work.
              </p>
              <p>
                Every single project is tailored to suit individual needs, and
                is always crafted with consideration for the timeline and
                budget.
                <br />
                Please do not hesitate to contact us for a bespoke quotation.
              </p>
            </div>
            <div className="bloc-droit">
              <h4>
                <strong>TRAILERS FACTORY</strong>
              </h4>
              <p>
                We manage all technical aspects of the production, and deliver
                our work in any requested format (digital web, master files,
                DCP, etc&#8230;).
                <br />
                Every step of production is handled by our dedicated
                departments: offline editing, sound design and mixing, motion
                graphics, rendering and deliveries).
              </p>
              <p>
                We collaborate with an exellent network of specialists and
                technicians.
                <br />
                Our state-of-the-art work pipeline guarantees a smooth process
                throughout the whole production.
              </p>
              <p>
                <strong>
                  LET&rsquo;S BE EFFICIENT AND THINK OUTSIDE OF THE BOX IN ORDER
                  TO BEST PROMOTE YOUR FILM
                </strong>
              </p>
              <p>
                <strong>SO THAT IT CAN BE SEEN BY THE LARGEST NUMBER</strong>
              </p>
              <p>
                <strong>TO KEEP CINEMA ALIVE</strong>
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
