import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const StatsSection = (): JSX.Element => {
  // Partner logos data
  const partners = [
    {
      logo: "/figmaAssets/group-45.png",
      name: "SmartFinder",
      gradient: false,
    },
    {
      logo: "/figmaAssets/vector.svg",
      name: "SHELLS",
      gradient: true,
    },
    {
      logo: "/figmaAssets/vector-1.svg",
      name: "SHELLS",
      gradient: false,
    },
    {
      logo: "/figmaAssets/vector-4.svg",
      name: "Zoomerr",
      gradient: false,
    },
    {
      logo: "/figmaAssets/vector-1.svg",
      name: "SHELLS",
      gradient: false,
    },
    {
      logo: "/figmaAssets/vector-1.svg",
      name: "SHELLS",
      gradient: false,
    },
    {
      logo: "/figmaAssets/vector-1.svg",
      name: "SHELLS",
      gradient: false,
    },
    {
      logo: "/figmaAssets/vector-3.svg",
      name: "WAVES",
      gradient: true,
      reverseGradient: true,
    },
    {
      logo: "/figmaAssets/group-46.png",
      name: "ArtVenue",
      gradient: false,
    },
  ];

  // Stats data
  const stats = [
    {
      icon: "/figmaAssets/rocket.png",
      value: "92%",
      description: "learner satisfaction rate",
    },
    {
      icon: "/figmaAssets/cyber-security.png",
      value: "3 000+",
      description: "learners and career switchers",
    },
    {
      icon: "/figmaAssets/hacking-1.png",
      value: "250+",
      description: "Hands-on labs and challenges",
    },
    {
      icon: "/figmaAssets/career-ladder.png",
      value: "47%",
      description: "transitioned into cybersecurity roles",
    },
    {
      icon: "/figmaAssets/trust.png",
      value: "40+",
      description: "organizations trust us",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-16 p-[124px] relative self-stretch w-full flex-[0_0_auto] bg-[#000d19]">
      <div className="flex flex-col items-center gap-5 relative self-stretch w-full">
        <div className="inline-flex items-center justify-center gap-2.5 pl-16 pr-0 py-0 relative flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] [font-family:'Circular_Std-Medium',Helvetica] font-medium text-[#e8e8e8] text-lg text-center tracking-[0] leading-8 whitespace-nowrap">
            Trusted by 20+ partners and organizations
          </p>
        </div>

        <ScrollArea className="w-full">
          <div className="flex items-center justify-center gap-8 px-24 py-6 relative">
            {partners.map((partner, index) => (
              <div
                key={`partner-${index}`}
                className="inline-flex items-center justify-center gap-2 px-12 py-8 relative flex-[0_0_auto] bg-[#ffffff14] rounded-xl"
              >
                <img
                  className={`relative ${partner.logo.includes("group-45") ? "w-[33.16px]" : partner.logo.includes("group-46") ? "w-[55.81px]" : partner.logo.includes("vector-3") ? "w-[21.03px]" : partner.logo.includes("vector-4") ? "w-8" : "w-[30.4px]"} h-8`}
                  alt={partner.name}
                  src={partner.logo}
                />

                <div
                  className={`relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] ${
                    partner.gradient
                      ? partner.reverseGradient
                        ? "bg-[linear-gradient(90deg,rgba(148,163,184,1)_0%,rgba(117,129,146,0.63)_38%,rgba(66,73,82,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
                        : "bg-[linear-gradient(90deg,rgba(148,163,184,0.06)_0%,rgba(148,163,184,0.5)_47%,rgba(148,163,184,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
                      : "text-white"
                  } text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]`}
                >
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <Card className="flex flex-col items-start gap-6 px-12 py-8 relative self-stretch w-full flex-[0_0_auto] bg-[#fdf1d1] rounded-lg border-none">
        <CardContent className="p-0 w-full">
          <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative flex-1 mt-[-1.00px] [font-family:'Suisse_Int'l-Medium',Helvetica] font-medium text-[#000d19] text-[32px] tracking-[0] leading-[42.2px]">
              From promotions to transitions, AquilaCyberLMS opens new doors
            </h2>
          </div>

          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] mt-6">
            {stats.map((stat, index) => (
              <div
                key={`stat-${index}`}
                className="flex flex-col min-w-[124px] max-w-[200px] items-center gap-3 relative flex-1 grow self-stretch"
              >
                <img
                  className="relative w-8 h-8"
                  alt={stat.description}
                  src={stat.icon}
                />

                <div className="items-center self-stretch w-full flex-[0_0_auto] flex flex-col relative">
                  <div className="relative self-stretch mt-[-1.00px] [font-family:'Circular_Std-Bold',Helvetica] font-bold text-[#a35837] text-lg text-center tracking-[0] leading-7">
                    {stat.value}
                  </div>

                  <div className="relative self-stretch [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#a35837] text-base text-center tracking-[0] leading-5">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
