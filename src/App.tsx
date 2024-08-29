import { useRef, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("junyoung2");

  let ref = useRef(0); //current객체 반환
  let inputRef = useRef<HTMLInputElement>(null);

  function inputClick() {
    inputRef.current?.focus();
  }

  //이벤트 헨들러나 useEffect에서 ref를 읽을 수 있음, 아니면 사용 x
  function handleRefClick() {
    ref.current = ref.current + 1; //ref로 렌더링에 관여는 안하게하면서 current객체 값 증가 시키기
    alert("You clicked " + ref.current + " times!");
  }

  function handleClick() {
    setName("junyoung");
    console.log(name); // 아직 "junyoung2"
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <img
          src={reactLogo}
          className="logo react"
          alt="React logo"
          onClick={handleClick}
        />
      </div>
      <h1>Vite + React + {name}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p onClick={handleRefClick}>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <input ref={inputRef} />
      <button onClick={inputClick}>input Ref 실습</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
