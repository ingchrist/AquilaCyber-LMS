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
      answer:
        "AquilaCyberLMS is a comprehensive learning management system designed specifically for cybersecurity education and training.",
    },
    {
      question: "What is AquilaCyberLMS?",
      answer:
        "AquilaCyberLMS is a comprehensive learning management system designed specifically for cybersecurity education and training.",
    },
    {
      question: "What is AquilaCyberLMS?",
      answer:
        "AquilaCyberLMS is a comprehensive learning management system designed specifically for cybersecurity education and training.",
    },
    {
      question: "What is AquilaCyberLMS?",
      answer:
        "AquilaCyberLMS is a comprehensive learning management system designed specifically for cybersecurity education and training.",
    },
    {
      question: "What is AquilaCyberLMS?",
      answer:
        "AquilaCyberLMS is a comprehensive learning management system designed specifically for cybersecurity education and training.",
    },
  ];

  return (
    <section className="bg-[#0c131d] py-16 px-10 flex flex-col items-center gap-8 w-full">
      <h2 className="[font-family:'Suisse_Intl-Bold',Helvetica] font-bold text-white text-2xl text-center tracking-[-0.88px] leading-[31.7px] w-full">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full max-w-[950px]">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={`faq-item-${index}`}
            value={`item-${index}`}
            className="mb-4 bg-[#ffffff0f] rounded-xl border border-solid border-[#ffffff1a] overflow-hidden"
          >
            <AccordionTrigger className="px-5 py-4 [font-family:'Circular_Std-Book',Helvetica] font-normal text-white text-lg tracking-[-0.10px] leading-7 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-4 text-white">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
