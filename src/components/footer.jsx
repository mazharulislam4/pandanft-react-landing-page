import React from 'react';
import AboutWidget from './aboutWidget';
import Address from './address';
import FooterMenuLinkWidget from './footerMenuLinkWidget';
// import Logo from './logo';
import SocialLink from './socialLink';
export default function Footer() {
  return (
      <footer className='py-5'>
          <div className={`container`}>
              <div className={`row row-cols-lg-4 gap-3 justify-content-lg-between  m-0 flex-fill flex-lg-nowrap`}>
                  <div className={`col-auto`}>
                      <AboutWidget style={{color:'#8f9ca9'}} >The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.</AboutWidget>
                  </div>
                  <div className={`col-auto`}>
                      <h2>Resources</h2>
                      <ul className={`list-unstyled m-0`} >
                          <FooterMenuLinkWidget to='/help' >
                           Help Center
                          </FooterMenuLinkWidget>
                          <FooterMenuLinkWidget to='/status' >
                          Platform Status
                          </FooterMenuLinkWidget>                          <FooterMenuLinkWidget to='/Partners' >
                           Partners
                          </FooterMenuLinkWidget>                          <FooterMenuLinkWidget to='/gasfee' >
                          Gas-Free Marketplace
                          </FooterMenuLinkWidget>
                          <FooterMenuLinkWidget to='/blog' >
                           Blog
                          </FooterMenuLinkWidget>
                       </ul>
                  </div>
                  <div className={`col-auto`}>
                  <h2>Company</h2>
                      <ul className={`list-unstyled m-0`} >
                          <FooterMenuLinkWidget to='/team' >
                          Our Team
                          </FooterMenuLinkWidget>
                          <FooterMenuLinkWidget to='/about' >
                          About Us
                          </FooterMenuLinkWidget>                          <FooterMenuLinkWidget to='/contact' >
                           Contact Us
                          </FooterMenuLinkWidget>                          <FooterMenuLinkWidget to='/career' >
                           Career
                          </FooterMenuLinkWidget>
                       </ul>
                  </div>
                  <div className={`col-auto`}>
                      <h2 className='mb-2'>Contact</h2>
                      <Address style={{color:'#8f9ca9'}} >2715 Ash Dr. San Jose, South Dakota 83475</Address>
                      <SocialLink/>
                  </div>

              </div>
              <p className='my-3' style={{color:'#8f9cf2'}} >&copy; 2021 All Right Reserved</p>
          </div>
    </footer>
  )
}
