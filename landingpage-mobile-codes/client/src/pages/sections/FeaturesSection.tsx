import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Grid cell data for background pattern
  const gridCellTypes = {
    green1:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(18,136,49,0.06)_0%,rgba(90,164,56,0.09)_100%)_1]",
    green2:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]",
    green3:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1]",
    purple:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(20,18,136,0.04)_0%,rgba(65,56,164,0.06)_100%)_1]",
    empty:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(18,136,49,0)_0%,rgba(90,164,56,0)_100%)_1]",
    orange:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(136,83,18,0.05)_0%,rgba(164,88,56,0.08)_100%)_1]",
    red: "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(136,18,18,0.03)_0%,rgba(164,69,56,0.05)_100%)_1]",
    green4:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.04)_100%)_1]",
    purple2:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(45,18,136,0.01)_0%,rgba(65,56,164,0.02)_100%)_1]",
  };

  // Feature cards data
  const featureCards = [
    {
      image: "..//figmaAssets/image.png",
      title: "GAMIFIED PROGRESSION",
      description:
        "Unlock achievements, earn points, level up, and track your progress through community leaderboards.",
    },
    {
      image: "..//figmaAssets/image-1.png",
      title: "INTERACTIVE LABS",
      description:
        "Hands-on, dockerized vulnerable machines with OpenVPN access to help you practice real-world skills in a safe environment.",
    },
    {
      image: "..//figmaAssets/image-2.png",
      title: "STRUCTURED CURRICULUM",
      description:
        "Access expert mentors for real-time guidance, feedback, and career advice to accelerate your learning journey.",
    },
    {
      image: "..//figmaAssets/image-3.png",
      title: "MENTORSHIP INTEGRATION",
      description:
        "Access expert mentors for real-time guidance, feedback, and career advice to accelerate your learning journey.",
    },
    {
      image: "..//figmaAssets/image-4.png",
      title: "JOB-READY SKILLS",
      description:
        "Unlock achievements, earn points, level up, and track your progress through community leaderboards.",
      specialBg: true,
    },
    {
      image: "..//figmaAssets/image-5.png",
      title: "COMMUNITY FEED",
      description:
        "Stay connected with peers, share your accomplishments, give and receive kudos, and stay motivated through social-style updates.",
    },
  ];

  // Highlight cards data
  const highlightCards = [
    {
      icon: "/figmaAssets/icon-1.png",
      text: (
        <>
          <span className="font-normal">Your </span>
          <span className="font-bold">
            All-in-One Learning Hub, Interactive &amp; Engaging
          </span>
        </>
      ),
      color: "border-[#fa0b53]",
      bgGradient:
        "bg-[linear-gradient(180deg,rgba(250,11,83,0.21)_0%,rgba(250,11,83,0.06)_100%)]",
    },
    {
      icon: "/figmaAssets/icon-2.png",
      text: <span className="font-bold">Community-Driven, Expert Mentors</span>,
      color: "border-[#fabe0b]",
      bgGradient:
        "bg-[linear-gradient(180deg,rgba(250,154,11,0.21)_0%,rgba(250,174,11,0.06)_100%)]",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-12 px-8 py-[72px] relative self-stretch w-full flex-[0_0_auto] overflow-hidden bg-[linear-gradient(0deg,rgba(11,19,33,1)_0%,rgba(11,19,33,1)_100%)]">
      {/* Background grid pattern */}
      <div className="flex-col items-start top-0 left-[-633px] opacity-70 flex w-[1656px] absolute">
        {/* Generate grid rows */}
        {[
          Array(23).fill(gridCellTypes.green1),
          Array(23).fill(gridCellTypes.green2),
          Array(23).fill(gridCellTypes.green3),
          Array(23).fill(gridCellTypes.purple),
          Array(23).fill(gridCellTypes.empty),
          Array(23).fill(gridCellTypes.orange),
          Array(23).fill(gridCellTypes.green2),
          Array(23).fill(gridCellTypes.red),
          Array(23).fill(gridCellTypes.green3),
          Array(23).fill(gridCellTypes.green2),
          Array(23).fill(gridCellTypes.green2),
          Array(23).fill(gridCellTypes.purple2),
          Array(23).fill(gridCellTypes.purple2),
          Array(23).fill(gridCellTypes.purple2),
          Array(23).fill(gridCellTypes.green4),
          Array(23).fill(gridCellTypes.green3),
        ].map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex items-center relative self-stretch w-full flex-[0_0_auto]"
          >
            {row.map((cellClass, cellIndex) => (
              <div
                key={`cell-${rowIndex}-${cellIndex}`}
                className={`relative w-[72px] h-[72px] ${cellClass}`}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Section header */}
      <div className="items-start flex flex-col relative self-stretch w-full flex-[0_0_auto] border-0 border-none">
        <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <Badge className="relative self-stretch mt-[-1.00px] font-bold text-[#99e500] text-xs tracking-[0.48px] leading-4 bg-transparent [font-family:'Nunito',Helvetica]">
              YOUR ALL-IN-ONE CYBERSECURITY LEARNING PLATFORM
            </Badge>

            <h2 className="relative self-stretch [font-family:'Suisse_Intl-Bold',Helvetica] font-bold text-[#d08f15] text-2xl tracking-[0.10px] leading-[31.7px]">
              Everything you need for a successful Cybersecurity Career
            </h2>
          </div>

          <p className="relative self-stretch [font-family:'Circular_Std-Medium',Helvetica] text-base leading-4">
            <span className="font-medium text-[#8b949e] tracking-[0.03px] leading-6">
              At AquilaCyberLMS, we&#39;ve crafted a comprehensive platform to
              help you grow from beginner to pro — with all the tools,
              resources, and support you&#39;ll ever need to{" "}
            </span>

            <span className="font-medium text-[#5aa337] tracking-[0.03px] leading-6">
              succeed in cybersecurity.
            </span>
          </p>
        </div>
      </div>

      {/* Feature cards */}
      <div className="items-center justify-center gap-8 px-6 py-8 flex flex-col relative self-stretch w-full flex-[0_0_auto] border-0 border-none">
        {featureCards.map((card, index) => (
          <Card
            key={`feature-${index}`}
            className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto] ml-[-23.00px] mr-[-23.00px] border-none bg-transparent shadow-none"
          >
            <CardContent className="p-0">
              <div
                className={`relative w-[324px] h-[180px] rounded-xl ${card.specialBg ? "bg-[linear-gradient(0deg,rgba(33,133,26,0.1)_0%,rgba(33,133,26,0.1)_100%),url(" + card.image + ")_50%_50%_/_cover]" : "[background:url(" + card.image + ")_50%_50%_/_cover]"}`}
              />

              <div className="items-start gap-2 flex flex-col relative self-stretch w-full flex-[0_0_auto] mt-6">
                <Badge className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#5ac551] text-sm tracking-[1.00px] leading-5 bg-transparent">
                  {card.title}
                </Badge>

                <p className="relative self-stretch [font-family:'Circular_Std-Bold',Helvetica] font-bold text-[#efefef] text-base tracking-[0] leading-6">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Highlight cards */}
      <div className="flex flex-col items-end justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
        {highlightCards.map((card, index) => (
          <Card
            key={`highlight-${index}`}
            className={`flex flex-col items-start gap-3 p-4 relative self-stretch w-full flex-[0_0_auto] rounded-[10px] border border-solid ${card.color} shadow-[0px_6px_12px_#00000033] ${card.bgGradient}`}
          >
            <CardContent className="p-0">
              <div className="flex items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <img className="relative w-6 h-6" alt="Icon" src={card.icon} />

                <div className="flex-1 [font-family:'Circular_Std-Regular',Helvetica] text-base leading-6 relative mt-[-1.00px] text-[#f2ece8] tracking-[0]">
                  {card.text}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
