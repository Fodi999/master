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
      <div className="relative w-full min-h-screen flex flex-col bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="flex justify-between items-center p-6 border-b border-gray-300 dark:border-gray-800">
          <div className="flex items-center space-x-4">
            <Image src="/svg%201.svg" alt="Logo" width={40} height={40} />
            <h1 className="text-xl font-bold text-blue-500">Fomin Dmitry Chef</h1>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full"
          >
            ☰
          </button>
        </header>

        {/* Sidebar for Desktop */}
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
            onClick={() => alert("Recipes coming soon!")}
            className="px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', textTransform: 'uppercase', opacity: 0.7 }}
          >
            {buttons.myRecipes}
          </Button>
          <Button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', textTransform: 'uppercase', opacity: 0.7 }}
          >
            {isDarkMode ? buttons.lightMode : buttons.darkMode}
          </Button>
          <Button
            onClick={() => alert("Contact form coming soon!")}
            className="px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', textTransform: 'uppercase', opacity: 0.7 }}
          >
            {buttons.contact}
          </Button>
        </div>

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
        <main className="container mx-auto px-6 py-12 flex-grow md:ml-64">
          <h1 className="text-3xl font-bold mb-6">Welcome to my Sushi Master Blog</h1>

          <section>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold uppercase tracking-wide">
                Latest Posts
              </h3>
              <Link href="/all" className="text-sm font-medium hover:underline">
                View All
              </Link>
            </div>

            {/* Category Filters */}
            <div className="flex space-x-4 mb-8 overflow-x-auto">
              {["All", "Design", "Altyn"].map((category) => (
                <button
                  key={category}
                  className="text-sm font-medium px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Post Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Post 1 */}
              <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/00029.jpg"
                  alt="Post 1"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-2">
                    Oct 24, 2012 / Altyn
                  </p>
                  <h4 className="text-lg font-bold mb-2">
                    Home of the Big Home Kit Skill of Mix Ups in Tim
                  </h4>
                  <Link href="/blog/1">
                    <Button className="text-blue-500 hover:underline">Read More</Button>
                  </Link>
                </div>
              </div>

              {/* Post 2 */}
              <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/00030.jpg"
                  alt="Post 2"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-2">
                    Nov 24, 2012 / Design
                  </p>
                  <h4 className="text-lg font-bold mb-2">
                    Read Always Falls Buttered Side Tip
                  </h4>
                  <Link href="/blog/1">
                    <Button className="text-blue-500 hover:underline">Read More</Button>
                  </Link>
                </div>
              </div>

              {/* Post 3 */}
              <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <Image
                  src="/00031.jpg"
                  alt="Post 3"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-500 mb-2">
                    Dec 24, 2012 / Altyn
                  </p>
                  <h4 className="text-lg font-bold mb-2">
                    The Best Blog Out There Today Now
                  </h4>
                  <Link href="/blog/1">
                    <Button className="text-blue-500 hover:underline">Read More</Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
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