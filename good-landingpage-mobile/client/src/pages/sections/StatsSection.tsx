import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const StatsSection = (): JSX.Element => {
  // Partner data for mapping
  const partners = [
    {
      name: "SmartFinder",
      icon: "/figmaAssets/group-45.png",
      textClass: "text-white",
      bgClass: "",
    },
    {
      name: "SHELLS",
      icon: "/figmaAssets/vector-4.svg",
      textClass:
        "bg-[linear-gradient(90deg,rgba(148,163,184,0.06)_0%,rgba(148,163,184,0.5)_47%,rgba(148,163,184,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent",
      bgClass: "",
    },
    {
      name: "SHELLS",
      icon: "/figmaAssets/vector-1.svg",
      textClass: "text-white",
      bgClass: "",
    },
    {
      name: "Zoomerr",
      icon: "/figmaAssets/vector.svg",
      textClass: "text-white",
      bgClass: "",
    },
    {
      name: "SHELLS",
      icon: "/figmaAssets/vector-1.svg",
      textClass: "text-white",
      bgClass: "",
    },
    {
      name: "SHELLS",
      icon: "/figmaAssets/vector-1.svg",
      textClass: "text-white",
      bgClass: "",
    },
    {
      name: "SHELLS",
      icon: "/figmaAssets/vector-1.svg",
      textClass: "text-white",
      bgClass: "",
    },
    {
      name: "WAVES",
      icon: "/figmaAssets/vector-6.svg",
      textClass:
        "bg-[linear-gradient(90deg,rgba(148,163,184,1)_0%,rgba(117,129,146,0.63)_38%,rgba(66,73,82,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent",
      bgClass: "",
    },
    {
      name: "ArtVenue",
      icon: "/figmaAssets/group-46.png",
      textClass: "text-white",
      bgClass: "",
    },
  ];

  // Stats data for mapping
  const stats = [
    {
      icon: "/figmaAssets/rocket.png",
      value: "92%",
      description: "learner satisfaction rate",
    },
    {
      icon: "/figmaAssets/trust.png",
      value: "40+",
      description: "organizations trust us",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-16 px-8 py-16 w-full bg-[#000d19]">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="flex items-center justify-center">
          <p className="[font-family:'Circular_Std-Medium',Helvetica] font-medium text-gray-200 text-lg text-center leading-8">
            Trusted by 20+ partners and organizations
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 py-3 w-full overflow-x-auto">
          {partners.map((partner, index) => (
            <Card
              key={`partner-${index}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-[#ffffff1f] rounded-xl border-0"
            >
              <CardContent className="flex items-center gap-2 p-0">
                <img
                  className="w-8 h-8 object-contain"
                  alt={partner.name}
                  src={partner.icon}
                />
                <div
                  className={`font-heading-6 font-[number:var(--heading-6-font-weight)] ${partner.textClass} text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]`}
                >
                  {partner.name}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="w-full bg-[#fdf1d1] rounded-lg border-0">
        <CardContent className="flex flex-col items-center justify-center gap-6 px-12 py-8">
          <div className="flex items-start gap-[15px] w-full">
            <h2 className="flex-1 [font-family:'Suisse_Int'l-Medium',Helvetica] font-medium text-[#000000eb] text-2xl leading-[31.7px]">
              From promotions to transitions, AquilaCyberLMS opens new doors
            </h2>
          </div>

          <div className="flex flex-wrap items-start gap-12 overflow-hidden">
            {stats.map((stat, index) => (
              <div
                key={`stat-${index}`}
                className="flex flex-col min-w-[124px] max-w-[200px] h-[132px] items-center gap-3 flex-1 grow"
              >
                <img
                  className="w-8 h-8"
                  alt={stat.description}
                  src={stat.icon}
                />
                <div className="flex flex-col items-center w-full">
                  <div className="w-full [font-family:'Circular_Std-Bold',Helvetica] font-bold text-[#a35837] text-lg text-center leading-7">
                    {stat.value}
                  </div>
                  <div className="w-full [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#a35837] text-base text-center leading-5">
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
