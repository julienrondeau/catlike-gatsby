import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const References = () => (
  <section id="references" className="clients-content">
    <div className="clients-container container">
      <h1>References</h1>
      <div className="clients-logos">
        <StaticImage
          src="https://catlike-prod.com/wp-content/uploads/2018/10/tarantula.png"
          alt="tarantula production"
          width={200}
          quality={95}
          placeholder="blurred"
          formats={['AUTO', 'WEBP', 'AVIF']}
        />
        <StaticImage
          src="https://catlike-prod.com/wp-content/uploads/2018/10/frakas.png"
          alt="frakas production"
          width={200}
          quality={95}
          placeholder="blurred"
          formats={['AUTO', 'WEBP', 'AVIF']}
        />
        <StaticImage
          src="https://catlike-prod.com/wp-content/uploads/2018/10/derives.png"
          alt="derives production"
          width={200}
          quality={95}
          placeholder="blurred"
          formats={['AUTO', 'WEBP', 'AVIF']}
        />
        <StaticImage
          src="https://catlike-prod.com/wp-content/uploads/2018/10/clin-doeil.png"
          alt="clin d'oeil films production"
          width={200}
          quality={95}
          placeholder="blurred"
          formats={['AUTO', 'WEBP', 'AVIF']}
        />
        <StaticImage
          src="https://catlike-prod.com/wp-content/uploads/2018/10/box-prod.png"
          alt="box production"
          width={200}
          quality={95}
          placeholder="blurred"
          formats={['AUTO', 'WEBP', 'AVIF']}
        />
        <StaticImage
          src="https://catlike-prod.com/wp-content/uploads/2018/10/novak.png"
          alt="novak production"
          width={200}
          quality={95}
          placeholder="blurred"
          formats={['AUTO', 'WEBP', 'AVIF']}
        />
        <StaticImage
          src="https://catlike-prod.com/wp-content/uploads/2018/10/o-brother.png"
          alt="o'brother distribution"
          width={200}
          quality={95}
          placeholder="blurred"
          formats={['AUTO', 'WEBP', 'AVIF']}
        />
        <StaticImage
          src="https://catlike-prod.com/wp-content/uploads/2018/10/outside-box.png"
          alt="outside the box distribution"
          width={200}
          quality={95}
          placeholder="blurred"
          formats={['AUTO', 'WEBP', 'AVIF']}
        />
        <StaticImage
          src="https://catlike-prod.com/wp-content/uploads/2018/10/le-parc.png"
          alt="le parc distribution"
          width={200}
          quality={95}
          placeholder="blurred"
          formats={['AUTO', 'WEBP', 'AVIF']}
        />
      </div>
    </div>
  </section>
);

export default References;
