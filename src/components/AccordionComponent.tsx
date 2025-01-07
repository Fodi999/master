import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"; // импорт Accordion
import { AccordionSection } from "../types"; // исправленный импорт типа AccordionSection

interface AccordionComponentProps {
  sections: AccordionSection[];
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({ sections }) => {
  return (
    <div className="w-full max-w-5xl mx-auto py-8 px-4 bg-gray-100 dark:bg-gray-900">
      {/* Название аккордеона */}
      <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
        Frequently Asked Questions
      </h2>

      {/* Аккордеон */}
      <Accordion type="single" collapsible>
        {sections.map((section, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className="border-b border-gray-300 dark:border-gray-700"
          >
            <AccordionTrigger className="flex justify-between items-center w-full py-4 text-lg font-semibold text-black dark:text-white">
              <span className="text-sm md:text-lg">{`0${index + 1}. ${section.title}`}</span>
            </AccordionTrigger>
            <AccordionContent className="py-4">
              <p className="text-sm md:text-base text-black dark:text-white">{section.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionComponent;