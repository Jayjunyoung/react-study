import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

interface FooterProps {
  onClick: () => void;
}

export default function Footer({ onClick }: FooterProps) {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{
        marginTop: "10px",
      }}
    >
      <button
        onClick={onClick}
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
