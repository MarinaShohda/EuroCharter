import styled from "styled-components";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Data  = [
  {
      id: 1,
      imgSrc: 'https://images.pexels.com/photos/416024/pexels-photo-416024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      destTitle: 'Copenhagen, Denmark',
      origin: 'Cairo',
      destin: 'Denmark',
      departure: '30.Sep.2023',
      returnn: '7.Oct.2023',
      fees: '€700',
  },
  {
      id: 2,
      imgSrc: 'https://images.pexels.com/photos/18255038/pexels-photo-18255038/free-photo-of-panorama-of-porto-with-a-ship-sailing-on-a-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      destTitle: 'Porto, Portugal',
      origin: 'Greece',
      destin: 'Portugal',
      departure: '5.Oct.2023',
      returnn: '20.Oct.2023',
      fees: '€500',

  },
  {
      id: 3,
      imgSrc: 'https://images.pexels.com/photos/11631647/pexels-photo-11631647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      destTitle: 'Ibiza, Spain',
      origin: 'Albania',
      destin: 'Denmark',
      departure: '20.Oct.2023',
      returnn: '27.Oct.2023',
      fees: '€800',
  },
  {
    id: 4,
    imgSrc: 'https://images.pexels.com/photos/18285007/pexels-photo-18285007/free-photo-of-people-relaxing-on-a-narrow-sea-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    destTitle: 'Palma, Spain',
    origin: 'Germany',
    destin: 'Spain',
    departure: '23.Sep.2023',
    returnn: '30.Sep.2023',
    fees: '€700',
  },
  {
    id: 5,
    imgSrc: 'https://images.pexels.com/photos/5511533/pexels-photo-5511533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    destTitle: 'San Sebastian, Spain',
    origin: 'France',
    destin: 'Spain',
    departure: '25.Oct.2023',
    returnn: '5.Nov.2023',
    fees: '€350',
  },
  {
      id: 6,
      imgSrc: 'https://images.pexels.com/photos/164041/pexels-photo-164041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      destTitle: 'Santorini, Greece',
      origin: 'Portugal',
      destin: 'Greece',
      departure: '27.Sep.2023',
      returnn: '10.Oct.2023',
      fees: '€300',
  },

  {
      id: 7,
      imgSrc: 'https://images.pexels.com/photos/17355986/pexels-photo-17355986/free-photo-of-aerial-view-of-saint-malo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      destTitle: 'Sainte-Maxime, France',
      origin: 'Greece',
      destin: 'France',
      departure: '2.Nov.2023',
      returnn: '16.Nov.2023',
      fees: '€550',
  },
  {
      id: 8,
      imgSrc: 'https://images.pexels.com/photos/1796705/pexels-photo-1796705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      destTitle: 'Amsterdam, Netherlands',
      origin: 'Italy',
      destin: 'Netherlands',
      departure: '30.Sep.2023',
      returnn: '13.Oct.2023',
      fees: '€650',
  },
  {
      id: 9,
      imgSrc: 'https://images.pexels.com/photos/13865548/pexels-photo-13865548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      destTitle: 'Poznan, Poland',
      origin: 'Georgia',
      destin: 'Poland',
      departure: '1.Nov.2023',
      returnn: '15.Nov.2023',
      fees: '€450',
  },
];


function Main() {

  // scroll animation
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, []);
  
  return (
    <Container className="main container section">
        <Title>
          <h3 className="title"  data-aos="fade-right">Promo Tickets</h3>
        </Title> 

        <Content className="content grid">
        {
          Data.map(({id, imgSrc, destTitle, origin, destin, departure, returnn,  fees})=>{
            return (
              <Ticket key={id}  data-aos="fade-up">

                <div className="imgDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <CardInfo>
                  <h4 className="destTitle">{destTitle}</h4>

                  <span className="content flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="route">From {origin} to {destin}</span>
                  </span>

                  <Details>
                    <div className="dates">
                      <SlCalender className="icon" /> <span>Departure: {departure}</span>
                      <br />
                      <SlCalender className="icon" /> <span>Return: {returnn}</span>
                    </div>
                    <div className="fees">
                      <span>{fees}</span>
                    </div>
                  </Details>

                  <Button className=" flex">
                    <button>Book</button>
                  </Button>

                </CardInfo>

              </Ticket>
            )
            
          })
        }
        </Content>
    </Container>
  )
}

export default Main


const Container = styled.div`
`
const Title = styled.div`
  position: relative;
  width: max-content;
  color: hsl(240, 4%, 36%);
  margin: 1rem 0;
  z-index: 2;

  &::after {
    position: absolute;
    content: '';
    background: hsl(187, 85%, 43%);
    height: 5px;
    width: 120px;
    right: 0;
    bottom: 5px;
    z-index: -1;
  }

  @media screen and (max-width: 500px){
    h3 {
      font-size: 1.4rem;
      // color: #f00;
    }
  }
@media screen and (min-width: 500px){
  .title {
      font-size: 2rem;
  }
  &::after {
    width: 155px;
  }
 }
`
const Content = styled.div`
  justify-content: center;
  gap: 1.5rem;
`
const Ticket = styled.div`
  height: 100%;
  display: grid;
  row-gap: 10px;
  border-radius: 10px;
  align-items: center;
  background: rgb(255, 255, 255);
  // padding: 1rem;
  box-shadow: 0 2px 4px rgba(140, 140, 141, 0.549);
  overflow: hidden;

  &:hover {
    background: rgb(255, 255, 255);
    box-shadow: 1 4px 4px rgba(85, 85, 114, 0.549);
    transition: .3s ease;
  }

  .imgDiv {
    height: 180px;
    width: 100%;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: 2s ease;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

`

const CardInfo = styled.div`
  padding: 1rem;

  .destTitle {
    color: #000;
    font-size: 1.25rem;
  }

  .content {
    gap: .5rem;

    .icon {
      color: hsl(240, 4%, 36%);
      font-size: 18px;
    }
  }

  .route {
    color: hsl(240, 4%, 36%);
    font-weight: 400;
    font-size: 14px;
  }

`

const Details = styled.div`

  padding: .5rem 0rem;

.dates {
  font-size: 14px;
  padding-bottom: 0.7rem;

  .icon {
    font-size: 12px;
    margin: 0 0.4rem 0 0.2rem;

  }
}

  .fees {
    font-size: 2rem;
    font-weight: 500;
  }
`

const Button = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 3rem;
  padding: 0.6rem 0;
  background: #fff;
  border-radius: 0.2rem;
  border: 1px solid #B2B2B2;
  cursor: pointer;

  button {
    border: none;
    background: none;
    font-size: 1rem;
    color: #8E8E8E;
    transition: 0.1s ease;

  }

  &:hover {
    background: hsl(199, 100%, 33%);
    
    button {
      color: #fff;
    }

  }
`