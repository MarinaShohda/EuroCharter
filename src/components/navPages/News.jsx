import styled from "styled-components";
import Navbar from '../Navbar';
import Footer from '../Footer';

function News() {
  return (
    <>
      <Navbar />
      <Container>
        <h1>News page here</h1>
      </Container>
      <Footer />
    </>
  )
}

export default News


const Container = styled.div`
  padding-top: 100px;
`