import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const FooterSection = (): JSX.Element => {
  // Data for accordion items
  const accordionItems = [
    { id: "product", title: "Product" },
    { id: "resources", title: "Resources" },
    { id: "community", title: "Community" },
    { id: "company", title: "Company" },
  ];

  // Data for product cards
  const products = [
    {
      name: "HACKRIFT",
      logo: "/figmaAssets/figma-logo.svg",
      logoWidth: "14.18px",
      logoHeight: "3.5",
      textColor: "text-[#57db83]",
      bgColor: "bg-[#804d4d]",
    },
    {
      name: "HIT",
      logo: null,
      textColor: "text-[#ef1ae5]",
      bgColor: "bg-[#ffffff26]",
    },
    {
      name: "AquilaCyber",
      logo: null,
      textColor: "text-[#c15008]",
      bgColor: "bg-[#5572f326]",
      fontFamily: "[font-family:'Circular_Std-Book',Helvetica]",
    },
  ];

  return (
    <footer className="flex flex-col items-start gap-6 pt-8 pb-6 px-8 relative self-stretch w-full flex-[0_0_auto] bg-[#0d1117]">
      <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
        {/* Header with logo and social icons */}
        <div className="flex items-start justify-between px-0 py-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[144.86px] h-8">
            <div className="flex w-36 h-8 items-center gap-2 relative">
              <img
                className="relative w-[32.42px] h-8 ml-[-0.21px]"
                alt="Figma logo"
                src="/figmaAssets/figma-logo-1.svg"
              />
              <div className="mr-[-1.56px] text-[#f6f6f6] text-2xl leading-[29.8px] relative w-fit [font-family:'Hardpixel-Regular',Helvetica] font-normal tracking-[0] whitespace-nowrap">
                HACKRIFT
              </div>
            </div>
          </div>

          <div className="inline-flex flex-col items-start relative self-stretch flex-[0_0_auto]">
            <div className="inline-flex items-center gap-5 px-2 py-0 relative flex-[0_0_auto]">
              <img
                className="relative w-6 h-[23px]"
                alt="Social icons"
                src="/figmaAssets/social-icons-2.svg"
              />
              <img
                className="relative w-6 h-6"
                alt="Social icons"
                src="/figmaAssets/social-icons.svg"
              />
              <img
                className="relative w-6 h-6"
                alt="Social icons"
                src="/figmaAssets/social-icons-1.svg"
              />
            </div>
          </div>
        </div>

        {/* Main content section */}
        <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
          {/* Tagline and GDPR section */}
          <div className="min-w-[282px] items-start gap-6 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative mt-[-1.00px] [font-family:'Circular_Std-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-7">
                Learn and Master Cybersecurity the best way
              </div>
            </div>

            <div className="flex items-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
              <Badge
                variant="outline"
                className="flex w-12 h-12 items-center justify-center relative bg-[#ffffff1a] rounded-xl border-none"
              >
                <div className="flex flex-col items-start w-4 h-[22px] relative">
                  <div className="flex flex-col items-center justify-center w-4 h-[22px] relative">
                    <img
                      className="w-4 h-[22px] relative"
                      alt="Svg"
                      src="/figmaAssets/icon1-svg.svg"
                    />
                  </div>
                </div>
              </Badge>

              <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                GDPR compliant
              </div>
            </div>
          </div>

          {/* Accordion section */}
          <div className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
            <Accordion
              type="single"
              collapsible
              className="flex-col justify-center gap-5 flex items-center relative self-stretch w-full"
            >
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="gap-4 px-6 py-3 bg-[#ffffff14] rounded-lg flex items-center relative self-stretch w-full"
                >
                  <AccordionTrigger className="flex justify-between items-center w-full">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Circular_Std-Bold',Helvetica] font-bold text-white text-base tracking-[0] leading-6">
                      {item.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* Content would go here */}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Products section */}
        <div className="flex flex-col items-start justify-center pt-6 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Circular_Std-Medium',Helvetica] font-medium text-white text-base tracking-[0.03px] leading-6 whitespace-nowrap">
                Discover Other AlturaCyber Products
              </div>
            </div>

            <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
              {products.map((product, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className={`inline-flex flex-col items-center justify-center px-4 py-3 relative flex-[0_0_auto] ${product.bgColor} rounded-xl border-none`}
                >
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    {product.logo && (
                      <img
                        className={`relative w-[${product.logoWidth}] h-${product.logoHeight} ml-[-0.09px]`}
                        alt="Figma logo"
                        src={product.logo}
                      />
                    )}
                    <div
                      className={`${product.textColor} text-base leading-[19.8px] relative w-fit ${product.fontFamily || "[font-family:'Hardpixel-Regular',Helvetica]"} font-normal tracking-[0] whitespace-nowrap`}
                    >
                      {product.name}
                    </div>
                  </div>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer copyright section */}
      <div className="flex flex-col items-start gap-4 p-6 relative self-stretch w-full flex-[0_0_auto] bg-[#0d1117] border-t [border-top-style:solid] border-[#ffffff1a]">
        <div className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center justify-center gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <img
                className="relative w-4 h-4"
                alt="Mynaui copyright"
                src="/figmaAssets/mynaui-copyright.png"
              />
              <div className="mt-[-0.50px] font-medium text-[#f0f0f0] leading-[14.9px] relative w-fit [font-family:'Nunito',Helvetica] text-xs tracking-[0] whitespace-nowrap">
                2025 AquillaCyber All rights reserved.
              </div>
            </div>

            <div className="relative w-fit [font-family:'Nunito',Helvetica] font-normal text-transparent text-xs tracking-[0] leading-3">
              <a
                href="https://privacy-policy"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-medium text-[#8591a5] leading-4 underline">
                  Privacy Policy
                </span>
              </a>

              <span className="font-medium text-white leading-4"> &amp; </span>

              <a
                href="https://app.buildclub.ai/terms"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-medium text-[#8591a5] leading-4 underline">
                  Terms of Service
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
