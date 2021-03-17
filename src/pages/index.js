import React from 'react';

import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import SEO from '../components/common/seo';

import SimpleReactLightbox from 'simple-react-lightbox';

import Introduction from '../components/introduction/Introduction';
// import Features from '../components/features/Features';
// import Capabilities from '../components/capabilities/Capabilities';
import Contact from '../components/contact/Contact';
import About from '../components/about/About';
import Partners from '../components/partners/Partners';
import References from '../components/references/References';
import TrailersFiction from '../components/trailers/TrailersFiction';
import TrailersDocumentary from '../components/trailers/TrailersDocumentary';
import TrailersTv from '../components/trailers/TrailersTv';
// import VideoLightbox from '../components/videos/Video';

// import ReactImageVideoLightbox from 'react-image-video-lightbox';

const IndexPage = () => (
  <SimpleReactLightbox>
    <Layout>
      <SEO title="Catlike Production" />
      <Header />
      <div id="wrapper">
        <Introduction />
        <TrailersFiction />
        <TrailersDocumentary />
        <TrailersTv />
        {/* <VideoLightbox /> */}
        <About />
        <Partners />
        <References />
        <Contact />
      </div>

      <Footer />
    </Layout>
  </SimpleReactLightbox>
);

export default IndexPage;
