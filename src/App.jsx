import "./App.css";
import "./Counter";
import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./User";
import { Suspense } from "react";
import Friends from "./Friends";
import Players from "./Players";

{
  /*const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);
const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json;
}; */
}

function App() {
  {
    /* const friendsPromise = fetchFriends();*/
  }

  function handledClick() {
    alert("button clicked");
  }

  const handledClick3 = () => {
    alert("button 3 clicked");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <Counter></Counter>
      <h1>Vite + React</h1>
      <Players></Players>

      {/*<Users></Users>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h3>Friends are coming</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>*/}

      <Batsman></Batsman>
      <button onClick={handledClick}>Click ME</button>
      <button
        onClick={function handledClick2() {
          alert("second button clicked");
        }}
      >
        Click ME 2
      </button>
      <button onClick={handledClick3}>Click ME 3</button>
      <button
        onClick={() => {
          alert("clicked 4");
        }}
      >
        Click 4
      </button>
      {/*<button onClick={handleAdd5(7)}>Click me 5</button>*/}
      <button
        onClick={() => {
          handleAdd5(7);
        }}
      >
        Click me 5
      </button>
    </>
  );
}

export default App;
