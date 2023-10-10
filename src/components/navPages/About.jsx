import styled from "styled-components";
import { useEffect } from "react";
import { RxDot } from "react-icons/rx";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from '../Navbar';
import Footer from '../Footer';

function About() {

  // scroll animation
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, []);
  // data-aos="fade-right" data-aos="fade-up"

  return (
    <>
      <Navbar />
      <div>
        <Container className="main container section">
          <Title className="flex">
              <h3 className="title"  data-aos="fade-right" data-aos-duration="2000">About EuroCharter</h3>
          </Title> 

          <Content >
            <div>
              <p data-aos="fade-up">At <span>EuroCharter</span>, we're your trusted partners in travel. We understand that your journey is more than just a flight; it's an adventure, an experience, and a collection of cherished memories. With us, you're not just booking a ticket; you're opening the door to a world of possibilities.</p>
              
              <h3 data-aos="fade-right" data-aos-duration="4000">Our Commitment</h3>
              <p data-aos="fade-up">Our commitment is simple: to provide you with the best travel solutions tailored to your needs. Whether you're jetting off for business, leisure, or a little bit of both, we've got your back. With an extensive network of airlines, competitive prices, and a passion for travel, we ensure that your journey is seamless from start to finish.</p>
            
              <h3 data-aos="fade-right" >Why Choose Us?</h3>
              <ul>
                <li data-aos="fade-up"> <b>Expertise:</b> Our team of travel experts has a wealth of knowledge and experience to assist you in planning your dream trip.</li>
                <li data-aos="fade-up"> <b>Variety:</b> Discover a wide range of flight options, from budget-friendly choices to premium experiences.</li>
                <li data-aos="fade-up"> <b>Convenience:</b> Our user-friendly platform makes it easy to search, compare, and book flights on your terms.</li>
                {/* <li> <b>Support:</b> We're here for you every step of the way, from booking to landing. Have questions or need assistance? Reach out to our 24/7 customer support.</li> */}
              </ul>

              <h3 data-aos="fade-right">Our Team</h3>
              <p data-aos="fade-up">Behind <span>EuroCharter</span> is a team of passionate globetrotters who share your love for exploration. We're dedicated to making your travel dreams come true and are committed to offering you the best service in the industry.</p>
            </div>

      

          </Content>
        </Container>
      </div>
      <Footer />
    </>
  )
  
}

export default About


const Container = styled.div`
  // padding: 6rem 3rem;

  @media screen and (max-width: 500px){
    padding: 6rem 2rem;
    text-align: center;
    .title {

    }
  }

  @media screen and (min-width: 500px){
    padding: 6rem 6rem;
    // max-width: 630px;
    
  }
`

const Title = styled.div`
  margin: 5rem 0;
  margin-bottom: 3rem;
  position: relative;
  width: max-content;
  color: hsl(240, 4%, 36%);
  // margin: 1rem 0;
  z-index: 2;
  

  &::after {
    position: absolute;
    content: '';
    background: hsl(187, 85%, 43%);
    height: 5px;
    width: 120px;
    right: 0;
    bottom: 4px;
    z-index: -1;
  }
  

  @media screen and (max-width: 500px){
    Title {
      align-items: center;
    }
    
    .title {
        font-size: 1.5rem;
        padding-left: 0.8rem;
        align-self: center;
        // color: #a7a;
    }
  
    &::after {
      width: 150px;
    }
  
   }

  @media screen and (min-width: 500px){

    .title {
      
        font-size: 2rem;
        // color: #a7a; 
    }
  
    &::after {
      width: 155px;
    }
  
   }

`

const Content = styled.div`
  max-width: 800px;
   margin-top: 2rem;
   margin-bottom: 3rem;
   margin: auto auto;

   span {
    color: #58585f;
    font-weight: 700;
    font-size: 1.1rem;
   }

   h3 {
    margin: 5rem 0 0.7rem;
    margin-bottom: 1.5rem;
    color: #58585f;
    font-size: 1.5rem;
   }

   .icon {
    padding-top: 0.8rem;
   }

   li {
    // margin-left: 1rem;
    // margin-bottom: 1.3rem;
    margin: 1.4rem 0.8rem;

    b {
      display: block;
      color: #58585f;
      
      
    }
   }
   @media screen and (max-width: 500px){
    h3 {
      font-size: 1.5rem;
    }

   }
   @media screen and (min-width: 500px){

   }

`