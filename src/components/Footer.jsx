import styled from "styled-components";
import { FiChevronRight, FiPhone, FiSend } from "react-icons/fi";
import { AiOutlinePhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";

import landscape from "../Assets/landscape.mp4";
import logo from "../Assets/logo.png";



function Footer() {

  const currentYear = new Date().getFullYear();

  // scroll animation
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, []);


  return (
    

  
    <Container className="footerContainer">
        <VideoDiv>
          <video src={landscape} loop autoPlay muted itemType="video/mp4" ></video>
        </VideoDiv> 

        <ContentLayer className="container">

          <div className="contactDiv flex">
            <div className="text"  data-aos="fade-up">
              <small>Didn't find a suitable option?</small>
              <h2>Make a Request</h2>
            </div>
            <div className="inputDiv flex">
              <input  data-aos="fade-up" type="email" placeholder="Enter Email Address" />
              <button data-aos="fade-up" className="btn flex" type="submit">
                SEND <FiSend className="icon" />
              </button>
            </div>
          </div>

          <FooterCard className="footerCard flex">
            <FooterIntro className="footerIntro flex">
              <div className="logoDiv">
                <Link to="/" className="logo flex">
                  <img src={logo} alt="Eurocharter logo" />
                  <h2>EuroCharter.</h2>
                </Link>
              </div>

              <div className="footerParagraph" data-aos="fade-up" >
              Choose EuroCharter for your next adventure and embark on a journey filled with comfort, convenience, and unforgettable memories.
              </div>

              <div className="footerSocials" data-aos="fade-up" >
                <li><AiOutlinePhone className="icon" />+20 101-381-2562</li>
               <a  href="https://wa.me/+201013812562" ><li ><BsWhatsapp className="icon" />+20 101-381-2562 </li></a>
                <li><HiOutlineMailOpen className="icon" />Sales@eurocharter.eu.com</li>
              </div>
            </FooterIntro>

            <FooterLinks className="footerLinks grid">
              {/* group 1 */}
              <div className="linkGroup"  data-aos="fade-up" data-aos-duration="4000">
                <span className="groupTitle">Our Agency</span>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  <Link to="/about" >About</Link>

                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  <Link to="/faqs">FAQs</Link>

                </li>
                {/* <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  <Link to="/news" >News</Link>

                </li> */}
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  <Link to="/covid19" >Covid-19</Link>

                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  <Link to="/contactus">Contact Us</Link>

                </li>
              </div>
              {/* group 2 */}
              <div className="linkGroup"  data-aos="fade-up" data-aos-duration="3000">
                <span className="groupTitle">Partners</span>
                {/* <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Bookings
                </li> */}
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Rentcars
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  HostelWorld
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  Trivago
                </li>
                <li className="footerList flex">
                  <FiChevronRight className="icon" />
                  TripAdvisor
                </li>
              </div>
            </FooterLinks>

            <RightsDiv className="footerDiv flex">
              <small>EuroCharter {currentYear}</small>
              <small>&copy; All Rights Reserved</small>
            </RightsDiv>
          </FooterCard>

        </ContentLayer>
    </Container>
  )
}

export default Footer


const Container = styled.footer`
  width: 100%;
  position: relative;
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;


`
const VideoDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  video {
    height: 100%;
    object-fit: cover;
    
  }

  &::after{
    content: '';
    position: absolute;
    // z-index: 20;
    background: rgba(10, 84, 107, 0.307);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    mix-blend-mode: multiply;
  }

`
const ContentLayer = styled.div`
  width: 100%;
  height: max-content;
  padding: 2rem initial;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  z-index: 100;
  row-gap: 2rem;


  .contactDiv {
    justify-content: space-between;
    flex-direction: column;
    gap: 1rem;

    .text {
      small {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
      }
      h2 {
        color: #fff;
        font-size: 1.8rem;
      }
    }
    .inputDiv {
      width: 100%;
      gap: 1rem;
      flex-direction: column;

      input {
        width: 100%;
        padding: 0.5rem .6rem;
        border-radius: 3rem;
        border: 1px solid #fff;
        outline: none;
        background: transparent;
        color: #fff;

        &::placeholder{
          color: #fff;
          opacity: .5;
        }
      }

      .btn {
        width: 100%;
        justify-content: center;
        color: #fff;
        font-weight: 500;
        gap: .5rem;
        border: 1px solid #fff;

        .icon {
          font-size: 18px;
        }
      }
    }
  }

  @media screen and (min-width: 660px){
    .contactDiv {
      width: max-content; 
      flex-direction: row;

      .inputDiv {
        width: max-content;
        flex-direction: row;
        justify-content: flex-start;

        input{
          width: 60%;
        }
  
      .btn {
          width: max-content;
      }

      }


  }

  


  }
`

const FooterCard = styled.div`
  position: relative;
  padding: 1rem 1rem 4rem;
  gap: 2rem;
  background: rgb(240, 240, 246);
  border-radius: 1rem;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;

`

const FooterIntro = styled.div`
  flex-basis: 50%;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  row-gap: .5rem;              

.logoDiv {
  width: 25%;

  .logo {
    color: hsl(199, 100%, 33%);
    font-weight: 600;            
  }

  img {
    max-width: 55px;
    margin-right: 10px;         
  }
} 

.footerParagraph {
  font-size: 13px;
  color: hsl(240, 4%, 36%);
}

.footerSocials {
  // column-gap: .5rem;
  font-size: 15px;
  color: hsl(240, 4%, 36%);

  .icon {
    font-size: 20px;
    margin-right: 0.6rem;
    // margin-top: 0.2rem;
    padding-top: 0.2rem;

    &:hover {
      color: hsl(199, 100%, 33%);
    }
  }
}

@media screen and (min-width: 1024px){
  
  
  .footerParagraph {
      font-size: 15px;
      color: hsl(240, 4%, 36%);
  }
  
  .footerSocials {
      column-gap: .5rem;
      
      .icon {
          color: hsl(240, 4%, 36%);
          font-size: 25px;
          // margin-top: 3px;
          &:hover {
              color: hsl(199, 100%, 33%);
          }
      }
  }
  
}

`
const FooterLinks = styled.div`
  flex-basis: 50%;
  width: 100%;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;

  .groupTitle {
    display: block;
    font-weight: 600;
    color: #000;
    margin-bottom: .5rem;        
  }

  .footerList {
    font-size: 15px;
    color: hsl(240, 4%, 36%);
    transition: .3s ease-in-out;

    .icon {
      font-size: 15px;
      color: rgb(190, 190, 190);        
    }

    &:hover{
      color: hsl(199, 100%, 33%);
      transform: translateX(7px);

      .icon {
        color: hsl(187, 85%, 43%);
      }
    }
  }
`
const RightsDiv = styled.div`
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: hsl(187, 85%, 43%);
  padding: .5rem 2rem;

  small {
    font-size: 10px;
    color: #fff;
  }

  @media screen and (min-width: 500px){
    small {
      font-size: 14px;
    }
  }

`