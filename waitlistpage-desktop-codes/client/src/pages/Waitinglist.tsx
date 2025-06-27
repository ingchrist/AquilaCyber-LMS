import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { NavbarSection } from "./sections/NavbarSection";
import { ResourcesSection } from "./sections/ResourcesSection";

export const Waitinglist = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <NavbarSection />
      <HeroSection />
      <ResourcesSection />
      <FooterSection />
    </main>
  );
};
