"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import content from '../locales/en.json'; // импорт JSON файла

const { buttons } = content;

export default function Blog() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    alert("Language switch coming soon!");
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Blog - Fomin Dmitry Chef</title>
      </Head>
      <div className="relative w-full min-h-screen flex flex-col justify-between items-center bg-white dark:bg-black text-black dark:text-white">
        {/* Header */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 text-black dark:text-white flex justify-center py-4 z-50">
            <div className="flex space-x-2">
              <Button
                onClick={toggleLanguage}
                className="px-2 py-1 rounded-full transition text-sm"
                style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', opacity: 0.7 }}
              >
                {buttons.language}
              </Button>
              <Link href="/">
                <Button
                  className="px-2 py-1 rounded-full transition text-sm"
                  style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', opacity: 0.7 }}
                  onClick={toggleMenu}
                >
                  {buttons.home}
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

        {/* Side Buttons for Desktop */}
        <div className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 flex-col space-y-4 z-50">
          <Link href="/">
            <Button
              className="px-4 py-2 rounded-full transition text-sm font-semibold tracking-wide"
              style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', textTransform: 'uppercase', opacity: 0.7 }}
            >
              {buttons.home}
            </Button>
          </Link>
          <Button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', textTransform: 'uppercase', opacity: 0.7 }}
          >
            {buttons.language}
          </Button>
          <Button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', textTransform: 'uppercase', opacity: 0.7 }}
          >
            {isDarkMode ? buttons.lightMode : buttons.darkMode}
          </Button>
        </div>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center w-full max-w-6xl px-4 md:px-12 py-24">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mt-10">Blog Page</h1>
          <p className="text-lg mt-2">Welcome to the blog page!</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Пример статьи блога */}
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex" style={{ width: "500px", height: "400px" }}>
              <div className="w-1/3 h-full">
                <Image src="/00031.jpg" alt="Blog Image" width={500} height={400} className="object-cover w-full h-full" />
              </div>
              <div className="p-6 flex flex-col justify-between w-2/3">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Blog Post Title</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">This is a short description of the blog post. It gives a brief overview of the content.</p>
                </div>
                <Link href="/blog/1">
                  <Button className="text-blue-500 hover:underline">Read more</Button>
                </Link>
              </div>
            </article>
            {/* Добавьте больше статей блога здесь */}
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full text-center py-4 flex flex-wrap justify-center items-center">
          <div className="border-t border-gray-700 w-full md:w-1/3"></div>
          <div className="text-sm px-4 whitespace-nowrap">
           web sushi master <a href="https://www.facebook.com/dima.fomin" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Dima Fomin</a>
          </div>
          <div className="border-t border-gray-700 w-full md:w-1/3"></div>
        </footer>
      </div>
    </>
  );
}