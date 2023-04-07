import styled from "styled-components";

function MainContent({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #131212;
  padding-top: 50px;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
  color: white;
`;

export default MainContent;
