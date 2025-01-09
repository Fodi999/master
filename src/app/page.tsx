"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogFooter, DialogTitle, DialogDescription } from "@/components/ui/dialog"; // импорт Dialog
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import content from './locales/en.json'; // импорт JSON файла
import AccordionComponent from "@/components/AccordionComponent"; // импорт нового компонента
import Header from "@/components/Header"; // импорт Header компонента
import MainContent from "@/components/MainContent"; // импорт MainContent компонента
import Footer from "@/components/Footer"; // импорт Footer компонента

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
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <Header
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
          toggleRecipes={toggleRecipes}
          toggleLanguage={toggleLanguage}
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          buttons={buttons}
          contactForm={contactForm}
        />

        <div className="flex flex-col items-center">
          {/* Side Buttons for Desktop */}
          <div className="hidden md:flex fixed left-4 top-1/2 transform -translate-y-1/2 flex-col space-y-4 z-50">
            <Link href="/blog">
              <Button
                className="px-4 py-2 rounded-full transition text-sm font-semibold tracking-wide"
                style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', textTransform: 'uppercase', opacity: 0.7 }}
              >
                {buttons.blog}
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
          <MainContent
            pages={pages}
            currentPage={currentPage}
            isExpanded={isExpanded}
            isTextDimmed={isTextDimmed}
            toggleAccordion={toggleAccordion}
            buttons={buttons}
          />

          {/* Accordion */}
          <AccordionComponent sections={accordionSections} />

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
          <div className="flex justify-center space-x-2 mt-4">
            {pages.map((_, index) => (
              <div
                key={index}
                onClick={() => handleScroll(index)}
                className={`w-8 h-8 flex items-center justify-center cursor-pointer rounded-full transition-colors duration-300 ${index === currentPage ? "bg-orange-500" : "bg-gray-600"}`}
              >
                {index + 1}
              </div>
            ))}
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}