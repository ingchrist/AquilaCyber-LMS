import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Grid cell data for the background pattern
  const gridCellTypes = {
    green1:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.06)_0%,rgba(90,164,56,0.09)_100%)_1]",
    green2:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]",
    green3:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1]",
    purple:
      "[border-image:linear-gradient(137deg,rgba(20,18,136,0.04)_0%,rgba(65,56,164,0.06)_100%)_1]",
    transparent:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0)_0%,rgba(90,164,56,0)_100%)_1]",
    orange:
      "[border-image:linear-gradient(137deg,rgba(136,83,18,0.05)_0%,rgba(164,88,56,0.08)_100%)_1]",
    red: "[border-image:linear-gradient(137deg,rgba(136,18,18,0.03)_0%,rgba(164,69,56,0.05)_100%)_1]",
    purple2:
      "[border-image:linear-gradient(137deg,rgba(45,18,136,0.01)_0%,rgba(65,56,164,0.02)_100%)_1]",
  };

  // Feature card data
  const featureCards = [
    {
      position: "top-8 left-[124px]",
      image: "/figmaAssets/image-2.png",
      tag: "STRUCTURED CURRICULUM",
      description:
        "Access expert mentors for real-time guidance, feedback, and career advice to accelerate your learning journey.",
    },
    {
      position: "top-8 left-[521px]",
      image: "/figmaAssets/image-3.png",
      tag: "MENTORSHIP INTEGRATION",
      description:
        "Access expert mentors for real-time guidance, feedback, and career advice to accelerate your learning journey.",
    },
    {
      position: "top-8 left-[919px]",
      image: "/figmaAssets/image-5.png",
      tag: "COMMUNITY FEED",
      description:
        "Stay connected with peers, share your accomplishments, give and receive kudos, and stay motivated through social-style updates.",
    },
    {
      position: "top-[380px] left-[124px]",
      image: "/figmaAssets/image-4.png",
      imageClass:
        "bg-[linear-gradient(0deg,rgba(238,238,238,0.1)_0%,rgba(238,238,238,0.1)_100%),url(..//figmaAssets/image-4.png)_50%_50%_/_cover]",
      tag: "JOB-READY SKILLS",
      description:
        "Unlock achievements, earn points, level up, and track your progress through community leaderboards.",
    },
    {
      position: "top-[380px] left-[521px]",
      image: "/figmaAssets/image-1.png",
      tag: "INTERACTIVE LABS",
      description:
        "Hands-on, dockerized vulnerable machines with OpenVPN access to help you practice real-world skills in a safe environment.",
    },
    {
      position: "top-[380px] left-[919px]",
      image: "/figmaAssets/image.png",
      tag: "GAMIFIED PROGRESSION",
      description:
        "Unlock achievements, earn points, level up, and track your progress through community leaderboards.",
    },
  ];

  // Create a grid cell component for reuse
  const GridCell = ({ borderClass, isLast = false }) => (
    <div
      className={`relative w-[72px] h-[72px] border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] ${borderClass} ${isLast ? "mr-[-36.00px]" : ""}`}
    />
  );

  return (
    <section className="flex flex-col items-center justify-center gap-12 px-6 py-[124px] relative self-stretch w-full flex-[0_0_auto] overflow-hidden bg-[linear-gradient(0deg,rgba(11,19,33,1)_0%,rgba(11,19,33,1)_100%)]">
      {/* Background grid pattern */}
      <div className="flex flex-col w-[1620px] h-[1275px] items-start absolute top-0 left-[-108px] opacity-70">
        {/* Generate grid rows programmatically */}
        {Array(21)
          .fill(0)
          .map((_, rowIndex) => {
            // Determine which border style to use based on row index
            let borderStyle = gridCellTypes.green3;
            if (rowIndex === 0) borderStyle = gridCellTypes.green1;
            else if (rowIndex === 1) borderStyle = gridCellTypes.green2;
            else if (rowIndex === 2) borderStyle = gridCellTypes.green3;
            else if (rowIndex === 3) borderStyle = gridCellTypes.purple;
            else if (rowIndex === 4) borderStyle = gridCellTypes.transparent;
            else if (rowIndex === 5) borderStyle = gridCellTypes.orange;
            else if (rowIndex === 6) borderStyle = gridCellTypes.green2;
            else if (rowIndex === 7) borderStyle = gridCellTypes.red;
            else if (rowIndex === 8) borderStyle = gridCellTypes.green3;
            else if (rowIndex === 9) borderStyle = gridCellTypes.green2;
            else if (rowIndex === 10) borderStyle = gridCellTypes.purple2;

            return (
              <div
                key={`row-${rowIndex}`}
                className={`flex items-center relative self-stretch w-full flex-[0_0_auto] ${rowIndex > 0 ? `mb-[-${rowIndex * 72}px]` : ""}`}
              >
                {Array(21)
                  .fill(0)
                  .map((_, cellIndex) => (
                    <GridCell
                      key={`cell-${rowIndex}-${cellIndex}`}
                      borderClass={borderStyle}
                      isLast={cellIndex === 20}
                    />
                  ))}
              </div>
            );
          })}
      </div>

      {/* Main content section */}
      <div className="flex items-start justify-between px-[124px] py-0 relative self-stretch w-full flex-[0_0_auto]">
        {/* Left column - Heading and description */}
        <div className="flex flex-col w-[528px] items-start gap-2 relative">
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch h-[19px] mt-[-1.00px] font-bold text-[#a2eb2a] text-sm tracking-[0.48px] leading-4 whitespace-nowrap">
              YOUR ALL-IN-ONE CYBERSECURITY LEARNING PLATFORM
            </div>

            <h2 className="relative self-stretch font-bold text-[#d08f15] text-[32px] tracking-[0.13px] leading-[42.2px]">
              Everything you need for a successful Cybersecurity Career
            </h2>
          </div>

          <p className="relative self-stretch font-normal text-base leading-4">
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

        {/* Right column - Feature highlights */}
        <div className="flex-col items-end justify-center inline-flex gap-5 relative flex-[0_0_auto]">
          <Card className="inline-flex p-4 relative flex-[0_0_auto] border border-solid border-[#fa0b53] bg-[linear-gradient(180deg,rgba(250,11,83,0.21)_0%,rgba(250,11,83,0.06)_100%)] flex-col items-start gap-3 rounded-[10px] shadow-[0px_6px_12px_#00000033]">
            <CardContent className="p-0">
              <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
                <img
                  className="relative w-6 h-6"
                  alt="Icon"
                  src="/figmaAssets/icon-2.png"
                />

                <div className="w-fit mt-[-1.00px] font-normal text-white text-base whitespace-nowrap relative tracking-[0] leading-6">
                  <span className="font-normal text-white text-base tracking-[0] leading-6">
                    Your{" "}
                  </span>

                  <span className="font-bold">
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

                <div className="w-fit mt-[-1.00px] font-bold text-white text-base whitespace-nowrap relative tracking-[0] leading-6">
                  Community-Driven, Expert Mentors
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Feature cards grid */}
      <div className="relative w-[1392px] h-[720px]">
        {featureCards.map((feature, index) => (
          <div
            key={index}
            className={`inline-flex flex-col items-start gap-6 absolute ${feature.position}`}
          >
            <div
              className={
                feature.imageClass ||
                `[background:url(../${feature.image})_50%_50%_/_cover] relative w-[324px] h-[180px] rounded-xl`
              }
            />

            <div
              className={`items-start gap-2 ${index === 0 ? "w-[339.33px]" : "self-stretch w-full"} flex-[0_0_auto] flex flex-col relative`}
            >
              <div className="relative self-stretch mt-[-1.00px] font-bold text-[#7ad899] text-sm tracking-[1.00px] leading-5">
                {feature.tag}
              </div>

              <div
                className={`relative self-stretch ${index === 3 ? "font-display-h6 font-[number:var(--display-h6-font-weight)] text-[#e8e8e8] text-[length:var(--display-h6-font-size)] tracking-[var(--display-h6-letter-spacing)] leading-[var(--display-h6-line-height)] [font-style:var(--display-h6-font-style)]" : "font-bold text-[#efefef] text-base tracking-[0] leading-6"}`}
              >
                {feature.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
