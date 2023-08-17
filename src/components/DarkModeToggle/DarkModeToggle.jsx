"use client";

// import { ThemeContext } from "@/context/ThemeContext";
// import { useContext } from "react";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  //   const { toggle, mode } = useContext(ThemeContext);
  const { resolvedTheme, setTheme } = useTheme();

  console.log(resolvedTheme);

  return (
    <div
      className=" w-11 h-7 flex justify-center items-center p-1 border-2 rounded-md relative cursor-pointer"
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      <div className="text-xs">🌙</div>
      <div className="text-xs">☀️</div>
      <div
        className=" bg-green-800 w-4 h-4 absolute rounded-50 right-1"
        style={resolvedTheme === "dark" ? { left: "4px" } : { right: "4px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
