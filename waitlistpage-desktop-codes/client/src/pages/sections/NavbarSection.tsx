import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const NavbarSection = (): JSX.Element => {
  // Navigation menu items with dropdown indicators
  const navItems = [
    { name: "Products", hasDropdown: true },
    { name: "Resources", hasDropdown: true },
    { name: "Hacking labs", hasDropdown: false },
    { name: "About us", hasDropdown: false },
    { name: "FAQs", hasDropdown: false },
  ];

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#141d2b] border-b-[0.4px] border-[#0b1321] w-full md:px-[164px]">
      {/* Logo section */}
      <div className="flex items-center gap-2 h-8">
        <img
          className="w-[32.42px] h-8"
          alt="Figma logo"
          src="/figmaAssets/figma-logo.svg"
        />
        <div className="text-[#e16666] text-2xl leading-[29.8px] [font-family:'Hardpixel-Regular',Helvetica] font-normal">
          HACKRIFT
        </div>
      </div>

      {/* Navigation menu */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex gap-3">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              {item.hasDropdown ? (
                <NavigationMenuTrigger className="flex items-center gap-1 p-4 text-[#c1c1c1] [font-family:'Circular_Std-Book',Helvetica] text-base">
                  {item.name}
                </NavigationMenuTrigger>
              ) : (
                <Button
                  variant="ghost"
                  className="p-4 text-[#c1c1c1] [font-family:'Circular_Std-Book',Helvetica] text-base hover:bg-transparent"
                >
                  {item.name}
                </Button>
              )}
              {item.hasDropdown && (
                <NavigationMenuContent>
                  <div className="p-4 w-[200px]">
                    <div className="text-sm text-muted-foreground">
                      {item.name} dropdown content
                    </div>
                  </div>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Auth buttons */}
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="px-8 py-3 rounded-lg border-[#d08f15] text-[#d08f15] [font-family:'Circular_Std-Medium',Helvetica] font-medium"
        >
          Login
        </Button>
        <Button className="px-8 py-3 bg-[#d08f15] text-[#0f1626] [font-family:'Circular_Std-Medium',Helvetica] font-medium hover:bg-[#d08f15]/90">
          Sign up
        </Button>
      </div>
    </header>
  );
};
