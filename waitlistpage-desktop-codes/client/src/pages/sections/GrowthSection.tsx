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
    <section className="flex flex-col items-start pt-0 pb-6 px-6 relative self-stretch w-full flex-[0_0_auto] bg-[#060d14]">
      <div className="items-center justify-center gap-2.5 px-10 py-16 self-stretch mt-[-24.00px] mb-[-24.00px] ml-[-24.00px] mr-[-24.00px] bg-[#000d19] rounded-[4px_4px_0px_0px] border-[24px] border-solid border-[#1a173d] flex flex-col relative w-full flex-[0_0_auto]">
        <div className="max-w-[1188px] items-center justify-center gap-12 flex flex-col relative w-full flex-[0_0_auto]">
          <h2 className="relative self-stretch mt-[-1.00px] [text-shadow:0px_0px_4px_#00000040] [font-family:'Suisse_Intl-Bold',Helvetica] font-bold text-[#d08f15] text-[32px] text-center tracking-[0.13px] leading-[42.2px]">
            Built to put your growth and career first
          </h2>

          <div className="max-w-[1188px] items-start gap-11 flex flex-col relative w-full flex-[0_0_auto]">
            <div className="flex flex-wrap items-start gap-[24px_44px] relative self-stretch w-full flex-[0_0_auto]">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="flex flex-col w-[264px] items-start gap-5 px-3 py-1 relative bg-transparent border-none"
                >
                  <CardContent className="flex flex-col items-start gap-5 p-0">
                    <img
                      className="relative w-[100px] h-[100px]"
                      alt={feature.alt}
                      src={feature.icon}
                    />

                    <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <h3 className="relative self-stretch mt-[-1.00px] [text-shadow:0px_0px_4px_#00000040] [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#e8e8e8] text-xl tracking-[0] leading-7">
                        {feature.title}
                      </h3>

                      <p className="relative self-stretch [text-shadow:0px_0px_4px_#00000040] [font-family:'Circular_Std-Book',Helvetica] font-normal text-slate-400 text-lg tracking-[0] leading-7">
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
