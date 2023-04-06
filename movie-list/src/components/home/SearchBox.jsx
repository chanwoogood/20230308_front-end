import styled from "styled-components";
import Button from "../common/button";

function SearchBox() {
  return (
    <div>
      <Container>
        <input type="text" />
        <Button>검색</Button>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;

  input {
    flex: 1;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid black;
    outline: none;
  }
`;

export default SearchBox;
