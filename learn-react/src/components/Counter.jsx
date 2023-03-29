import { useReducer } from "react";

/*
    reducer(상태값, 액션객체)
       - reducer함수가 return 값이 상태 업데이트된다.
       - state 현재 상태값이 전달된다.
       - action : dispatch의 인자가 전달된다.
*/
function reducer(state, action) {
  if (action.type === "INCREASE") {
    return { ...state, count: state.count + state.amount };
  } else if (action.type === "DECREASE") {
    return { ...state, count: state.count - state.amount };
  }

  switch (action.type) {
    case "INCREASE":
      return { ...state, count: state.count + state.amount };
    case "DCREASE":
      return { ...state, count: state.count - state.amount };
    case "CHANGE_AMOUNT":
      return { ...state, amount: action.amount };
    default:
      return state;
  }
}
function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>{state.count}</h2>
      <button onclick={() => dispatch({ type: "INCREASE" })}>+3</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-1</button>
      type="number" onChange=
      {(e) =>
        dispatch({ type: "CHABGE_AMOUNT", amount: parseInt(e.target.value) })
      }
    </div>
  );
}
export default Counter;

/*
    useReducer
       - 리듀서 함수를 통해서 상태 업데이트를 한다.
          1) 상태를 업데이트하는 로직이 복잡할 때.
          2) 여러 상태를 한번에 관리할 때.
          3) 외부에 상태 업데이트 로직을 작성 할 때.
       - 리듀서 함수의 return 값이 곧 다음 상태가 된다.
          => 첫번째 매개변수에 현재 상태값이 전달된다.
          => 두번째 매개변수 업데이트에 필요한 값들을 담은 액션 객체가 전달된다.
       - 디스패치 함수는 상태 업데이트를 요청하는 함수이다.
          => 디스패치에 액션 객체를 담아서 호출하면 리듀서 함수에 전달된다.

 */
