import { people } from "./data";
import { getImageUrl } from "./utils";

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItem = chemists.map((person) => (
    <li key={person.id} style={{ display: "flex" }}>
      <img src={getImageUrl(person)} alt={person.name} />
      <div>
        <b>{person.name}</b> : {person.profession}
        <p>{person.accomplishment}</p>
      </div>
    </li>
  ));
  return <ul>{listItem}</ul>;
}

/*
   배열 렌더링하기
     - JSX에 배열을 포함시키면 배열에 있는 아이템들을 렌더링할 수 있다.
     - 데이터를 배열로 관리하면서 map()과 filter() 함수를 통해서 렌더링할 수 있다.
       => map() : 데이터를 JSX로 변환할 수 있다.
*/
