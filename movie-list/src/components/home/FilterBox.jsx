import styled from "styled-components";

function FilterBox() {
  return (
    <Container>
      <h3>트렌딩</h3>
      <FilterList>
        <FilterItem>오늘</FilterItem>
        <FilterItem>이번 주</FilterItem>
        <FilterItem>1달</FilterItem>
      </FilterList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const FilterList = styled.ul`
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid black;
  margin-left: 20px;
`;

const FilterItem = styled.li`
  padding: 5px 10px;

  & + & {
    border-left: 1px solid black;
  }
`;

export default FilterBox;
