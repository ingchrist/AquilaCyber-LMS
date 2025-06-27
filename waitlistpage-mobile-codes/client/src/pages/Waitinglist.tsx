import { MenuIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";

export const Waitinglist = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start relative">
      <header className="flex w-full items-center justify-between px-8 py-6 relative bg-[#0b1321]">
        <div className="relative h-8">
          <div className="flex items-center gap-2 relative">
            <img
              className="relative w-[32.42px] h-8 ml-[-0.21px]"
              alt="Figma logo"
              src="/figmaAssets/figma-logo.svg"
            />
            <div className="relative w-fit [font-family:'Hardpixel-Regular',Helvetica] font-normal text-[#f6f6f6] text-2xl tracking-[0] leading-7 whitespace-nowrap">
              AquilacyberLMS
            </div>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="p-0">
          <MenuIcon className="w-6 h-6 text-white" />
          <span className="sr-only">MenuIcon</span>
        </Button>
      </header>

      <HeroSection />
      <FeaturesSection />
      <FooterSection />
    </div>
  );
};
