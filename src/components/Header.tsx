"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeaderProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  toggleRecipes: () => void;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
  buttons: {
    home: string;
    myRecipes: string;
    language: string;
    blog: string;
    lightMode: string;
    darkMode: string;
    contact: string;
    submit: string;
    close: string;
  };
  contactForm: {
    title: string;
    description: string;
  };
}

const Header: React.FC<HeaderProps> = ({
  toggleMenu,
  isMenuOpen,
  toggleRecipes,
  toggleLanguage,
  toggleTheme,
  isDarkMode,
  buttons,
}) => {
  return (
    <>
      <header className="flex justify-between items-center p-6 border-b border-gray-300 dark:border-gray-800">
        <h1 className="text-lg font-bold">SUSHI MASTER</h1>
        <button
          className="md:hidden px-2 py-1 rounded-full transition ml-auto"
          style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', opacity: 0.7 }}
          onClick={toggleMenu}
        >
          Menu
        </button>
      </header>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 text-black dark:text-white flex justify-center py-4 z-50">
          <div className="flex space-x-2">
            <Link href="/">
              <Button
                className="px-2 py-1 rounded-full transition text-sm"
                style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', opacity: 0.7 }}
                onClick={toggleMenu}
              >
                {buttons.home}
              </Button>
            </Link>
            <Button
              onClick={toggleRecipes}
              className="px-2 py-1 rounded-full transition text-sm"
              style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', opacity: 0.7 }}
            >
              {buttons.myRecipes}
            </Button>
            <Button
              onClick={toggleLanguage}
              className="px-2 py-1 rounded-full transition text-sm"
              style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', opacity: 0.7 }}
            >
              {buttons.language}
            </Button>
            <Link href="/blog">
              <Button
                className="px-2 py-1 rounded-full transition text-sm"
                style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', opacity: 0.7 }}
                onClick={toggleMenu}
              >
                {buttons.blog}
              </Button>
            </Link>
            <button
              className="px-2 py-1 rounded-full transition text-sm"
              style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', opacity: 0.7 }}
              onClick={() => { toggleTheme(); toggleMenu(); }}
            >
              {isDarkMode ? buttons.lightMode : buttons.darkMode}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;