import styled from "styled-components";
import { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import logo from "../Assets/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState('navBar');
  
  // Toggle Navbar funstion
  const showNav = () => {
    setActive('navBar activeNavbar')
  }

    // Toggle close funstion
  const removeNavbar = () => {
    setActive('navBar')
  }




  return (
    <NavBarSection>
      <Header className="header flex"> 
        <LogoAndName className="logoAndName">
          <Link to="/" className="logo flex">
            <div className="logoDiv">
              <img src={logo} alt="EutoCharter logo" />
            </div>
            <h1>EuroCharter.</h1>
          </Link>
        </LogoAndName>

        <NavBar className={active}> 
          <NavLists className="navLists flex ">

            <li className="navItem">
              <Link to="/about" className="navLink">About</Link>
            </li>
            <li className="navItem">
              <Link to="/faqs" className="navLink">FAQs</Link>

            </li>
            <li className="navItem">
              <Link to="/covid19" className="navLink">Covid-19</Link>

            </li>
            <li className="navItem">
              <Link to="/news" className="navLink">News</Link>

            </li>
            <li className="navItem">
              <Link to="/contactus" className="navLink">Contact Us</Link>

            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </NavLists>

          <CloseNavbar onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </CloseNavbar>
        </NavBar>

        <ToggleNavbar className="toggleNavbar" onClick={showNav} >
          <TbGridDots className="icon" />
        </ToggleNavbar>
      </Header>    
      </NavBarSection>
  )
}
export default Navbar



const NavBarSection = styled.section`
.logoAndName {
  width: 30%;

  .logo {
    color: #000;
    font-weight: 600;
    cursor: pointer;
    align-items: center;
  } 
  img {
    width: 70%;
    max-width: 75px;
    min-width: 46px;
  }
  

      @media screen and (max-width: 768px){
        img {
          max-width: 55px;
        }
      }
  
}

// --------------------------
.header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: hsl(0, 0%, 93%);
  width: 100%;
  padding: 1rem ;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(2, 15, 29, 0.242);


  .btn{
    // margin-top: 1rem;
    background: hsl(199, 100%, 33%);

    a {
      font-weight: 600;
      color: #fff;
    }
  }

}

@media screen and (max-width: 768px){
  .navBar {
    position: absolute;
    background: hsl(0, 0%, 93%);
    width: 80%;
    border-radius: 1rem;
    top: -50rem;
    left: 50%;
    padding: 1rem;
    transform: translate(-50%);
    z-index: 2000;
    box-shadow: 0 2px 4px rgba(2, 15, 29, 0.904);
    transition: 0.3s ease-in-out;

    .navLists {
      flex-direction: column;
      justify-content: center;
      width: 100%;
      margin: auto;
      padding: 0.5rem 0;
      
      .navItem {
        padding: 0.5rem 0;

        .navLink {
          color: hsl(240, 4%, 36%);
          font-size: 0.9rem;
          font-weight: 600;
          &:hover{
            color: hsl(199, 100%, 33%);
          }
        }
      }


    }


    .closeNavbar {
      position: absolute;
      top: 1rem;
      right: 1.5rem;
      color: hsl(199, 100%, 33%);

      &:hover {
        color: hsl(187, 85%, 43%);
      }
    }
  }
  .activeNavbar {
    top: 6rem
  }
}

.toggleNavbar {
  padding-right: 1rem;

  .icon {
    font-size: 25px;
    color: hsl(199, 100%, 33%);
  }
  &:hover .icon{
    color: hsl(187, 85%, 43%);
  }
}


// media queries ........................................

@media screen and (min-width: 769px) {
.toggleNavbar, 
.closeNavbar {
  display: none;
}
.header {
  padding: 1.5rem 2rem;
  align-items: center;

  .navLists {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .navItem{
      .navLink{
        color: hsl(240, 4%, 36%);
        padding: 0 0.45rem;
        font-size: 0.9rem;
        font-weight: 500;
        // background: #a7a;

        &:hover {
          color: hsl(199, 100%, 33%);
        }
        
      }
    }
    .btn {
      margin-left: 1rem;
      a{
        color: #fff;
        font-weight: 500;
      }
    }
  }
}

}

@media screen and (min-width: 960px) {
  .navLists {
    .navItem {
      padding: 0 0.7rem;
    }
  }
}

@media screen and (min-width: 1240px) {
  .header {
    padding: 1rem 8.5rem;
  }
}






`



const Header = styled.header`
`
const LogoAndName = styled.div`
`
const NavBar = styled.div`
`
const NavLists = styled.ul`
`
const CloseNavbar = styled.div`
`
const ToggleNavbar = styled.div`
`