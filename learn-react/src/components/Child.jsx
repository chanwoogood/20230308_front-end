import React, { useContext, useEffect } from "react";
import { CountContext, HandleCountContext } from "./GrandParent";

function Child() {
  const count = useContext(CountContext);
  const handleCount = useContext(HandleCountContext);

  useEffect(() => {
    console.log("render!");
  });
  return (
    <div
      style={{
        border: "3px solid yellow",
      }}
    >
      <h3>Child</h3>
      <p>count : {count}</p>
      <button onClick={handleCount}>+1</button>
    </div>
  );
}

export default Child;

/*
    context API
       - 전역에 상태를 공유하고자 할 때 사용한다.
       1) createContext : 컨텍스트를 생성한다.
          => <Context.Provider>를 통해서 값을 공유받고자하는 컴포넌트를 감싼다.
          => 공유하고자 하는 값을 value prop에 지정한다.
          => Context.Provider 밖에서 컨텍스트를 사용할 때 제공되는 값이다.

       2) useContext : 컨텍스트가 제공하는 값을 받는다.
          => 원하는 값을 제공하는 컨텍스트를 인자로 전달한다.

       - 여러개의 컨텍스트를 중첩해서 사용할 수 있다.
*/
