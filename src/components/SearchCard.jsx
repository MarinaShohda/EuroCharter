import styled from "styled-components";
import mountains from "../Assets/mountains.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { IoBodyOutline } from "react-icons/io5";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function SearchCard() {

  // scroll animation
  useEffect(()=> {
    Aos.init({duration: 2000})
  }, []);

  return (
    <HomeContainer className="homeContainer">

    <Overlay className="overlay"></Overlay>
    <Video src={mountains} muted autoPlay loop type="video/mp4" ></Video>

    <HomeContent className="container">
        <TextDiv>
        <span data-aos="fade-up" className="smallText">Welcome to EuroCharter</span>
        <h1  data-aos="fade-up" className="homeTitle">Search your Holiday</h1>
        </TextDiv>

        <CardDiv  data-aos="fade-up" className="cardDiv grid">
        <InputBox>
            <label htmlFor="origin">From:</label>
            <div className="input flex">
            <input type="text" placeholder="Enter city here..." />
            <GrLocation className="icon" />
            </div>
        </InputBox>

        <InputBox>
            <label htmlFor="destination">To:</label>
            <div className="input flex">
            <input type="text" placeholder="Enter city here..." />
            <GrLocation className="icon" />
            </div>
        </InputBox>


        <InputBox className="dateInput">
            <label htmlFor="departure">Departure Date:</label>
            <div className="input flex">
            <input  type="date" />

            </div>
        </InputBox>

        <InputBox className="dateInput">
            <label htmlFor="return">Return Date:</label>
            <div className="input flex">
            <input type="date"/>
            </div>
        </InputBox>

        <InputBox className="travelers">
            <label htmlFor="travelers">Travelers:</label>
            <div className="input flex">
            <input type="number" placeholder="1 Adult" />
            <IoBodyOutline className="icon" />

            </div>
        </InputBox>


        <div className="advancedSearch">
            <HiFilter className="icon" />
            <span>Advanced Search</span>
        </div>

        </CardDiv>
    </HomeContent>
    

    
    </HomeContainer>

  )
}

export default SearchCard


const HomeContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding-bottom: 3rem;
  
// media queries ..............................................

`
const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgb(47, 106, 127);
  top: 0;
  bottom: 0;
  z-index: 1;
  mix-blend-mode: hard-light;
  top: 0;
  bottom: 0;
  z-index: 1;


`
const Video = styled.video`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  object-fit: cover;
`
const HomeContent = styled.div`
  z-index: 100;
  width: 100%;
  height: max-content;
  padding: 8rem 1.5rem 3rem;
  display: flex;
  row-gap: 3rem;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin: auto;
  color: hsl(0, 0%, 100%);
`
const TextDiv = styled.div`
  padding: 2rem 0;

  .smallText {
    font-size: 13px;
    text-transform: uppercase;
  }

  .homeTitle {
    position: relative;
    font-size: 1.8rem;
  }


  @media screen and (min-width: 500px){
    .smallText {
      font-size: 16px;
    }

    .homeTitle {
      position: relative;
      font-size: 2.3rem;
      width: max-content;
      // color: #f00;

      &::after {
        position: absolute;
        content: '';
        background: hsl(199, 100%, 33%);
        // background: red;
        height: 5px;
        width: 145px;
        right: 0px;
        bottom: 5px;
        z-index: -1;
      }
    }



  }



`
const CardDiv = styled.div`
  position: relative;
  padding: 2rem 1rem;
  background: #fff;
  // background:	rgb(255,255,0);

  border-radius: 10px;
  gap: 1rem;
  // padding-bottom: 5rem;


  .advancedSearch {
    position: absolute;
    background: linear-gradient(to right, hsl(187, 85%, 43%), hsl(199, 100%, 33%));
    width: max-content;
    bottom: -0.7rem;
    column-gap: .8rem;
    padding: 5px 1rem;
    border-radius: 3rem;
    left: 50%;
    transform: translate(-50%);
    justify-content: center;
    cursor: pointer;

    &:hover{
      background: hsl(199, 100%, 33%);
    }

    .icon {
      font-size: 18px;
    }
    span {
      font-size: 13px;
    }
  }
  


`
const InputBox = styled.div`

  label {
    display: block;
    color: hsl(240, 4%, 36%);
    padding-bottom: 10px;
    font-size: 13px;
    font-weight: 500;
  }

  .input {
    height: 40px;
    padding: 0 1rem;
    background: rgb(239, 239, 239);
    border-radius: 3rem;

    input {
      background: none;
      border: none;
      outline: none;
      width: 100%;
      font-size: 13px;
      font-weight: 500;
      &::placeholder {
        font-size: 13px;
      }
    }

    .icon {
      font-size: 18px;
      color: hsl(199, 100%, 33%);
      margin-left: 10px;
    }
  }

`