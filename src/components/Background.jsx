import Lottie from 'lottie-react'
import animationData from '../components/animation_lltdrpj1 (1).json'
import styled from "styled-components"

const Container = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  width: 100%;
  height: 10vh;

`
function Background() {
  return (
    <Container>
      <Lottie  animationData={animationData} />
      
     
    </Container>
  );
}

export default Background;
