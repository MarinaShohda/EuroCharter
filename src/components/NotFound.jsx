import styled from "styled-components";


function NotFound() {
  return (
    <Container className="flex">
        <div className="content">
            <p>page not found</p>
        </div>
    </Container>
  )
}

export default NotFound


const Container = styled.div`
    background: #ededed;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
     url("https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    background-size: contain;
    background-position: center; 
    background-repeat: repeat;

    .content {
        // background: #a7a;
        color: #fff;
        font-weight: 700;
        font-size: 1.5rem;
    }
`