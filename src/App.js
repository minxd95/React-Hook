import React, { useState } from "react";
import styled from "styled-components";

function App() {
  const [color, setColor] = useState("");

  return (
    <Container>
      <Pallete color={color} />
      <ButtonContainer>
        <CyanButton onClick={() => setColor("cyan")} />
        <BrownButton onClick={() => setColor("brown")} />
        <PinkButton onClick={() => setColor("pink")} />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Pallete = styled.div`
  width: 700px;
  height: 700px;
  border: 1px solid black;
  background: ${(props) => props.color};
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  width: 700px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 5px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  outline: none;
  border: none;
  cursor: pointer;
`;

const CyanButton = styled(Button)`
  background: cyan;
`;

const BrownButton = styled(Button)`
  background: brown;
`;

const PinkButton = styled(Button)`
  background: pink;
`;

export default App;
