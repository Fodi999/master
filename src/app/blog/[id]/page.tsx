"use client";

import { Button } from "@/components/ui/button";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import content from "../../locales/en.json"; // импорт JSON файла
import Header from "@/components/Header"; // импорт нового Header компонента
import Footer from "@/components/Footer"; // импорт Footer компонента

const { buttons } = content;

interface BlogPostProps {
  params: Promise<{ id: string }>; // Асинхронный параметр
}

export default function BlogPost({ params }: BlogPostProps) {
  const { id } = use(params);
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

  const toggleLanguage = () => {
    alert("Language switch coming soon!");
  };

  const toggleRecipes = () => {
    alert("Recipes coming soon!");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Header
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
        toggleRecipes={toggleRecipes}
        toggleLanguage={toggleLanguage}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        buttons={buttons}
        contactForm={{ title: "Contact Us", description: "Contact form coming soon!" }}
      />

      {/* Sidebar for Desktop */}
      <div className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 flex-col space-y-4 z-50">
        <Link href="/blog">
          <Button
            className="px-4 py-2 rounded-full transition text-sm font-semibold tracking-wide"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', textTransform: 'uppercase', opacity: 0.7 }}
          >
            {buttons.back}
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
          onClick={toggleRecipes}
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

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 md:ml-64">
        {/* Featured Post */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-sm text-gray-500 mb-2">
              January 21, 2025 / By Jenny Jensen / Art / Painting
            </p>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              {id}.Hello friends here I will tell you about the right choice of product
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              How to Choose Fresh Fish: A Practical Guide
              Fresh fish is the key to a tasty meal and health. However, 
              choosing a truly high-quality product can be difficult, especially if you don’t know what to look for. Here are the basic tips to help you choose fresh fish.
            </p>
          </div>
          <div>
            <Image
              src="/00031.jpg"
              alt="Featured Post"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Latest Posts */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold uppercase tracking-wide">
              Latest Posts
            </h3>
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
                <Link href="/blog/Hello">
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
                <Link href="/blog/Hello">
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
                <Link href="/blog/Hello">
                  <Button className="text-blue-500 hover:underline">Read More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
