"use client";

import { ThemeProvider } from "next-themes";

export const Provider = ({ children }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};






























// import { createContext, useState } from "react";

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [mode, setMode] = useState("dark");

//   function toggle() {
//     setMode((prev) => (prev === "dark" ? "light" : "dark"));
//   }
//   return (
//     <ThemeContext.Provider
//       value={{
//         mode,
//         toggle,
//       }}
//     >
//       <div>{children}</div>
//     </ThemeContext.Provider>
//   );
// };
