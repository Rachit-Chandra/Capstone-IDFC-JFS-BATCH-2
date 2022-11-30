import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <div>
      <MDBFooter bgColor='' className='text-center text-lg-start '>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
          <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="" target="_blank">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="#">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to="#">
                  <i class="ri-youtube-line"></i>
                </Link>{" "}
              </span>

              <span>
                {" "}
                <Link to="#">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
           </div>
            {/* <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a> */}
          </div> 
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  Quick Medi
                </h6>
                <p>
                Quick Medi brings to you an online platform, which can be accessed for all your health needs. We are trying to make healthcare a hassle-free experience for you. Get your allopathic, ayurvedic, homeopathic medicines, vitamins & nutrition supplements and other health-related products delivered at home.
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Skin Care
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    MultiVitamins
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Supplements
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Diet & Nutrition 
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='#!' className='text-reset'>
                    Home Page
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Cart
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Products
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Request Medicine
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <p><h6 className='text-uppercase fw-bold mb-4'>Contact</h6></p>
                <p>
                  {/* <MDBIcon icon="home" className="me-2" /> */}
                  26 B1 Clive Road Prayagraj, UttarPradesh 211001 
                </p>
                <p>
                  {/* <MDBIcon icon="envelope" className="me-3" /> */}
                  info@quickmedi.com
                </p>
                <p>
                  {/* <MDBIcon icon="phone" className="me-3" /> */}
                  +918115659349
                </p>
                <p>
                  {/* <MDBIcon icon="print" className="me-3" /> */}
                  +919696009888
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2022 Copyright:
          <a className='text-reset fw-bold' href='#'>
            quickmedi.com
          </a>
        </div>
      </MDBFooter>
    </div>
    // <></>
  );
};

export default Footer;
