import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const HeroSection = (): JSX.Element => {
  // Grid cell data for different gradient styles
  const gridCellTypes = {
    green1:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(18,136,49,0.06)_0%,rgba(90,164,56,0.09)_100%)_1]",
    green2:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]",
    green3:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1]",
    blue1:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(20,18,136,0.04)_0%,rgba(65,56,164,0.06)_100%)_1]",
    transparent:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(18,136,49,0)_0%,rgba(90,164,56,0)_100%)_1]",
    orange:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(136,83,18,0.05)_0%,rgba(164,88,56,0.08)_100%)_1]",
    red: "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(136,18,18,0.03)_0%,rgba(164,69,56,0.05)_100%)_1]",
    purple:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(45,18,136,0.01)_0%,rgba(65,56,164,0.02)_100%)_1]",
    green4:
      "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] [border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.04)_100%)_1]",
  };

  // Background card data
  const backgroundCards = [
    {
      top: "0",
      left: "284px",
      style: "bg-[#ffffff01] shadow-[0px_0px_0px_1px_#283f8047]",
    },
    {
      top: "0",
      left: "-173px",
      style: "bg-[#ffffff01] shadow-[0px_0px_0px_1px_#283f8047]",
    },
    {
      top: "266px",
      left: "0",
      style:
        "shadow-[0px_0px_0px_1px_#283f8054] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(153,153,153,0)_100%)]",
    },
    {
      top: "266px",
      left: "-461px",
      style:
        "shadow-[0px_0px_0px_1px_#283f8054] bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(153,153,153,0)_100%)]",
    },
    {
      top: "0",
      left: "740px",
      style: "bg-[#ffffff01] shadow-[0px_0px_0px_1px_#283f8047]",
    },
    {
      top: "0",
      left: "1197px",
      style: "bg-[#ffffff01] shadow-[0px_0px_0px_1px_#283f8047]",
    },
    {
      top: "266px",
      left: "928px",
      style: "bg-[#ffffff01] shadow-[0px_0px_0px_1px_#283f8066]",
    },
    {
      top: "266px",
      left: "1413px",
      style: "bg-[#ffffff01] shadow-[0px_0px_0px_1px_#283f8066]",
    },
    {
      top: "266px",
      left: "464px",
      style: "bg-[#ffffff01] shadow-[0px_0px_0px_1px_#283f8066]",
    },
  ];

  // User avatars data
  const avatars = [
    { src: "/figmaAssets/ellipse-1-1.png", alt: "Ellipse" },
    { src: "/figmaAssets/ellipse-5.png", alt: "Ellipse" },
    { src: "/figmaAssets/ellipse-3.png", alt: "Ellipse" },
    { src: "/figmaAssets/ellipse-4.png", alt: "Ellipse" },
    { src: "/figmaAssets/ellipse-5.png", alt: "Ellipse" },
  ];

  // Features data
  const features = [
    { icon: "/figmaAssets/icon-3.svg", text: "Access to structured programs" },
    { icon: "/figmaAssets/icon.png", text: "Hands-on Experience" },
  ];

  return (
    <section className="flex flex-col items-start gap-8 pt-[72px] pb-24 px-8 relative self-stretch w-full flex-[0_0_auto] overflow-hidden bg-[linear-gradient(90deg,rgba(0,13,25,1)_7%,rgba(11,18,31,1)_100%)]">
      {/* Background grid pattern */}
      <div className="absolute w-[2192px] h-[1152px] top-0 left-0">
        <div className="relative h-[1152px]">
          <div className="flex flex-col w-[1656px] items-start absolute top-0 left-0 opacity-70">
            {/* Grid rows with cells */}
            {[
              Array(23).fill(gridCellTypes.green1),
              Array(23).fill(gridCellTypes.green2),
              Array(23).fill(gridCellTypes.green3),
              Array(23).fill(gridCellTypes.blue1),
              Array(23).fill(gridCellTypes.transparent),
              Array(23).fill(gridCellTypes.orange),
              Array(23).fill(gridCellTypes.green2),
              Array(23).fill(gridCellTypes.red),
              Array(23).fill(gridCellTypes.green3),
              Array(23).fill(gridCellTypes.green2),
              Array(23).fill(gridCellTypes.green2),
              Array(23).fill(gridCellTypes.purple),
              Array(23).fill(gridCellTypes.purple),
              Array(23).fill(gridCellTypes.purple),
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

          {/* Background cards */}
          <div className="absolute w-[1858px] h-[782px] top-[164px] left-[334px]">
            {backgroundCards.map((card, index) => (
              <div
                key={`card-${index}`}
                className={`w-[445px] top-[${card.top}] left-[${card.left}] ${card.style} absolute h-[250px] rounded`}
              />
            ))}

            {/* Additional card groups */}
            <div className="inline-flex items-center gap-3 absolute top-[532px] left-[-372px]">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={`card-group1-${index}`}
                    className="relative w-[444.72px] h-[250.41px] bg-[#ffffff01] rounded shadow-[0px_0px_0px_1px_#283f8066]"
                  />
                ))}
            </div>

            <div className="inline-flex items-center gap-4 absolute top-[794px] -left-56">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={`card-group2-${index}`}
                    className="relative w-[444.72px] h-[250.41px] bg-[#ffffff01] rounded shadow-[0px_0px_0px_1px_#283f8066]"
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <img
        className="absolute w-4 h-px top-0 left-[374px]"
        alt="Pixel cybersecurity"
        src="/figmaAssets/pixel-cybersecurity.svg"
      />
      <div className="absolute w-[1496px] h-[647px] -top-3 left-[398px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(162,235,42,1)_0%,rgba(0,54,31,0)_100%)] opacity-[0.23]" />

      {/* Main content */}
      <div className="flex flex-col items-start justify-end gap-11 relative self-stretch w-full flex-[0_0_auto]">
        {/* Header section */}
        <div className="items-start gap-5 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <Badge
              variant="outline"
              className="p-3 bg-[#0d0d0d] text-[#dadada] rounded-lg border-[#ffffff1a]"
            >
              <span className="font-normal text-xs">
                Used by 2,000+ Cybersecurity Enthusiasts
              </span>
            </Badge>

            <h1 className="relative self-stretch font-bold text-[32px] tracking-[0] leading-8">
              <span className="text-[#fe6808] leading-[42.2px]">
                Master Cybersecurity
              </span>
              <span className="text-[#8bad84] leading-[0.1px]">
                {" "}
                skills, faster and more effectively
              </span>
            </h1>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <Button className="flex-1 px-6 py-3 bg-[#d08f15] text-[#0f1626] rounded-lg shadow-[0px_1px_2px_#0000000d] font-medium text-base tracking-[0.80px]">
              Get Started
            </Button>

            <Button
              variant="outline"
              className="flex-1 gap-4 px-6 py-3 bg-[linear-gradient(270deg,rgba(29,46,72,0.09)_0%,rgba(67,98,145,0.03)_100%)] text-[#e8e8e8] rounded-lg shadow-[0px_1px_2px_#0000000d] font-medium text-lg tracking-[0.80px]"
            >
              Explore
              <img
                className="w-5 h-5"
                alt="Arrow narrow right"
                src="/figmaAssets/arrow-narrow-right.svg"
              />
            </Button>
          </div>
        </div>

        {/* Social proof section */}
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              {avatars.map((avatar, index) => (
                <img
                  key={`avatar-${index}`}
                  className={`relative w-11 h-11 ${index > 0 ? "-ml-3" : ""} object-cover`}
                  alt={avatar.alt}
                  src={avatar.src}
                />
              ))}
              <div className="flex w-11 h-11 items-center justify-center relative -ml-3 bg-[#272b2d] rounded-[100px] border-4 border-solid border-[#121212]">
                <div className="relative w-fit font-medium text-white text-xs leading-4 whitespace-nowrap text-center tracking-[0]">
                  +200
                </div>
              </div>
            </div>

            <p className="relative flex-1 font-small-texts-md font-[number:var(--small-texts-md-font-weight)] text-[#e8e8e8] text-[length:var(--small-texts-md-font-size)] tracking-[var(--small-texts-md-letter-spacing)] leading-[var(--small-texts-md-line-height)] [font-style:var(--small-texts-md-font-style)]">
              Over 200+ learners are on the waitlist
            </p>
          </div>

          {/* Features list */}
          <div className="flex flex-col items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
            {features.map((feature, index) => (
              <div
                key={`feature-${index}`}
                className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]"
              >
                <img
                  className="relative w-5 h-5"
                  alt="Icon"
                  src={feature.icon}
                />
                <div className="w-fit font-normal text-sm leading-5 whitespace-nowrap relative mt-[-1.00px] text-[#f2ece8] tracking-[0]">
                  {feature.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
