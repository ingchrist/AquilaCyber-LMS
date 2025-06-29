import { MenuIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

// Import all sections
import { CommunitySection } from "./sections/CommunitySection";
import { CoursesSection } from "./sections/CoursesSection";
import { FaqSection } from "./sections/FaqSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { GrowthSection } from "./sections/GrowthSection";
import { HeroSection } from "./sections/HeroSection";
import { StatsSection } from "./sections/StatsSection";
import { TestimonialSection } from "./sections/TestimonialSection";

export const Landingpage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start relative">
      <header className="flex items-center justify-between px-8 py-6 relative self-stretch w-full flex-[0_0_auto] bg-[#141d2b] border-b-[0.4px] [border-bottom-style:solid] border-[#0b1321]">
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

        <Button variant="ghost" size="icon" className="p-0">
          <MenuIcon className="w-6 h-6 text-white" />
        </Button>
      </header>

      <HeroSection />
      <GrowthSection />
      <CoursesSection />
      <StatsSection />
      <FeaturesSection />
      <CommunitySection />
      <TestimonialSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
};
