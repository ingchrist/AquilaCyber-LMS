import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Define grid cell styles for reuse
  const gridCellStyles = [
    "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1]",
    "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]",
    "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(18,136,49,0)_0%,rgba(90,164,56,0)_100%)_1]",
    "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(20,18,136,0.04)_0%,rgba(65,56,164,0.06)_100%)_1]",
    "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(136,83,18,0.05)_0%,rgba(164,88,56,0.08)_100%)_1]",
    "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(136,18,18,0.03)_0%,rgba(164,69,56,0.05)_100%)_1]",
    "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(45,18,136,0.01)_0%,rgba(65,56,164,0.02)_100%)_1]",
  ];

  // Feature cards data
  const featureCards = [
    {
      id: 1,
      position: "top-8 left-[124px]",
      image: "/figmaAssets/image-2.png",
      badge: "STRUCTURED CURRICULUM",
      description:
        "Access expert mentors for real-time guidance, feedback, and career advice to accelerate your learning journey.",
    },
    {
      id: 2,
      position: "top-8 left-[521px]",
      image: "/figmaAssets/image-3.png",
      badge: "MENTORSHIP INTEGRATION",
      description:
        "Access expert mentors for real-time guidance, feedback, and career advice to accelerate your learning journey.",
    },
    {
      id: 3,
      position: "top-8 left-[919px]",
      image: "/figmaAssets/image-5.png",
      badge: "COMMUNITY FEED",
      description:
        "Stay connected with peers, share your accomplishments, give and receive kudos, and stay motivated through social-style updates.",
    },
    {
      id: 4,
      position: "top-[380px] left-[124px]",
      image: "/figmaAssets/image-4.png",
      badge: "JOB-READY SKILLS",
      description:
        "Unlock achievements, earn points, level up, and track your progress through community leaderboards.",
    },
    {
      id: 5,
      position: "top-[380px] left-[521px]",
      image: "/figmaAssets/image-1.png",
      badge: "INTERACTIVE LABS",
      description:
        "Hands-on, dockerized vulnerable machines with OpenVPN access to help you practice real-world skills in a safe environment.",
    },
    {
      id: 6,
      position: "top-[380px] left-[919px]",
      image: "/figmaAssets/image.png",
      badge: "GAMIFIED PROGRESSION",
      description:
        "Unlock achievements, earn points, level up, and track your progress through community leaderboards.",
    },
  ];

  // Create a grid of cells for the background pattern
  const renderGridBackground = () => {
    // Create 21 rows with 21 cells each
    const rows = 21;
    const cellsPerRow = 21;

    return (
      <div className="flex flex-col w-[1620px] h-[1275px] items-start absolute top-0 left-[-108px] opacity-70">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex items-center relative self-stretch w-full flex-[0_0_auto]"
            style={rowIndex > 0 ? { marginBottom: `${-72 * rowIndex}px` } : {}}
          >
            {Array.from({ length: cellsPerRow }).map((_, cellIndex) => {
              // Select a style based on some pattern (can be adjusted)
              const styleIndex = (rowIndex + cellIndex) % gridCellStyles.length;
              const isLastCell = cellIndex === cellsPerRow - 1;

              return (
                <div
                  key={`cell-${rowIndex}-${cellIndex}`}
                  className={`relative w-[72px] h-[72px] ${gridCellStyles[styleIndex]} ${isLastCell ? "mr-[-36.00px]" : ""}`}
                />
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="flex flex-col items-center justify-center gap-12 px-6 py-[124px] relative self-stretch w-full flex-[0_0_auto] overflow-hidden bg-[linear-gradient(0deg,rgba(11,19,33,1)_0%,rgba(11,19,33,1)_100%)]">
      {/* Background grid pattern */}
      {renderGridBackground()}

      {/* Main content section */}
      <div className="flex items-start justify-between px-[124px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[528px] items-start gap-2 relative">
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <Badge className="relative self-stretch h-[19px] mt-[-1.00px] font-bold text-[#a2eb2a] text-sm tracking-[0.48px] leading-4 whitespace-nowrap bg-transparent border-none">
              YOUR ALL-IN-ONE CYBERSECURITY LEARNING PLATFORM
            </Badge>

            <h2 className="relative self-stretch [font-family:'Suisse_Intl-Bold',Helvetica] font-bold text-[#d08f15] text-[32px] tracking-[0.13px] leading-[42.2px]">
              Everything you need for a successful Cybersecurity Career
            </h2>
          </div>

          <p className="relative self-stretch [font-family:'Circular_Std-Medium',Helvetica] text-base leading-4">
            <span className="font-medium text-[#8b949e] tracking-[0.03px] leading-6">
              At AquilaCyberLMS, we've crafted a comprehensive platform to help
              you grow from beginner to pro — with all the tools, resources, and
              support you'll ever need to{" "}
            </span>
            <span className="font-medium text-[#5aa337] tracking-[0.03px] leading-6">
              succeed in cybersecurity.
            </span>
          </p>
        </div>

        <div className="flex-col items-end justify-center inline-flex gap-5 relative flex-[0_0_auto]">
          <Card className="inline-flex p-4 relative flex-[0_0_auto] border border-solid border-[#fa0b53] bg-[linear-gradient(180deg,rgba(250,11,83,0.21)_0%,rgba(250,11,83,0.06)_100%)] flex-col items-start gap-3 rounded-[10px] shadow-[0px_6px_12px_#00000033]">
            <CardContent className="p-0">
              <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
                <img
                  className="relative w-6 h-6"
                  alt="Icon"
                  src="/figmaAssets/icon-2.png"
                />

                <div className="w-fit mt-[-1.00px] [font-family:'Circular_Std-Regular',Helvetica] font-normal text-white text-base whitespace-nowrap relative tracking-[0] leading-6">
                  <span className="[font-family:'Circular_Std-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-6">
                    Your{" "}
                  </span>
                  <span className="[font-family:'Circular_Std-Bold',Helvetica] font-bold">
                    All-in-One Learning Hub, Interactive &amp; Engaging
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex w-[339px] p-4 relative flex-[0_0_auto] border border-solid border-[#fabe0b] bg-[linear-gradient(180deg,rgba(250,154,11,0.21)_0%,rgba(250,174,11,0.06)_100%)] flex-col items-start gap-3 rounded-[10px] shadow-[0px_6px_12px_#00000033]">
            <CardContent className="p-0">
              <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
                <img
                  className="relative w-6 h-6"
                  alt="Icon"
                  src="/figmaAssets/icon-3.png"
                />
                <div className="w-fit mt-[-1.00px] [font-family:'Circular_Std-Bold',Helvetica] font-bold text-white text-base whitespace-nowrap relative tracking-[0] leading-6">
                  Community-Driven, Expert Mentors
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Feature cards grid */}
      <div className="relative w-[1392px] h-[720px]">
        {featureCards.map((card) => (
          <div
            key={card.id}
            className={`inline-flex flex-col items-start gap-6 absolute ${card.position}`}
          >
            <div
              className={`relative w-[324px] h-[180px] rounded-xl`}
              style={{
                background:
                  card.id === 4
                    ? `linear-gradient(0deg,rgba(238,238,238,0.1) 0%,rgba(238,238,238,0.1) 100%),url(../${card.image}) 50% 50% / cover`
                    : `url(../${card.image}) 50% 50% / cover`,
              }}
            />
            <div className="items-start gap-2 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
              <Badge className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-[#7ad899] text-sm tracking-[1.00px] leading-5 bg-transparent border-none">
                {card.badge}
              </Badge>
              <p className="relative self-stretch [font-family:'Circular_Std-Bold',Helvetica] font-bold text-[#efefef] text-base tracking-[0] leading-6">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
