import { Button } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSSR } from "../hooks";

/**
 * ThemeSwitch component for toggling between light and dark themes instantly.
 * @returns JSX.Element
 */
export const ThemeSwitch = () => {
  const { isBrowser } = useSSR();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (isBrowser)
    return (
      <Button
        variant='light'
        size={"sm"}
        isIconOnly={true}
        onPress={toggleTheme}
      >
        {theme === "dark" ? (
          <>
            <Sun className='w-4 h-4' />
            <span className='sr-only'>Sun Icon</span>
          </>
        ) : (
          <>
            <Moon className='w-4 h-4' />
            <span className='sr-only'>Moon Icon</span>
          </>
        )}
        <span className='sr-only'>Toggle theme</span>
      </Button>
    );
};
