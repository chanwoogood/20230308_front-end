import Child from "./Child";

function Parent() {
  return (
    <div
      style={{
        border: "3px solid blue",
      }}
    >
      <h2>Parent</h2>
      <p>count : </p>
      <Child />
    </div>
  );
}

export default Parent;
