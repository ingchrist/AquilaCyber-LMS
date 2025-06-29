import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Grid cell data for background pattern
  const createGridCells = (count: number, borderStyle: string) => {
    return Array(count).fill(borderStyle);
  };

  const gridRows = [
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.06)_0%,rgba(90,164,56,0.09)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(20,18,136,0.04)_0%,rgba(65,56,164,0.06)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0)_0%,rgba(90,164,56,0)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(136,83,18,0.05)_0%,rgba(164,88,56,0.08)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(136,18,18,0.03)_0%,rgba(164,69,56,0.05)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(45,18,136,0.01)_0%,rgba(65,56,164,0.02)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(45,18,136,0.01)_0%,rgba(65,56,164,0.02)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(45,18,136,0.01)_0%,rgba(65,56,164,0.02)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.04)_100%)_1]",
    ),
    createGridCells(
      23,
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1]",
    ),
  ];

  // Background cards data
  const backgroundCards = [
    {
      top: "top-0",
      left: "left-[284px]",
      shadow: "shadow-[0px_0px_0px_1px_#283f8047]",
    },
    {
      top: "top-0",
      left: "left-[-173px]",
      shadow: "shadow-[0px_0px_0px_1px_#283f8047]",
    },
    {
      top: "top-[266px]",
      left: "left-0",
      shadow: "shadow-[0px_0px_0px_1px_#283f8054]",
    },
    {
      top: "top-[266px]",
      left: "left-[-461px]",
      shadow: "shadow-[0px_0px_0px_1px_#283f8054]",
    },
    {
      top: "top-0",
      left: "left-[740px]",
      shadow: "shadow-[0px_0px_0px_1px_#283f8047]",
    },
    {
      top: "top-0",
      left: "left-[1197px]",
      shadow: "shadow-[0px_0px_0px_1px_#283f8047]",
    },
    {
      top: "top-[266px]",
      left: "left-[928px]",
      shadow: "shadow-[0px_0px_0px_1px_#283f8066]",
    },
    {
      top: "top-[266px]",
      left: "left-[1413px]",
      shadow: "shadow-[0px_0px_0px_1px_#283f8066]",
    },
    {
      top: "top-[266px]",
      left: "left-[464px]",
      shadow: "shadow-[0px_0px_0px_1px_#283f8066]",
    },
  ];

  // User avatars data
  const avatars = [
    { src: "/figmaAssets/ellipse-1-1.png", alt: "User avatar" },
    { src: "/figmaAssets/ellipse-5.png", alt: "User avatar" },
    { src: "/figmaAssets/ellipse-3.png", alt: "User avatar" },
    { src: "/figmaAssets/ellipse-4.png", alt: "User avatar" },
    { src: "/figmaAssets/ellipse-5.png", alt: "User avatar" },
  ];

  return (
    <section className="flex flex-col items-start gap-8 pt-24 pb-[124px] px-6 md:px-[164px] relative self-stretch w-full overflow-hidden bg-[linear-gradient(90deg,rgba(3,13,23,1)_7%,rgba(6,13,20,1)_100%)]">
      {/* Background grid pattern */}
      <div className="absolute w-full h-[1152px] top-0 left-0 opacity-70">
        <div className="relative h-[1152px]">
          <div className="flex flex-col w-full items-start">
            {gridRows.map((row, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                className="flex items-center relative self-stretch w-full flex-[0_0_auto]"
              >
                {row.map((cellStyle, cellIndex) => (
                  <div
                    key={`cell-${rowIndex}-${cellIndex}`}
                    className={`relative w-[72px] h-[72px] border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b] ${cellStyle}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background cards */}
      <div className="absolute w-full h-[782px] top-[164px] left-0 md:left-[334px] pointer-events-none">
        {backgroundCards.map((card, index) => (
          <div
            key={`bg-card-${index}`}
            className={`absolute w-[445px] h-[250px] ${card.top} ${card.left} bg-[#ffffff01] rounded ${card.shadow}`}
          />
        ))}

        <div className="inline-flex items-center gap-3 absolute top-[532px] left-[-372px]">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={`card-row1-${index}`}
                className="relative w-[444.72px] h-[250.41px] bg-[#ffffff01] rounded shadow-[0px_0px_0px_1px_#283f8066]"
              />
            ))}
        </div>

        <div className="inline-flex items-center gap-4 absolute top-[794px] -left-56">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={`card-row2-${index}`}
                className="relative w-[444.72px] h-[250.41px] bg-[#ffffff01] rounded shadow-[0px_0px_0px_1px_#283f8066]"
              />
            ))}
        </div>
      </div>

      {/* Decorative image */}
      <img
        className="absolute w-[444px] h-[444px] top-0 right-0 md:left-[980px] hidden md:block"
        alt="Pixel cybersecurity"
        src="/figmaAssets/pixel-cybersecurity.svg"
      />

      {/* Glow effect */}
      <div className="absolute w-full md:w-[1496px] h-[647px] top-11 left-0 md:left-[398px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(162,235,42,1)_0%,rgba(0,54,31,0)_100%)] opacity-[0.23]" />

      {/* Main content */}
      <div className="relative self-stretch w-full h-auto md:h-[513px] z-10">
        <div className="relative w-full md:w-[1112px] h-auto md:h-[513px]">
          <div className="w-full md:w-[1112px] h-auto md:h-[513px]">
            {/* Left column - Hero text and CTA */}
            <div className="flex flex-col w-full md:w-[600px] items-start gap-8">
              <div className="flex-col w-full md:w-[590px] gap-3 flex items-start relative flex-[0_0_auto]">
                <Badge className="bg-[#ffffff14] text-[#c1c1c1] border-[#ffffff1a] rounded-lg p-3 font-normal">
                  Used by 2,000+ Cybersecurity Enthusiasts
                </Badge>

                <h1 className="relative self-stretch font-bold text-4xl md:text-[52px] tracking-[0] leading-tight md:leading-[52px]">
                  <span className="text-[#fe6808] md:leading-[68.6px]">
                    Master Cybersecurity
                  </span>
                  <span className="text-[#8bad84] leading-[0.1px]">
                    {" "}
                    skills, faster and more effectively
                  </span>
                </h1>
              </div>

              <div className="flex flex-col md:flex-row h-auto md:h-14 items-center gap-6 relative self-stretch w-full">
                <Button className="bg-[#d19016] text-[#0f1626] hover:bg-[#c08015] rounded-lg px-10 py-4 font-medium">
                  Get started for free
                </Button>

                <Button
                  variant="outline"
                  className="bg-[linear-gradient(270deg,rgba(29,46,72,0.09)_0%,rgba(67,98,145,0.03)_100%)] text-[#e8e8e8] rounded-lg px-8 py-4 border-none hover:bg-[rgba(29,46,72,0.15)]"
                >
                  Explore AquillaCyberLMS
                  <ArrowRightIcon className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>

            {/* Right column - Feature highlights */}
            <div className="absolute w-full md:w-[740px] h-auto md:h-[417px] top-24 left-0 md:left-[372px]">
              <div className="flex flex-col w-full md:w-[296px] items-start gap-6 mt-8 md:mt-0 md:absolute md:top-[313px] md:left-0">
                <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
                  <img
                    className="relative w-8 h-8"
                    alt="Icon"
                    src="/figmaAssets/icon.png"
                  />
                  <div className="w-fit font-normal text-[#f4c0a8] text-lg whitespace-nowrap relative tracking-[0] leading-6">
                    Hands-on Experience
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
                  <img
                    className="relative w-8 h-8"
                    alt="Icon"
                    src="/figmaAssets/icon-4.svg"
                  />
                  <div className="w-[171px] mt-[-1.00px] font-normal text-[#f4c0a8] text-lg relative tracking-[0] leading-6">
                    Access to structured programs
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full md:w-[468px] items-end justify-center gap-3 mt-8 md:mt-0 md:absolute md:top-0 md:left-[272px]">
                <Card className="flex flex-col items-start gap-3 p-4 relative self-stretch w-full flex-[0_0_auto] rounded-[10px] border border-solid border-[#077d94] shadow-[0px_6px_12px_#00000033] bg-[linear-gradient(180deg,rgba(11,250,218,0.21)_0%,rgba(246,250,11,0.06)_100%)]">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]">
                      <img
                        className="relative w-6 h-6"
                        alt="Icon"
                        src="/figmaAssets/icon-1.png"
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

                <div className="inline-flex items-center gap-[11px] relative flex-[0_0_auto]">
                  <div className="relative w-2.5 h-[254px] bg-[#5aa337] rounded-lg" />
                  <Card className="bg-[#19223bb2] rounded-lg border-none">
                    <CardContent className="p-4">
                      <p className="relative w-full md:w-[367px] mt-[-1.00px] font-normal text-[#8b949e] text-xl md:text-2xl tracking-[0.05px] leading-[30px] md:leading-[39.4px]">
                        Join thousands of learners mastering real-world security
                        skills with interactive labs, and a vibrant community
                        designed to accelerate your cybersecurity career.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* User avatars section */}
          <div className="inline-flex px-0 py-4 mt-8 md:mt-0 md:absolute md:top-[393px] md:left-0 flex-col items-start gap-3 rounded-[10px] shadow-[0px_6px_12px_#00000033]">
            <div className="inline-flex flex-col items-start justify-center gap-4 relative flex-[0_0_auto]">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                {avatars.map((avatar, index) => (
                  <img
                    key={`avatar-${index}`}
                    className={
                      index > 0
                        ? "-ml-3 relative w-11 h-11 object-cover"
                        : "relative w-11 h-11 object-cover"
                    }
                    alt={avatar.alt}
                    src={avatar.src}
                  />
                ))}
                <div className="flex w-11 h-11 items-center justify-center relative -ml-3 bg-[#272b2d] rounded-[100px] border-4 border-solid border-[#84848424]">
                  <div className="relative w-fit font-medium text-white text-xs leading-4 whitespace-nowrap text-center tracking-[0]">
                    +200
                  </div>
                </div>
              </div>

              <div className="relative w-fit font-normal italic text-[#e8e8e8] text-base tracking-[0.32px] leading-[19.8px] whitespace-nowrap">
                Over 200+ learners learning on AquilaLM
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
