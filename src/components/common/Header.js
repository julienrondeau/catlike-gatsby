import React from 'react';
import { Link } from 'gatsby';
import Scrollspy from 'react-scrollspy';
import { StaticImage } from 'gatsby-plugin-image';

import Tab from './Tab';

import '../../assets/sass/main.scss';

const Header = () => {
  const [tabs] = React.useState([
    { content: 'Movies', href: 'trailersFiction' },
    { content: 'About', href: 'about' },
    { content: 'Partners', href: 'partners' },
    { content: 'References', href: 'references' },
    { content: 'Contact', href: 'contact' },
  ]);

  return (
    <header id="header">
      <Link className="title" to="/">
        <StaticImage
          src="../../images/logo_catlike-name.png"
          width={145}
          quality={95}
          placeholder="blurred"
          formats={['AUTO', 'WEBP', 'AVIF']}
          alt="Catlike Productions"
        />
      </Link>
      <nav>
        <Scrollspy
          items={tabs.map(s => s.href)}
          currentClassName="active"
          offset={-300}
        >
          {tabs.map(tab => (
            <Tab key={tab.href} {...tab} />
          ))}
        </Scrollspy>
      </nav>
    </header>
  );
};

export default Header;
