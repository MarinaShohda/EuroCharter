import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from '../Navbar';
import Footer from '../Footer';

function Contact() {

  
  // scroll animation
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, []);

  // data-aos="fade-right" data-aos="fade-up"

  return (
    <>
      <Navbar />
      <Container className=" main container section">
          <div className="contactContainer">
            <Title className="flex">
              <h3 data-aos="fade-right" className="title">Contact Us</h3>
              <p data-aos="fade-up" >Thank you for choosing <b>EuroCharter</b> for your travel needs. We are here to assist you and provide the best customer service possible. If you have any questions, concerns, or need assistance with your travel plans, please don't hesitate to get in touch with us.</p>
            </Title> 
          

            <Content>
              <div className="content flex">
                <div className="textDiv">


                  <div className="sec" data-aos="fade-up">
                    <h3 data-aos="fade-right">How to Reach Us:</h3>
                    <h4 data-aos="fade-right">Customer Support</h4>
                    <p>Our customer support team is available around the clock to assist you with any inquiries or issues you may have.</p>
                    <ul>
                      <li><b>- Phone: </b>+20 101-381-2562</li>
                      <li><b>- Email: </b>Sales@eurocharter.eu.com</li>
                    </ul>
                  </div>

                  <div className="sec" data-aos="fade-up">
                    <h4 data-aos="fade-right">Office Hours</h4>
                    <ul>
                      <li>- Monday to Friday: 8:00 AM - 8:00 PM (local time)</li>
                      <li>- Saturday: Closed</li>
                      <li>- Sunday: Closed</li>
                    </ul>
                  </div>

                  <div className="sec" data-aos="fade-up">
                    <h4 data-aos="fade-right" >Get In Touch</h4>
                    <p>If you prefer to send us a message or have a specific inquiry, please use the contact form below. Our team will respond to your message as soon as possible.</p>
                    <form action="" className="form flex">
                      <label >Your Name:</label>
                      <input type="text"  placeholder="Enter Name..." />

                      <label >Your Email:</label>
                      <input type="email"  placeholder="Enter Email Address..."  />

                      <label >Tell us how we can help..</label>
                      <textarea  cols="29" rows="5" placeholder="Enter Inquiry, Question or concern..." ></textarea>

                      <button type="submit" className="btn">Send</button>
                    </form>
                  </div>

                  <div className="sec" data-aos="fade-up">
                    <h4 data-aos="fade-right" >Your Feedback Matters</h4>
                    <p>We value your feedback and are continuously working to improve our services.</p>
                  </div>

                  <div className="sec" data-aos="fade-up">
                    <p>We appreciate your trust in <b>EuroCharter</b>, and we look forward to assisting you with your travel plans. Your satisfaction is our priority, and we are dedicated to making your travel experience smooth and enjoyable.</p>
                  </div>

                </div>

                <div className="imgDiv">
                  <img src="https://images.pexels.com/photos/2413238/pexels-photo-2413238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>

              </div>
            </Content>
          </div>
      </Container>
      <Footer />
    </>
  )
}

export default Contact


const Container = styled.div`
  padding-bottom: 10rem;



  @media screen and (max-width: 500px){
    padding-bottom: 4rem;

    .contactContainer {
      padding: 0;
      margin: auto auto;
      text-align: center;

    }
  }

  @media (min-width: 500px) and (max-width: 1199px){
    padding-bottom: 4rem;

    .contactContainer {
      padding: 0;
      margin: auto;
      width: 80%
    }
  }
`
const Title = styled.div`
  
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: hsl(240, 4%, 36%);
  margin: 4rem 0;

  h3  {
    font-size: 2rem;
  }
  p {
    width: 93%;
    max-width: 600px;
    margin-top: 2rem;   
  }

  @media screen and (max-width: 500px){
  .title {
      font-size: 1.5rem;
      padding: 0.5rem;
  }
  p {
    margin-top: 1rem;
    width: 95%;
  }
  }

 @media (min-width: 500px) and (max-width: 1199px){
  .title {
      font-size: 2rem;
  }
  p {
    margin-top: 2rem;
    width: 93%;
    max-width: 600px;
  }
  }
`

const Content = styled.div`

.content {
  align-items: flex-start;

}
.textDiv {
  width: 60%;
  padding-right: 1rem;

  b {
    color: hsl(240, 4%, 36%);
    font-weight: 700;
    color: #303035;
  }

  .sec {
    margin-bottom: 4rem;

    h3 {
      margin-bottom: 1.5rem;
      color: #595961;
      font-weight: 800;
      font-size: 1.7rem;
    }
    h4 {
      margin-bottom: 0.5rem;
      color: #595961;
      font-weight: 800;
      font-size: 1.3rem;
    }
    ul {
      margin-top: 0.5rem;
    }

  }

  .form {
    align-items: flex-start;
    flex-direction: column;
    // background: #a7a;
    
    label {
      margin: 1.5rem 0 0.3rem 0;
    }
    input {
      padding: 0.5rem .3rem;
      border-radius: 1rem;
      border: 1px solid #595961;
      outline: none;
      background: transparent;
      color: #595961;

      &::placeholder{
        color: #595961;
        opacity: .6;
        font-size: 0.9rem;

      }
    }
    textarea {
      padding: 0.5rem .6rem;

      border-radius: 1rem;
      border: 1px solid #595961;
      outline: none;
      background: transparent;
      color: #595961;

      &::placeholder{
        color: #595961;
        opacity: .6;
        font-size: 0.9rem;
      }
    }
  .btn {
    margin-top: 2rem;
    background: #0073a8;
    color: #fff;
    font-weight: 500;
    font-size: 1rem;
    width: 50%;
    max-width: 160px; 
  }
  }
}


  .imgDiv {
    width: 40%;


    img {
      width: 100%;
      border-radius: 0.3rem;
      overflow: hidden;
      transition: 0.7s ease;
      transform: scale(0.9);
      transition: .5s ease;
      overflow: hidden;
    }
    &:hover img {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 500px){

    .textDiv {
      width: 100%;

      ul {
        margin-top: 0.5rem;
      }

      p,
      li,
      label {
        font-size: 0.958rem;
        // color: #f00;

      }

      .sec {
        h4 {
          font-size: 1.2rem;
          // color: #a7a;
        }
      }

    .form {
      align-items: center;
      .btn {
        width: 50%;
      }
    }
    }

    .imgDiv {
      display: none;
    }
  }


 @media (min-width: 500px) and (max-width: 800px){

    .textDiv {
      width: 100%;

      ul {
        margin-top: 0.5rem;
      }

      p,
      li,
      label {
        font-size: 0.95rem;
      }

    .form {
      margin-top: 1.5rem;
      align-items: center;
      .btn {
        width: 50%;
      }
    }
    }

    .imgDiv {
      display: none;
    }
  }
`