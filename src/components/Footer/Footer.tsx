import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Footer() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <button
        onClick={setTheme}
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          outline: "none",
        }}
      >
        useContext를 활용한 테마 변경
      </button>
    </div>
  );
}
