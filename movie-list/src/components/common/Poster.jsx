import { Link } from "react-router-dom";
import styled from "styled-components";

function Poster({ data }) {
  console.log(data);
  const { id, title, release_data, poster_path, name, first_air_date } = data;
  const src = "https://image.tmdb.org/t/p/w154/" + poster_path;

  const fetchData = () => {};

  return (
    <Container>
      <Link to={"/movie/" + id}>
        <ImgBox>
          <img src={src} alt="" />
        </ImgBox>
        <TitleBox>
          <span>{release_data || first_air_date}</span>
          <h4>{title || name}</h4>
        </TitleBox>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 4px 4px 4px 0 rgba(233, 230, 230, 0.3);
`;

const ImgBox = styled.div``;

const TitleBox = styled.div`
  height: 70px;
  padding: 0 10px;
  span {
    font-size: 14px;
  }
`;

export default Poster;
