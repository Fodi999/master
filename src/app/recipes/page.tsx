"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import content from "../locales/en.json"; // импорт JSON файла
import Header from "@/components/Header"; // импорт нового Header компонента
import Footer from "@/components/Footer"; // импорт Footer компонента
import { InputOTP } from "@/components/ui/input-otp"; // импорт компонента InputOTP

const { buttons } = content;

export default function Recipes() {
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
        {/* Featured Recipe */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Featured Recipe
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Discover our featured recipe of the month. This recipe is perfect for those who love to cook and want to try something new.
            </p>
          </div>
          <div>
            <Image
              src="/00031.jpg"
              alt="Featured Recipe"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Input OTP */}
        <section className="mb-12">
          <h3 className="text-lg font-bold uppercase tracking-wide mb-4">
            Enter OTP
          </h3>
          <InputOTP maxLength={6} onChange={(otp: string) => console.log(otp)}>
            <span className="text-sm text-gray-500">Введите 6-значный код</span>
          </InputOTP>
        </section>

        {/* Latest Recipes */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold uppercase tracking-wide">
              Latest Recipes
            </h3>
          </div>

          {/* Recipe Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Recipe 1 */}
            <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/00029.jpg"
                alt="Recipe 1"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2">
                  Delicious Sushi
                </h4>
                <Link href="/recipes/1">
                  <Button className="text-blue-500 hover:underline">Read More</Button>
                </Link>
              </div>
            </div>

            {/* Recipe 2 */}
            <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/00030.jpg"
                alt="Recipe 2"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2">
                  Tasty Ramen
                </h4>
                <Link href="/recipes/2">
                  <Button className="text-blue-500 hover:underline">Read More</Button>
                </Link>
              </div>
            </div>

            {/* Recipe 3 */}
            <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Image
                src="/00031.jpg"
                alt="Recipe 3"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2">
                  Spicy Tofu
                </h4>
                <Link href="/recipes/3">
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

