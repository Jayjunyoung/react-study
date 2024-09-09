import { createContext } from "react";

// 기본값으로는 light를 부여하자
// 테마 변경 실습 해보자

// 타입 정의
interface ThemeContextType {
  theme: string;
  setTheme: () => void;
}

// 초기값 설정 (setTheme은 빈 함수로 초기화)
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});
