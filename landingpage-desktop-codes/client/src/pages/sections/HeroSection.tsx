import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = (): JSX.Element => {
  // Grid cell data for background pattern
  const gridCellTypes = [
    {
      borderImage:
        "linear-gradient(137deg,rgba(18,136,49,0.06)_0%,rgba(90,164,56,0.09)_100%)_1",
    },
    {
      borderImage:
        "linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1",
    },
    {
      borderImage:
        "linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1",
    },
    {
      borderImage:
        "linear-gradient(137deg,rgba(20,18,136,0.04)_0%,rgba(65,56,164,0.06)_100%)_1",
    },
    {
      borderImage:
        "linear-gradient(137deg,rgba(18,136,49,0)_0%,rgba(90,164,56,0)_100%)_1",
    },
    {
      borderImage:
        "linear-gradient(137deg,rgba(136,83,18,0.05)_0%,rgba(164,88,56,0.08)_100%)_1",
    },
    {
      borderImage:
        "linear-gradient(137deg,rgba(136,18,18,0.03)_0%,rgba(164,69,56,0.05)_100%)_1",
    },
    {
      borderImage:
        "linear-gradient(137deg,rgba(45,18,136,0.01)_0%,rgba(65,56,164,0.02)_100%)_1",
    },
  ];

  // User avatars data
  const userAvatars = [
    { src: "/figmaAssets/ellipse-1-1.png", alt: "User 1" },
    { src: "/figmaAssets/ellipse-5.png", alt: "User 2" },
    { src: "/figmaAssets/ellipse-3.png", alt: "User 3" },
    { src: "/figmaAssets/ellipse-4.png", alt: "User 4" },
    { src: "/figmaAssets/ellipse-5.png", alt: "User 5" },
  ];

  // Feature cards data
  const featureCards = [
    {
      icon: "/figmaAssets/icon.png",
      text: "Hands-on Experience",
      textColor: "text-[#f4c0a8]",
    },
    {
      icon: "/figmaAssets/icon-4.svg",
      text: "Access to structured programs",
      textColor: "text-[#f4c0a8]",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-8 pt-24 pb-[124px] px-6 md:px-[164px] relative self-stretch w-full overflow-hidden bg-[linear-gradient(90deg,rgba(3,13,23,1)_7%,rgba(6,13,20,1)_100%)]">
      {/* Background Grid Pattern */}
      <div className="absolute w-full h-[1152px] top-0 left-0 opacity-70">
        <div className="relative h-[1152px]">
          <div className="flex flex-col w-full items-start">
            {/* Generate grid rows */}
            {[...Array(16)].map((_, rowIndex) => (
              <div
                key={`grid-row-${rowIndex}`}
                className="flex items-center relative self-stretch w-full flex-[0_0_auto]"
              >
                {/* Generate grid cells for each row */}
                {[...Array(23)].map((_, cellIndex) => {
                  // Select a random grid cell type for visual variety
                  const cellType =
                    gridCellTypes[
                      Math.floor(Math.random() * gridCellTypes.length)
                    ];
                  return (
                    <div
                      key={`grid-cell-${rowIndex}-${cellIndex}`}
                      className="relative w-[72px] h-[72px] border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b]"
                      style={{ borderImage: cellType.borderImage }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <img
        className="absolute w-[444px] h-[444px] top-0 right-0 md:right-[164px]"
        alt="Pixel cybersecurity"
        src="/figmaAssets/pixel-cybersecurity.svg"
      />

      <div className="absolute w-full md:w-[1496px] h-[647px] top-11 right-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(162,235,42,1)_0%,rgba(0,54,31,0)_100%)] opacity-[0.23]" />

      {/* Main Content */}
      <div className="relative self-stretch w-full">
        <div className="relative w-full max-w-[1112px]">
          {/* Hero Text and CTA Section */}
          <div className="flex flex-col w-full md:w-[600px] items-start gap-8">
            <div className="flex-col w-full md:w-[590px] gap-3 flex items-start">
              <Badge
                variant="outline"
                className="bg-[#ffffff14] border-[#ffffff1a] text-[#c1c1c1] p-3 rounded-lg"
              >
                Used by 2,000+ Cybersecurity Enthusiasts
              </Badge>

              <h1 className="text-4xl md:text-[52px] font-bold tracking-tight leading-tight">
                <span className="text-[#fe6808]">Master Cybersecurity</span>
                <span className="text-[#8bad84]">
                  {" "}
                  skills, faster and more effectively
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full">
              <Button className="bg-[#d19016] hover:bg-[#c08014] text-[#0f1626] px-10 py-4 rounded-lg h-14">
                Get started for free
              </Button>

              <Button
                variant="outline"
                className="bg-[linear-gradient(270deg,rgba(29,46,72,0.09)_0%,rgba(67,98,145,0.03)_100%)] text-[#e8e8e8] px-8 py-4 rounded-lg h-14 border-none"
              >
                <span className="font-medium tracking-[0.8px]">
                  Explore AquillaCyberLMS
                </span>
                <img
                  className="ml-4 w-6 h-6"
                  alt="Arrow"
                  src="/figmaAssets/arrow-narrow-right.svg"
                />
              </Button>
            </div>
          </div>

          {/* Feature Cards Section */}
          <div className="mt-8 md:mt-0 md:absolute md:w-[740px] md:h-[417px] md:top-24 md:left-[372px]">
            <div className="flex flex-col w-full md:w-[296px] items-start gap-6 md:absolute md:top-[313px] md:left-0">
              {featureCards.map((feature, index) => (
                <div
                  key={`feature-${index}`}
                  className="flex items-center gap-4"
                >
                  <img
                    className="w-8 h-8"
                    alt={feature.text}
                    src={feature.icon}
                  />
                  <div className={`font-normal text-lg ${feature.textColor}`}>
                    {feature.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col w-full md:w-[468px] items-end justify-center gap-3 mt-6 md:mt-0 md:absolute md:top-0 md:left-[272px]">
              <Card className="border border-[#077d94] rounded-[10px] shadow-lg bg-[linear-gradient(180deg,rgba(11,250,218,0.21)_0%,rgba(246,250,11,0.06)_100%)]">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-6 h-6"
                      alt="Icon"
                      src="/figmaAssets/icon-1.png"
                    />
                    <div className="text-white text-base">
                      <span className="font-normal">Your </span>
                      <span className="font-bold">
                        All-in-One Learning Hub, Interactive &amp; Engaging
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center gap-[11px]">
                <div className="w-2.5 h-[254px] bg-[#5aa337] rounded-lg" />
                <div className="bg-[#19223bb2] rounded-lg px-4 py-2.5">
                  <p className="text-[#8b949e] text-lg md:text-2xl tracking-[0.05px] leading-relaxed">
                    Join thousands of learners mastering real-world security
                    skills with interactive labs, and a vibrant community
                    designed to accelerate your cybersecurity career.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* User Avatars Section */}
          <div className="py-4 mt-8 md:mt-0 md:absolute md:top-[393px] md:left-0">
            <div className="flex flex-col items-start justify-center gap-4">
              <div className="flex items-center">
                {userAvatars.map((avatar, index) => (
                  <Avatar
                    key={`avatar-${index}`}
                    className={`w-11 h-11 ${index > 0 ? "-ml-3" : ""} border-4 border-solid border-[#84848424]`}
                  >
                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                    <AvatarFallback>U{index + 1}</AvatarFallback>
                  </Avatar>
                ))}
                <div className="flex w-11 h-11 items-center justify-center -ml-3 bg-[#272b2d] rounded-full border-4 border-solid border-[#84848424]">
                  <span className="text-white text-xs font-medium">+200</span>
                </div>
              </div>
              <p className="text-[#e8e8e8] text-base tracking-[0.32px] italic">
                Over 200+ learners learning on AquilaLM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
