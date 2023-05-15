import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
//   import Tooltip from '@mui/material/Tooltip';

  
const Footer = () => {
  return (
    <div className='footer-container'>




    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          
            <MDBIcon fab icon='twitter' />
            
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter
                 </strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
          Join the Adventure newsletter to receive our best vacation deals
          </p>
        </section>

        <section className=''>
            
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>About Us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                     How it works
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Testinmonals
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Career
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Terms of Services
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact Us</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Support
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Destination
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Sponsorships
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Videos</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Submit video
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                Ambassadors
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Agency
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Influencer
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Social Media</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Youtube
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Twitter
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 WANDER
       
      </div>
    </MDBFooter>
      
    </div>
  )
}

export default Footer
