import { useLocation, useParams } from "react-router-dom";
import { tmdbAxios } from "../../api/tmdbAxios";
import { useEffect, useState } from "react";
import styled from "styled-components";

function MovieDetail() {
  const { pathname } = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await tmdbAxios.get(pathname);

      setMovie(data);
    };
    fetchData();
  }, [pathname]);
  return (
    <Container>
      <ImgBox>
        <img src="" alt="" />
      </ImgBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border: 1px solid white;
`;

const ImgBox = styled.div``;

const DescBox = styled.div``;

export default MovieDetail;
