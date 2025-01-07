"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog"; // импорт Dialog
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  toggleRecipes: () => void;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
  buttons: {
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
  contactForm,
}) => {
  return (
    <>
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-4 md:px-8">
        <div className="flex items-center space-x-4">
          <Image src="/svg%201.svg" alt="Logo" width={40} height={40} />
          <div className="text-xl font-bold underline decoration-sky-500/30">
            <span className="text-blue-400">Fomin</span> <span className="text-green-400">Dmitry</span> <span className="text-orange-500">Chef</span>
          </div>
        </div>
        <button
          className="md:hidden px-2 py-1 rounded-full transition"
          style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', opacity: 0.7 }}
          onClick={toggleMenu}
        >
          ☰
        </button>
      </header>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 text-black dark:text-white flex justify-center py-4 z-50">
          <div className="flex space-x-2">
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
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="px-2 py-1 rounded-full transition text-sm"
                  style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', opacity: 0.7 }}
                >
                  {buttons.contact}
                </Button>
              </DialogTrigger>
              <DialogContent className="p-8 rounded-lg max-w-md w-full" style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', opacity: 0.7 }}>
                <DialogTitle>{contactForm.title}</DialogTitle>
                <DialogDescription>
                  {contactForm.description}
                </DialogDescription>
                <DialogFooter>
                  <Button onClick={() => alert("Form submission coming soon!")}>{buttons.submit}</Button>
                  <Button variant="secondary" onClick={() => alert("Close modal!")}>{buttons.close}</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;