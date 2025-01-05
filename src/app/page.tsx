"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog"; // импорт Dialog
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // импорт Accordion
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

const pages = [
  {
    title: "Fomin Dmitry Chef",
    description: "About me: I have been professionally involved in food for 20 years...",
    image: "/00031.jpg",
    buttonText: "contact",
  },
  {
    title: "Portfolio Showcase",
    description: "Explore my creative works and projects...",
    image: "/00030.jpg",
    buttonText: "view portfolio",
  },
  {
    title: "Get in Touch",
    description: "Have questions or want to collaborate?",
    image: "/00029.jpg",
    buttonText: "connect",
  },
];

const recipesSections = [
  "01. How to choose products?",
  "02. How to make a menu?",
  "03. Equipment essentials",
  "04. Modern cooking techniques",
  "05. Business management for chefs",
];

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
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
            onClick={toggleMenu}
          >
            ☰
          </button>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white bg-opacity-90 dark:bg-black dark:bg-opacity-90 text-black dark:text-white flex justify-center py-4 z-50">
            <div className="flex space-x-2">
              <a
                href="#"
                className="px-2 py-1 rounded-full transition text-sm"
                style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
                onClick={toggleMenu}
              >
                home
              </a>
              <a
                href="#"
                className="px-2 py-1 rounded-full transition text-sm"
                style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
                onClick={toggleMenu}
              >
                blog
              </a>
              <a
                href="#"
                className="px-2 py-1 rounded-full transition text-sm"
                style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
                onClick={toggleMenu}
              >
                contact
              </a>
              <button
                onClick={() => { toggleTheme(); toggleMenu(); }}
                className="px-2 py-1 rounded-full transition text-sm"
                style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        )}

        {/* Side Buttons for Desktop */}
        <div className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 flex-col space-y-4 z-50">
          <a
            href="#"
            className="px-4 py-2 rounded-full transition text-sm"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
          >
            home
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-full transition text-sm"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
          >
            blog
          </a>
          <a
            href="#"
            className="px-4 py-2 rounded-full transition text-sm"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
          >
            contact
          </a>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 rounded-full shadow-lg transition-all duration-300"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
          >
            Language
          </button>
          <button
            onClick={toggleRecipes}
            className="px-4 py-2 rounded-full shadow-lg transition-all duration-300"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
          >
            My Recipes
          </button>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-full shadow-lg transition-all duration-300"
            style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Dialog for Contact Form */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="fixed left-4 bottom-8 px-4 py-2 rounded-full shadow-lg transition-all duration-300 z-50"
              style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
            >
              Contact
            </Button>
          </DialogTrigger>
          <DialogContent className="p-8 rounded-lg max-w-md w-full" style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}>
            <DialogTitle>Contact Form</DialogTitle>
            <DialogDescription>
              {/* Здесь будет форма для связи или информация */}
              <span>Form or information about how to contact will be here.</span>
            </DialogDescription>
            <DialogFooter>
              <Button onClick={() => alert("Form submission coming soon!")}>Submit</Button>
              <Button variant="secondary" onClick={() => alert("Close modal!")}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Main Content */}
        <main className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl px-4 md:px-12 py-24">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              {pages[currentPage].title}
            </h1>
            <div
              className={`text-lg mt-2 transition-opacity duration-300 ${isTextDimmed ? "text-gray-500" : "text-gray-400"}`}
            >
              <p className={`whitespace-pre-line ${isExpanded ? "block" : "line-clamp-3"}`}>
                {pages[currentPage].description}
              </p>
              <Button
                className="mt-4"
                style={{ color: 'var(--button-text)' }}
                onClick={toggleAccordion}
              >
                {isExpanded ? "Show less" : "Continue reading"}
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
        <div className="w-full max-w-6xl px-4 md:px-12 py-8">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Section 1</AccordionTrigger>
              <AccordionContent>
                Content for section 1.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Section 2</AccordionTrigger>
              <AccordionContent>
                Content for section 2.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Section 3</AccordionTrigger>
              <AccordionContent>
                Content for section 3.
              </AccordionContent>
            </AccordionItem>
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
                style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)' }}
                onClick={toggleRecipes}
              >
                Close
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
        <footer className="w-full text-center py-4 flex justify-center items-center">
          <div className="border-t border-gray-700 w-1/3"></div>
          <div className="text-sm px-4">view projects</div>
          <div className="border-t border-gray-700 w-1/3"></div>
        </footer>
      </div>
    </>
  );
}




