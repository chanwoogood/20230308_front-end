import ContentList from "../home/ContentList";
import SearchBox from "../home/SearchBox";

const filters = {
  trending: [
    { id: 1, text: "오늘", active: true, url: "trending/all/day" },
    { id: 2, text: "이번 주", active: false, url: "trending/all/week" },
  ],
  popular: [
    { id: 1, text: "스트리밍", active: true },
    { id: 2, text: "TV", active: false },
    { id: 3, text: "대여", active: false },
    { id: 4, text: "극장", active: false },
  ],
  freeToWatch: [
    { id: 1, text: "영화", active: true },
    { id: 2, text: "TV", active: false },
  ],
};

function Home() {
  return (
    <div>
      <SearchBox />
      <ContentList title="트렌딩" filterList={filters.trending} />
    </div>
  );
}

export default Home;
