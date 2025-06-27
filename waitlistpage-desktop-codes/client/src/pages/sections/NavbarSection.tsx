import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const NavbarSection = (): JSX.Element => {
  // Navigation links data
  const navLinks = [
    { text: "About us", href: "#about" },
    { text: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="flex items-center justify-between px-16 py-6 w-full bg-[#0b1321]">
      {/* Logo section */}
      <div className="flex items-center gap-2">
        <img
          className="w-[32.42px] h-8"
          alt="Figma logo"
          src="/figmaAssets/figma-logo.svg"
        />
        <span className="[font-family:'Hardpixel-Regular',Helvetica] font-normal text-[#f6f6f6] text-2xl leading-7 whitespace-nowrap">
          AquilacyberLMS
        </span>
      </div>

      {/* Navigation links */}
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-7">
          {navLinks.map((link, index) => (
            <NavigationMenuItem key={index}>
              <Button
                asChild
                variant="link"
                className="p-0 [font-family:'Circular_Std-Medium',Helvetica] font-medium text-[#6fcf46] text-xl leading-6"
              >
                <NavigationMenuLink href={link.href}>
                  {link.text}
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
