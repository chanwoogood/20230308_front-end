import Styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";
import TV from "./components/pages/TV";
import Person from "./components/pages/Person";

const GlobalStyle = createGlobalStyle`
* {
  margin : 0;
  padding : 0;
  box-sizing: border-box;
}

a{
  color : inherit;
  text-decoration: none;
}

li { 
  list-style : none;
}
`;

function App() {
  console.log(process.env.REACT_APP_TMDB_API_KEY);
  return (
    <div>
      <ThemeProvider
        theme={{
          colors: {
            main: "black",
          },
        }}
      >
        <GlobalStyle />
        <Container>
          <Sidebar />
          <MainContent>
            <Routes>
              <Route>
                <Route path="/" element={<Home />} />
                <Route path="/movie/*" element={<Movie />} />
                <Route path=":id" element={<div>상세보기</div>} />
                <Route path="popular" element={<div>인기</div>} />
              </Route>
              <Route path="/tv/*" element={<TV />} />
              <Route path="/person/*" element={<Person />} />
            </Routes>
          </MainContent>
        </Container>
      </ThemeProvider>
    </div>
  );
}

const Container = Styled.div`
 display: grid;
 grid-template-columns:200px 1fr;
 height: 100vh;
`;

export default App;
