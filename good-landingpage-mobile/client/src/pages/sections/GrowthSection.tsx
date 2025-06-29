import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const GrowthSection = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      icon: "/figmaAssets/hacking.png",
      alt: "Hacking",
      title: "Interactive Labs & Quests",
      description:
        "Learn by practicing with labs designed by real security professionals.",
    },
    {
      icon: "/figmaAssets/mission.png",
      alt: "Mission",
      title: "CTF Challenges & Quests",
      description:
        "Gamified learning that rewards real skills, not just theory.",
    },
    {
      icon: "/figmaAssets/journey.png",
      alt: "Journey",
      title: "Custom Learning Paths",
      description:
        "Whether you're a beginner or pro, we've got a path that fits.",
    },
    {
      icon: "/figmaAssets/online-conference.png",
      alt: "Online conference",
      title: "Mentorship & Community",
      description:
        "Connect with mentors, join collab sprints, or teach others.",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center pt-0 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto] bg-[#060d14] overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-2.5 px-6 py-8 relative w-full flex-[0_0_auto] bg-[#000d19] rounded-[4px_4px_0px_0px] border-t-[24px] border-l-[24px] border-r-[24px] border-b-[24px] border-solid border-[#1a173d]">
        <div className="items-center justify-center gap-[39px] flex flex-col max-w-[1188px] relative w-full flex-[0_0_auto] mx-auto">
          <h2 className="relative self-stretch mt-[-1.00px] [text-shadow:0px_0px_4px_#00000040] [font-family:'Suisse_Intl-Bold',Helvetica] font-bold text-[#d08f15] text-2xl text-center tracking-[0.10px] leading-[31.7px]">
            Built to put your growth and career first
          </h2>

          <div className="items-center justify-center gap-11 flex flex-col max-w-[1188px] relative w-full flex-[0_0_auto]">
            <div className="flex flex-wrap items-start justify-center gap-[24px_44px] relative self-stretch w-full flex-[0_0_auto]">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="flex flex-col w-[264px] items-start gap-5 px-3 py-1 relative bg-transparent border-none"
                >
                  <CardContent className="p-0">
                    <img
                      className="relative w-11 h-11"
                      alt={feature.alt}
                      src={feature.icon}
                    />

                    <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] mt-5">
                      <h3 className="relative self-stretch mt-[-1.00px] [text-shadow:0px_0px_4px_#00000040] [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#d9d9d9] text-xl tracking-[0] leading-7">
                        {feature.title}
                      </h3>

                      <p className="relative self-stretch [text-shadow:0px_0px_4px_#00000040] [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#9da7b9] text-lg tracking-[0] leading-7">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
