import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => setPosts(data));
  }, []);
  return (
    <Container>
      <GlobalStyle />
      {posts.map((post, index) => (
        <Post key={index}>
          <Title>{post.title}</Title>
          <Body>{post.body}</Body>
        </Post>
      ))}
    </Container>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  padding: 200px 0;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(auto-fit, 300px);
  grid-auto-rows: 300px;
  grid-gap: 30px 20px;
  justify-content: center;
  background: #55efc4;
  box-sizing: border-box;
`;

const Post = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  background: white;
  box-shadow: 10px 5px 5px #7f8fa6;
`;

const Title = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  font-weight: 600;
`;

const Body = styled.div`
  height: 80%;
  padding: 11px;
  border-radius: 20px;
`;

/* useState 부분 
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
*/
export default App;
