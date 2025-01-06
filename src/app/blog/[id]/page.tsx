"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface BlogPostProps {
  params: Promise<{ id: string }>; // Асинхронный параметр
}

export default function BlogPost({ params }: BlogPostProps) {
  const { id } = use(params);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Блог</h1>
        <div className="space-x-4">
          <button onClick={toggleTheme} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded">
            {isDarkMode ? 'Светлая тема' : 'Темная тема'}
          </button>
          <Link href="/" legacyBehavior>
            <a className="px-4 py-2 bg-blue-500 text-white rounded">Домой</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="px-4 py-2 bg-green-500 text-white rounded">Контакт</a>
          </Link>
        </div>
      </header>
      <main className="p-4">
        <Image src="/00031.jpg" alt="Large Image" width={1200} height={600} className="w-full h-auto" />
        <h2 className="text-3xl font-bold mt-4">Статья с ID: {id}</h2>
        <p className="mt-2">Добро пожаловать на страницу статьи с ID: {id}. Это пример текста для статьи.</p>
      </main>
    </div>
  );
}