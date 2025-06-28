import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const StatsSection = (): JSX.Element => {
  // Partner logos data
  const partners = [
    {
      name: "SmartFinder",
      logo: "/figmaAssets/group-45.png",
      textStyle: "text-white",
      bgStyle: "",
    },
    {
      name: "SHELLS",
      logo: "/figmaAssets/vector-4.svg",
      textStyle:
        "bg-[linear-gradient(90deg,rgba(148,163,184,0.06)_0%,rgba(148,163,184,0.5)_47%,rgba(148,163,184,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent",
      bgStyle: "",
    },
    {
      name: "SHELLS",
      logo: "/figmaAssets/vector-2.svg",
      textStyle: "text-white",
      bgStyle: "",
    },
    {
      name: "Zoomerr",
      logo: "/figmaAssets/vector.svg",
      textStyle: "text-white",
      bgStyle: "",
    },
    {
      name: "SHELLS",
      logo: "/figmaAssets/vector-2.svg",
      textStyle: "text-white",
      bgStyle: "",
    },
    {
      name: "SHELLS",
      logo: "/figmaAssets/vector-2.svg",
      textStyle: "text-white",
      bgStyle: "",
    },
    {
      name: "SHELLS",
      logo: "/figmaAssets/vector-2.svg",
      textStyle: "text-white",
      bgStyle: "",
    },
    {
      name: "WAVES",
      logo: "/figmaAssets/vector-1.svg",
      textStyle:
        "bg-[linear-gradient(90deg,rgba(148,163,184,1)_0%,rgba(117,129,146,0.63)_38%,rgba(66,73,82,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent",
      bgStyle: "",
    },
    {
      name: "ArtVenue",
      logo: "/figmaAssets/group-46.png",
      textStyle: "text-white",
      bgStyle: "",
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
      icon: "/figmaAssets/trust.png",
      value: "40+",
      description: "organizations trust us",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-16 px-8 py-16 relative w-full bg-[#000d19]">
      <div className="flex flex-col items-center gap-4 relative">
        <div className="flex items-center justify-center gap-2.5 py-0">
          <h2 className="relative w-fit [font-family:'Circular_Std-Medium',Helvetica] font-medium text-gray-200 text-lg text-center tracking-[0] leading-8 whitespace-nowrap">
            Trusted by 20+ partners and organizations
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 py-3 px-4 md:px-8 lg:px-24">
          {partners.map((partner, index) => (
            <div
              key={`partner-${index}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-5 bg-[#ffffff1f] rounded-xl"
            >
              <img
                className="relative w-auto h-8"
                alt={`${partner.name} logo`}
                src={partner.logo}
              />
              <div
                className={`relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] ${partner.textStyle} text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]`}
              >
                {partner.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card className="w-full bg-[#fdf1d1] rounded-lg border-0">
        <CardContent className="items-center justify-center gap-6 px-12 py-8">
          <div className="flex items-start gap-[15px] relative w-full">
            <h3 className="relative flex-1 mt-[-1.00px] [font-family:'Suisse_Int'l-Medium',Helvetica] font-medium text-[#000000eb] text-2xl tracking-[0] leading-[31.7px]">
              From promotions to transitions, AquilaCyberLMS opens new doors
            </h3>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-12 relative overflow-hidden">
            {stats.map((stat, index) => (
              <div
                key={`stat-${index}`}
                className="flex flex-col min-w-[124px] max-w-[200px] h-[132px] items-center gap-3 relative flex-1 grow"
              >
                <img
                  className="relative w-8 h-8"
                  alt={`${stat.description} icon`}
                  src={stat.icon}
                />
                <div className="items-center flex flex-col relative self-stretch w-full">
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
