import styled, { css } from "styled-components";

function FilterBox({ filterList, title, onClick }) {
  return (
    <Container>
      <h3>{title}</h3>
      <FilterList>
        {filterList.map((filter) => (
          <FilterItem
            key={filter.id}
            active={filter.active}
            onClick={() => onClick(filter.id)}
          >
            {filter.text}
          </FilterItem>
        ))}
      </FilterList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const FilterList = styled.ul`
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #ffffff;
  margin-left: 20px;
`;

const FilterItem = styled.li`
  padding: 5px 10px;
  cursor: pointer;
  color: white;

  ${({ active, theme }) =>
    active &&
    css`
      background-color: #585858;
      color: #ffffff;
      font-weight: bold;
    `}
  & + & {
    border-left: 2px solid white;
  }
`;

export default FilterBox;
