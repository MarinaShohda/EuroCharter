import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Faqs() {

  // scroll animation
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, []);

  // data-aos="fade-right" data-aos-duration="2000"

  return (
    
      <Container className="main container section">
        <Title className="flex" data-aos="fade-right">
              <h3 className="title">Frequently Asked Questions</h3>
        </Title> 
          
        <Content className="">
          <div className="grid content ">
            {/* question 1 */}
            <div className="item"  data-aos="fade-up">
              <div className="question">
                <h4>How do I search for flights on your website?</h4>
              </div>
              <div className="answer">
                  <ul>
                    <li><b>1.</b> Navigate to our Home page and then go to the search box.</li>
                    <li><b>2.</b> Start by selecting your departure city, destination city</li>
                    <li><b>3.</b> Select your departure date and if your flight is a round-trip, select a return date as well.</li>
                    <li><b>4.</b> Specify the number of adults, children, and infants traveling with you.</li>
                    <li><b>5.</b> Click "Search"</li>
                  </ul>
              </div>
            </div>
            {/* question 2 */}
            <div className="item"  data-aos="fade-up">
              <div className="question">
                <h4>Can I request special requests, such as meal preferences or assistance for passengers with disabilities?</h4>
              </div>
              <div className="answer">
                <p>Yes, you can request special accommodations, including dietary preferences and assistance for passengers with disabilities, when booking your flight. Airlines are generally committed to providing a safe and comfortable travel experience for all passengers and will do their best to accommodate your needs.</p>
              </div>
            </div>
            {/* question 3 */}
            <div className="item"  data-aos="fade-up">
              <div className="question">
                <h4>Can I book tickets for multiple passengers at once?</h4>
              </div>
              <div className="answer">
                <p>Definitely you can. In the flight search box, make sure to specify the number of adults, children, and infants traveling with you. Use the dropdown menus to set these values. </p>
              </div>
            </div>
            {/* question  4*/}
            <div className="item" data-aos="fade-up">
              <div className="question">
                <h4>What payment methods do you accept?</h4>
              </div>
              <div className="answer">
                <p>- Credit Cards .</p>
                <p>- Debit Cards.</p>
                <p>- Bank Transfers.</p>
              </div>
            </div>
            {/* question 5 */}
            <div className="item" data-aos="fade-up">
              <div className="question">
                <h4>How do I receive my tickets after booking?</h4>
              </div>
              <div className="answer">
                <p>Confirmation email will be sent to you with the flight details after booking with few minutes up to maximum 24 hours.</p>
              </div>
            </div>
            {/* question 6 */}
            <div className="item" data-aos="fade-up">
              <div className="question">
                <h4>Can I make changes to my booking after it's confirmed?</h4>
              </div>
              <div className="answer">
                <p>Whether or not you can make changes to your booking after it's confirmed depends on several factors, including the airline you're flying with, the type of ticket you purchased, and the specific booking policies.</p>
              </div>
            </div>
            {/* question 7 */}
            <div className="item" data-aos="fade-up">
              <div className="question">
                <h4>What is your cancellation and refund policy?</h4>
              </div>
              <div className="answer">
                <p>Airline cancellation and refund policies can vary widely depending on the airline, the type of ticket you've purchased, and the specific circumstances surrounding your cancellation.</p>
              </div>
            </div>
            {/* question 8 */}
            <div className="item" data-aos="fade-up">
              <div className="question">
                <h4>What should I do if my flight is delayed or canceled?</h4>
              </div>
              <div className="answer">
                <p>If your flight is delayed or canceled, it can be inconvenient and frustrating, but there are steps you can take to manage your booking and minimize disruptions to your travel plans. </p>
              </div>
            </div>

       
       

          </div>
        </Content> 

      </Container>
   
  )
}

export default Faqs


const Container = styled.div`
  padding: 7rem 1rem;
  padding-bottom: 10rem;
  // background: #aaa;


  @media screen and (min-width: 500px){
    .container {
      padding: 7rem 3rem;
    }
  }
  
`

const Title = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: hsl(240, 4%, 36%);
    margin: 4rem 0;
    margin-bottom: 6rem;
  
  @media screen and (max-width: 500px){
    .title {
        font-size: 1.5rem;
    }
   }

  @media screen and (min-width: 500px){
    .title {
        font-size: 2rem;
    }
   }
`

const Content = styled.div`
   .content {
    grid-template-columns: 50% 50%;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    gap: 4rem;
   }

   .item {
    margin-bottom: 1rem;
   }
   .question {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: hsl(240, 4%, 36%);

   }

   .answer {
    font-size: 0.9rem;

    li {
      margin-bottom: 0.5rem;
    }
    
   }

   @media screen and (max-width: 730px){
    .content {
      grid-template-columns: 100%;


    }
   }

   @media screen and (min-width: 500px){
    .content {
      margin-left: 2rem;
      margin-right: 2rem;
      // background: #a7a;
    }
    .item {
    }
   }
`
