import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px;
  background: red;
`;
const Title = styled.h1`
  font-size: 1.5rem;
  color: white;
  text-align: center;
`;
function MainPage(props) {
  return (
    <Wrapper>
      <Title>안녕, 리액트!</Title>
    </Wrapper>
  );
}
export default MainPage;
