"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface MainContentProps {
  pages: {
    title: string;
    description: string;
    image: string;
  }[];
  currentPage: number;
  isExpanded: boolean;
  isTextDimmed: boolean;
  toggleAccordion: () => void;
  buttons: {
    showLess: string;
    continueReading: string;
  };
}

const MainContent: React.FC<MainContentProps> = ({
  pages,
  currentPage,
  isExpanded,
  isTextDimmed,
  toggleAccordion,
  buttons,
}) => {
  return (
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
      <div className="flex-1 mt-10 md:mt-0 relative">
        <Carousel>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10" />
          <CarouselContent>
            {pages.map((page, index) => (
              <CarouselItem key={index}>
                <Image
                  src={page.image}
                  alt={page.title}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 md:right-36" />
        </Carousel>
      </div>
    </main>
  );
};

export default MainContent;