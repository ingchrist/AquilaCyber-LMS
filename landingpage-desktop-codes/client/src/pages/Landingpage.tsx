import React from "react";
import { CommunitySection } from "./sections/CommunitySection";
import { CoursesSection } from "./sections/CoursesSection";
import { FaqSection } from "./sections/FaqSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { GrowthSection } from "./sections/GrowthSection";
import { HeroSection } from "./sections/HeroSection";
import { NavbarSection } from "./sections/NavbarSection";
import { StatsSection } from "./sections/StatsSection";
import { TestimonialCtaSection } from "./sections/TestimonialCtaSection";

export const Landingpage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full max-w-[1440px] mx-auto items-start">
      <NavbarSection />
      <HeroSection />
      <GrowthSection />
      <CoursesSection />
      <StatsSection />
      <FeaturesSection />
      <CommunitySection />
      <TestimonialCtaSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
};
