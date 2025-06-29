import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const CommunitySection = (): JSX.Element => {
  // Background grid cards data
  const gridCards = [
    { top: "top-0", left: "left-[221px]" },
    { top: "top-[266px]", left: "left-0" },
    { top: "top-0", left: "left-[578px]" },
    { top: "top-0", left: "left-[935px]" },
    { top: "top-[266px]", left: "left-[719px]" },
    { top: "top-[266px]", left: "left-[1095px]" },
    { top: "top-[266px]", left: "left-[360px]" },
    { top: "top-[532px]", left: "left-[66px]" },
    { top: "top-[532px]", left: "left-[423px]" },
    { top: "top-[532px]", left: "left-[780px]" },
  ];

  return (
    <div className="flex flex-col items-center relative bg-[#0a121d] w-full">
      <div className="items-center justify-center gap-10 px-0 py-12 bg-[#0a121d] overflow-hidden border-t-[16px] border-r-[16px] border-l-[16px] [border-top-style:solid] [border-right-style:solid] [border-left-style:solid] border-[#1a173d] flex flex-col relative self-stretch w-full">
        <div className="absolute w-[1440px] h-[782px] top-0 left-[-525px]">
          {gridCards.map((card, index) => (
            <Card
              key={`grid-card-${index}`}
              className={`w-[345px] ${card.top} ${card.left} bg-[#ffffff01] shadow-[0px_0px_0px_1px_#283f8066] absolute h-[250px] rounded`}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-8 px-12 py-0 relative self-stretch w-full">
          <img
            className="relative w-[124px] h-[124px]"
            alt="Pixel cybersecurity"
            src="/figmaAssets/pixel-cybersecurity.svg"
          />

          <div className="relative self-stretch [font-family:'Suisse_Intl-Bold',Helvetica] font-bold text-white text-2xl text-center tracking-[0] leading-[34.6px]">
            Be among the first to join community-based learning platform, for
            anyone who invest in themselves and their future dream careers.
          </div>
        </div>
      </div>

      <Card className="flex flex-wrap items-center gap-[72px_44px] p-10 relative self-stretch w-full bg-[#1a173d] backdrop-blur-[25.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25.7px)_brightness(100%)]">
        <div className="flex flex-col min-w-[282px] items-start gap-6 relative flex-1 grow">
          <div className="gap-6 flex flex-col items-start relative self-stretch w-full">
            <div className="flex min-w-[264px] items-center justify-between relative self-stretch w-full">
              <img
                className="relative w-10 h-10"
                alt="Grommet icons"
                src="/figmaAssets/grommet-icons-resources.svg"
              />

              <div className="relative w-[200px] mt-[-1.00px] [font-family:'Hardpixel-Regular',Helvetica] font-normal text-transparent text-base tracking-[0] leading-4">
                <span className="text-[#fe6808] leading-5">
                  Your Learning Toolkit
                </span>

                <span className="text-[#8bad85] leading-5">
                  : Access Our Training Resources on Github
                </span>
              </div>

              <img
                className="relative w-[24.94px] h-[24.94px]"
                alt="Arrow"
                src="/figmaAssets/arrow.png"
              />
            </div>
          </div>

          <Separator className="relative self-stretch w-full h-px" />

          <div className="gap-6 flex flex-col items-start relative self-stretch w-full">
            <div className="flex items-center gap-3 relative self-stretch w-full">
              <img
                className="relative w-10 h-10"
                alt="Fluent people"
                src="/figmaAssets/fluent-people-community-24-regular.svg"
              />

              <div className="relative flex-1 mt-[-1.00px] [font-family:'Hardpixel-Regular',Helvetica] font-normal text-transparent text-base tracking-[0] leading-4">
                <span className="text-[#8bad85] leading-5">
                  Explore Africa&apos;s{" "}
                </span>

                <span className="text-[#fe6808] leading-5">most active</span>

                <span className="text-[#8bad85] leading-5">
                  {" "}
                  cyber learning community.
                </span>
              </div>

              <img
                className="relative w-[24.94px] h-[24.94px]"
                alt="Arrow"
                src="/figmaAssets/arrow-1.png"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
