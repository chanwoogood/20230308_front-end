import styled from "styled-components";
import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function Todos() {
  return (
    <div>
      <Container>
        <TodoHeader />
        <TodoList />
        <TodoInput />
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;

  width: 350px;
  height: 700px;
  border: 1px solid black;
`;

export default Todos;
