import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

function SideItem({ menu }) {
  const { pathname } = useLocation();

  const category = pathname.split("/")[1];

  return (
    <Container $active={category === menu.to.split("/")[1]}>
      <MainMenu to={menu.to}>{menu.text}</MainMenu>
      <ul>
        {menu.sub.map((menu) => (
          <li key={menu.id}>
            <SubMenu to={menu.to} $active={pathname === menu.to}>
              {menu.text}
            </SubMenu>
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.li`
  font-size: 12px;
  padding: 10px;
  color: #fff;
  font-weight: 700;

  &:hover ul {
    display: block;
  }

  ul {
    display: none;
  }

  ${({ $active }) =>
    $active &&
    css`
      ul {
        display: block;
      }
    `}

  & > a {
  }
`;

const MainMenu = styled(Link)`
  display: block;
  padding: 10px;
  &:hover {
    background-color: #777777;
  }
`;

const SubMenu = styled(MainMenu)`
  padding: 10px 20px;
  background-color: ${({ $active }) => $active && "#5f5a5a"};
  &:hover {
    background-color: #5f5a5a;
  }
`;

export default SideItem;
