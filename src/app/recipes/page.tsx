"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import content from "../locales/en.json"; // импорт JSON файла
import Header from "@/components/Header"; // импорт нового Header компонента
import Footer from "@/components/Footer"; // импорт Footer компонента
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"; // импорт компонента InputOTP

const { buttons } = content;

export default function Recipes() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [isRecipeVisible, setIsRecipeVisible] = useState(false);

  const correctOtp = "123456"; // Фиктивный код OTP

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

  const handleOtpChange = (otp: string) => {
    setOtp(otp);
    console.log(otp);
  };

  const verifyOtp = () => {
    if (otp === correctOtp) {
      setIsRecipeVisible(true);
      alert("Access granted! Enjoy the recipe.");
    } else {
      alert("Incorrect OTP. Please try again.");
    }
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
          <Button className="px-4 py-2 rounded-full transition text-sm font-semibold tracking-wide">
            {buttons.home}
          </Button>
        </Link>
        <Button
          onClick={toggleLanguage}
          className="px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide"
        >
          {buttons.language}
        </Button>
        <Button
          onClick={toggleRecipes}
          className="px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide"
        >
          {buttons.myRecipes}
        </Button>
        <Button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide"
        >
          {isDarkMode ? buttons.lightMode : buttons.darkMode}
        </Button>
        <Button
          onClick={() => alert("Contact form coming soon!")}
          className="px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide"
        >
          {buttons.contact}
        </Button>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 md:ml-64">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-4xl font-bold leading-tight mb-4">Delicious Recipe</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              This is a secret recipe that only authorized users can see. Enjoy your exclusive access to this amazing dish!
            </p>
            {!isRecipeVisible && (
              <div className="flex items-center space-x-4 mt-4">
                <InputOTP value={otp} onChange={handleOtpChange} maxLength={6}>
                  <InputOTPGroup>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <InputOTPSlot key={index} index={index} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
                <Button
                  onClick={verifyOtp}
                  className="px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-semibold tracking-wide"
                >
                  Verify
                </Button>
              </div>
            )}
            <div className={`mt-4 ${!isRecipeVisible ? "blur-sm" : ""}`}>
              <p>
                Here is the rest of the recipe content that was hidden before. Follow these steps to make the dish:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>Step 1: Prepare the ingredients.</li>
                <li>Step 2: Mix the ingredients together.</li>
                <li>Step 3: Cook the mixture over medium heat.</li>
                <li>Step 4: Serve and enjoy your meal!</li>
              </ul>
            </div>
          </div>
          <div>
            <Image
              src="/00031.jpg"
              alt="Recipe"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-md mb-4"
            />
          </div>
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
                className="w-full х-auto object-cover"
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
                className="w-full х-auto object-cover"
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

      <Footer />
    </div>
  );
}
