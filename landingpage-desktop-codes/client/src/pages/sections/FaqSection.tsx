import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What is AquilaCyberLMS?",
      answer: "",
    },
    {
      question: "How do I enroll in a course or learning path?",
      answer: "",
    },
    {
      question: "How do I upgrade my subscription?",
      answer: "",
    },
    {
      question: "Can I access the platform on mobile devices?",
      answer: "",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-start md:items-center gap-8 px-6 md:px-16 py-[72px] relative w-full bg-[#0c131d]">
      <h2 className="font-display-h2v1 font-[number:var(--display-h2v1-font-weight)] text-white text-[length:var(--display-h2v1-font-size)] tracking-[var(--display-h2v1-letter-spacing)] leading-[var(--display-h2v1-line-height)] [font-style:var(--display-h2v1-font-style)] mb-6 md:mb-0 md:w-[352px]">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col w-full md:max-w-[950px] items-start gap-4 relative flex-1">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`faq-${index}`}
              value={`item-${index}`}
              className="mb-4 bg-[#ffffff0f] rounded-xl overflow-hidden border border-solid border-[#ffffff3d] p-0"
            >
              <AccordionTrigger className="px-6 py-6 hover:no-underline">
                <span className="font-normal text-[#e8e8e8] text-2xl tracking-[0] leading-7 text-left">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-0 text-[#e8e8e8]">
                {item.answer || "More information coming soon."}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
