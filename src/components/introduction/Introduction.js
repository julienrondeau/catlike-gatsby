import React from 'react';
// import Scroll from '../common/Scroll';
import catlikeMp4 from '../../video/catlike-video.mp4';
import catlikeWebm from '../../video/catlike-video.webm';
import catlikeOgv from '../../video/catlike-video.ogv';
import { StaticImage } from 'gatsby-plugin-image';
import Scrollspy from 'react-scrollspy';
import Scroll from '../common/Scroll';

const Introduction = () => (
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <StaticImage
      src="../../images/logo_catlike-video.png"
      width={365}
      quality={95}
      placeholder="blurred"
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="Catlike Productions"
      className="logo-video"
    />
    <video autoPlay="1" loop muted className="intro-video">
      <source src={catlikeMp4} type="video/mp4" />
      <source src={catlikeWebm} type="video/webm" />
      <source src={catlikeOgv} type="video/ogg" />
    </video>
    <Scrollspy>
      <li>
        <Scroll type="id" element="trailers">
          <a href="#trailers" className="icon-scroll">
            scroll
          </a>
        </Scroll>
      </li>
    </Scrollspy>
  </section>
);

export default Introduction;
