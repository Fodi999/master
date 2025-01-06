"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog"; // импорт Dialog
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // импорт Accordion
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import content from './locales/en.json'; // импорт JSON файла

const { pages, recipesSections, accordionSections, contactForm, buttons } = content;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showRecipes, setShowRecipes] = useState(false);
  const [isTextDimmed, setIsTextDimmed] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleScroll = (index: number) => {
    setCurrentPage(index);
  };

  const toggleLanguage = () => {
    alert("Language switch coming soon!");
  };

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleRecipes = () => {
    setShowRecipes(!showRecipes);
    setIsTextDimmed(!showRecipes);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fomin Dmitry Chef</title>
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
              <button
                className="px-2 py-1 rounded-full transition text-sm"
                style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', opacity: 0.7 }}
                onClick={toggleMenu}
              >
                {buttons.blog}
              </button>
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

        {/* Side Buttons for Desktop */}
        <div className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 flex-col space-y-4 z-50">
          <Button
            asChild
            className="px-4 py-2 rounded-full transition text-sm font-semibold tracking-wide"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', textTransform: 'uppercase', opacity: 0.7 }}
          >
            <a href="#">{buttons.blog}</a>
          </Button>
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
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide"
                style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', textTransform: 'uppercase', opacity: 0.7 }}
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

        {/* Main Content */}
        <main className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-4 md:px-12 py-24">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              <span dangerouslySetInnerHTML={{ __html: pages[currentPage].title }} />
            </h1>
            <div
              className={`text-lg mt-2 transition-opacity duration-300 ${isTextDimmed ? "text-gray-500" : "text-gray-400"}`}
            >
              <p className={`whitespace-pre-line ${isExpanded ? "block" : "line-clamp-3"}`}>
                {pages[currentPage].description}
              </p>
              <Button
                className="mt-4 px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide"
                style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', textTransform: 'uppercase', opacity: 0.7 }}
                onClick={toggleAccordion}
              >
                {isExpanded ? buttons.showLess : buttons.continueReading}
              </Button>
            </div>
          </div>
          <div className="flex-1 mt-10 md:mt-0">
            <Image
              src={pages[currentPage].image}
              alt={pages[currentPage].title}
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </main>
        {/* Accordion */}
        <div className="w-full max-w-5xl px-4 md:px-12 py-8 -mt-20 bg-gray-100 dark:bg-gray-900 rounded-lg mx-4 md:mx-auto shadow-lg">
          <Accordion type="single" collapsible>
            {accordionSections.map((section, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`} className="mb-4">
                <AccordionTrigger className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-t-lg text-left text-lg font-semibold cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="px-4 py-2 bg-gray-50 dark:bg-gray-900 rounded-b-lg text-base text-black dark:text-white transition-colors duration-300">
                  {section.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Recipes Drawer */}
        {showRecipes && (
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50">
            <div className="bg-opacity-80 text-white backdrop-blur-lg rounded-lg shadow-lg p-8 max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Recipes</h2>
              <ul className="space-y-4">
                {recipesSections.map((section, index) => (
                  <li key={index} className="text-lg font-medium cursor-pointer hover:text-orange-500">
                    {section}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-6 px-6 py-3 w-full rounded-full transition"
                style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', opacity: 0.7 }}
                onClick={toggleRecipes}
              >
                {buttons.close}
              </Button>
            </div>
          </div>
        )}

        {/* Scroll Indicator */}
        <div className="absolute top-1/2 left-4 md:left-auto md:right-4 transform -translate-y-1/2 flex flex-col items-center space-y-2">
          {pages.map((_, index) => (
            <div
              key={index}
              onClick={() => handleScroll(index)}
              className={`w-2 h-8 cursor-pointer rounded-full transition-colors duration-300 ${index === currentPage ? "bg-orange-500" : "bg-gray-600"}`}
            ></div>
          ))}
        </div>

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