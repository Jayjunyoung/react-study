import { useRef, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Footer from "./components/Footer/Footer";
import { ThemeContext } from "./context/ThemeContext";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("junyoung2");
  const [theme, setTheme] = useState("light");

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

  const ToggleTheme = (): void => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
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
      <button
        style={{
          marginLeft: "20px",
        }}
        onClick={inputClick}
      >
        input Ref 실습
      </button>
      <ThemeContext.Provider
        value={{
          theme,
          setTheme: ToggleTheme,
        }}
      >
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
