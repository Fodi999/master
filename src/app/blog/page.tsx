"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import content from "../locales/en.json"; // импорт JSON файла

const { buttons } = content;

export default function Blog() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
      <div className="relative w-full min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="w-full flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
          <div className="flex items-center space-x-4">
            <Image src="/svg%201.svg" alt="Logo" width={40} height={40} />
            <h1 className="text-xl font-bold text-blue-500">Fomin Dmitry Chef</h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <Button onClick={toggleLanguage} className="px-4 py-2 rounded-full shadow-lg">
              {buttons.language}
            </Button>
            <Button onClick={toggleTheme} className="px-4 py-2 rounded-full shadow-lg">
              {isDarkMode ? buttons.lightMode : buttons.darkMode}
            </Button>
            <Link href="/">
              <Button className="px-4 py-2 rounded-full shadow-lg">{buttons.home}</Button>
            </Link>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full"
          >
            ☰
          </button>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg z-50 p-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" onClick={toggleMenu}>
                <Button className="text-sm font-semibold">{buttons.home}</Button>
              </Link>
              <Button onClick={toggleLanguage} className="text-sm font-semibold">
                {buttons.language}
              </Button>
              <Button onClick={toggleTheme} className="text-sm font-semibold">
                {isDarkMode ? buttons.lightMode : buttons.darkMode}
              </Button>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12 flex-grow">
          <h1 className="text-3xl font-bold mb-6">Welcome to the Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Blog Post */}
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Image src="/00031.jpg" alt="Blog Image" width={500} height={300} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Blog Post Title</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  This is a short description of the blog post.
                </p>
                <Link href="/blog/1">
                  <Button className="text-blue-500 hover:underline">Read More</Button>
                </Link>
              </div>
            </article>
            {/* Add more blog posts */}
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Image src="/00031.jpg" alt="Blog Image" width={500} height={300} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Another Blog Post</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  This is another short description for the blog post.
                </p>
                <Link href="/blog/2">
                  <Button className="text-blue-500 hover:underline">Read More</Button>
                </Link>
              </div>
            </article>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-gray-100 dark:bg-gray-800 py-4 text-center mt-auto">
          <p className="text-sm">
            Web Sushi Master by{" "}
            <a
              href="https://www.facebook.com/dima.fomin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Dima Fomin
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}