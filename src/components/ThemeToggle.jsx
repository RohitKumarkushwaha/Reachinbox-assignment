import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ToggleTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const rootElement = document.documentElement;
        const currentTheme = isDarkMode ? 'dark' : 'light';
        const previousTheme = isDarkMode ? 'light' : 'dark';

        rootElement.classList.remove(previousTheme);
        rootElement.classList.add(currentTheme);
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className="ml-10">
            <button
                className="flex items-center px-3 py-2 rounded-md bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                onClick={toggleTheme}
            >
                {isDarkMode ? (
                    <FaSun className="mr-2" />
                ) : (
                    <FaMoon className="mr-2" />
                )}
                <span>Switch Theme</span>
            </button>
        </div>
    );
};

export default ToggleTheme;
