import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // импорт Accordion
import { AccordionSection } from "../types"; // исправленный импорт типа AccordionSection
import { Button } from "@/components/ui/button"; // импорт Button
import Image from "next/image"; // импорт компонента Image
import Link from "next/link"; // импорт компонента Link

interface AccordionComponentProps {
  sections: AccordionSection[];
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({ sections }) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 bg-gray-100 dark:bg-gray-900">
      {/* Название аккордеона */}
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
        Buy a ready-made recipe
      </h2>

      {/* Аккордеон */}
      <Accordion type="single" collapsible>
        {sections.map((section, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="border-b border-gray-300 dark:border-gray-700"
          >
            <div className="flex justify-between items-center w-full py-4 text-lg font-semibold text-black dark:text-white">
              <AccordionTrigger className="flex-1 text-left">
                <span className="text-sm md:text-lg">{`0${index + 1}. ${section.title}`}</span>
              </AccordionTrigger>
              <Link href="/recipes">
                <Button
                  className="ml-4 px-4 py-2 rounded-full transition text-sm font-semibold tracking-wide"
                  style={{ backgroundColor: 'var(--button-bg)', color: 'var(--button-text)', textTransform: 'uppercase', opacity: 0.7 }}
                >
                  Buy
                </Button>
              </Link>
            </div>
            <AccordionContent className="py-4 flex flex-col md:flex-row items-center">
              <p className="text-sm md:text-base text-black dark:text-white flex-1">{section.content}</p>
              <Image
                src="/000012.jpg"
                alt="Recipe Image"
                width={100}
                height={75}
                className="rounded-lg shadow-md ml-0 md:ml-4 mt-4 md:mt-0"
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionComponent;