import { useEffect } from "react";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const dot = document.querySelector(".theme-toggle-dot");
    if (dot) {
      dot.style.left = resolvedTheme === "dark" ? "4px" : "unset";
      dot.style.right = resolvedTheme === "dark" ? "unset" : "4px";
    }
  }, [resolvedTheme]);

  return (
    <div
      className="w-11 h-7 flex justify-center items-center p-1 border-2 rounded-md relative cursor-pointer"
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      <div className="text-xs">🌙</div>
      <div className="text-xs">☀️</div>

      <div className="bg-green-800 w-4 h-4 absolute rounded-50 theme-toggle-dot" />
    </div>
  );
};

export default DarkModeToggle;
