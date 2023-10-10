import styled from "styled-components";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from '../Navbar';
import Footer from '../Footer';

function Covid() {

  
  // scroll animation
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, []);

  // data-aos="fade-right" data-aos-duration="2000"


  return (
    <>
      <Navbar />
      <Container className=" main container section">
        <div className="covidContainer">
          <Title className="flex" data-aos="fade-right">
            <h3 className="title">Traveling to Europe During COVID-19</h3>
            {/* <h4></h4> */}
          </Title> 

          <Content>
            <p data-aos="fade-up">The allure of Europe's rich history, stunning landscapes, and diverse cultures has always been a magnet for travelers worldwide. However, the COVID-19 pandemic has changed the way we explore and experience the continent. Traveling to Europe in the midst of the pandemic requires careful planning, flexibility, and a commitment to safety. In this article, we'll explore essential information and tips for those considering a European adventure while navigating the challenges posed by COVID-19.</p>

            <div className="sec" data-aos="fade-up">
              <h4>Entry Requirements and Travel Restrictions</h4>
              <p>Before embarking on your journey to Europe, it's crucial to research the entry requirements and travel restrictions imposed by your chosen destination. These requirements can vary from country to country and may include:</p>
              <ol>
                <li data-aos="fade-right"><b>1. COVID-19 Testing:</b> Many European countries require travelers to provide a negative COVID-19 test result (usually a PCR test) taken within a specified timeframe before departure. Some destinations may also require testing upon arrival.</li>
                <li data-aos="fade-right"><b>2. Vaccination Status:</b> Some countries may offer relaxed entry requirements or exemptions to fully vaccinated travelers. Be prepared to provide proof of vaccination if applicable.</li>
                <li data-aos="fade-right"><b>3. Quarantine:</b> Some countries may mandate quarantine upon arrival, either at a government facility or a designated accommodation. The length of quarantine can vary.</li>
                <li data-aos="fade-right"><b>4. Travel Insurance: </b>It's advisable to have travel insurance that covers COVID-19-related medical expenses and trip cancellations. Check the policy details to ensure adequate coverage.</li>
                <li data-aos="fade-right"><b>5. Digital Health Passports:</b> Many European countries are adopting digital health passports or COVID-19 certificates as proof of vaccination or test results. Familiarize yourself with the specific requirements of your destination.</li>
              </ol>
            </div>

            <div className="sec" data-aos="fade-up">
              <h4>Monitoring the Situation</h4>
              <p>The COVID-19 situation in Europe is fluid, with infection rates, vaccination campaigns, and travel restrictions changing regularly. Before and during your trip, stay updated on the latest developments by monitoring reputable sources such as the World Health Organization (WHO), the Centers for Disease Control and Prevention (CDC), and the official government websites of your home country and your destination.</p>
            </div>

            <div className="sec" data-aos="fade-up">
              <h4>Health and Safety Precautions</h4>
              <p>Traveling during a pandemic requires extra precautions to protect yourself and others. Here are some safety measures to keep in mind:</p>
              <ol>
                <li data-aos="fade-right"><b>1. Mask-Wearing:</b> Follow local guidelines on mask-wearing in public places, transportation, and indoor spaces. Always carry a supply of masks and hand sanitizer.</li>
                <li data-aos="fade-right"><b>2. Social Distancing:</b> Maintain physical distancing in crowded areas and follow any marked guidelines.</li>
                <li data-aos="fade-right"><b>3. Hand Hygiene:</b> Practice frequent handwashing with soap and water, and use hand sanitizer when soap is not available.</li>
                <li data-aos="fade-right"><b>4. Avoid Crowds:</b> Consider visiting popular attractions during off-peak hours to minimize exposure to large crowds.</li>
                <li data-aos="fade-right"><b>5. Respect Local Rules:</b> Be respectful of local regulations and guidelines, even if they differ from your home country's rules.</li>
              </ol>
            </div>

            <div className="sec" data-aos="fade-up">
              <h4>Flexible Travel Plans</h4>
              <p>Given the uncertainty of the pandemic, it's crucial to have flexible travel plans. Flight schedules, hotel bookings, and attraction openings can change due to the evolving situation. Consider booking refundable or flexible tickets and accommodations, which can offer peace of mind if you need to change your plans.</p>
            </div>

            <p data-aos="fade-up">Traveling to Europe during COVID-19 can still be a rewarding experience, provided you are well-prepared and prioritize safety. Careful research, adherence to health guidelines, and flexibility in your plans are key to enjoying your European adventure while safeguarding your health and the health of others. Remember that the situation can change, so staying informed and adaptable is essential for a successful trip. Europe's beauty and culture await, and with the right precautions, you can explore its wonders responsibly.</p>
          </Content>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default Covid


const Container = styled.div`
  padding: 7rem 1rem;
  padding-bottom: 10rem;
  // background: #aaa;

  @media screen and (max-width: 500px){
    .covidContainer {
      padding: 0 1.5rem;
      margin: auto auto;

    }
  }

  @media screen and (min-width: 500px){
    .covidContainer {
      padding: 0 2rem;
      // max-width: 500px;
      margin: auto auto;
    }
  }

`

const Title = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  // background: #fff;
  color: hsl(240, 4%, 36%);
  margin: 4rem 0;

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
  max-width: 800px;
  margin: 0 auto;
  // text-align: center;
  // background: #17a;


  .sec {
    margin: 3rem 0;
  }

  h4 {
    margin-bottom: 0.5rem;
    color: #595961;
    font-weight: 800;
    font-size: 1.5rem;
  }

  ol {
    margin-top: 0.7rem;
     b {
      color: hsl(240, 4%, 36%);
      font-weight: 700;
      color: #595961;
    }
    li {
      margin: 0.5rem 0;
    }
  }

  @media screen and (max-width: 500px){
    p,
    li {
      font-size: 0.958rem;
    }
    h4 {
      font-size: 1.2rem;
    }
  }
  @media screen and (min-width: 500px){
    p,
    li {
      font-size: 1rem;
    }
    h4 {
      font-size: 1.5rem;
    }
  }




`