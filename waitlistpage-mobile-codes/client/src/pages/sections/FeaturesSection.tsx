import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const FeaturesSection = (): JSX.Element => {
  // Feature cards data
  const features = [
    {
      icon: "/figmaAssets/svg.svg",
      title: "Interactive Labs & Tracks",
      description:
        "Learn by practicing with labs designed by real security professionals.",
    },
    {
      icon: "/figmaAssets/svg-2.svg",
      title: "CTF Challenges & Quests",
      description:
        "Gamified learning that rewards real skills, not just theory.",
    },
    {
      icon: "/figmaAssets/svg.svg",
      title: "Custom Learning Paths",
      description:
        "Whether you're a beginner or pro, we've got a path that fits.",
    },
    {
      icon: "/figmaAssets/svg.svg",
      title: "Mentorship & Community",
      description:
        "Connect with mentors, join collab sprints, or teach others.",
    },
  ];

  // Resources data
  const resources = [
    {
      icon: "/figmaAssets/grommet-icons-resources.svg",
      title: "Your Learning Toolkit",
      description: ": Access Our Training Resources on Github",
      arrow: "/figmaAssets/arrow.png",
    },
    {
      icon: "/figmaAssets/fluent-people-community-24-regular.svg",
      title: "most active",
      prefix: "Explore Africa's ",
      suffix: " cyber learning community.",
      arrow: "/figmaAssets/arrow-1.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-[72px] px-8 py-16 relative w-full bg-[#000d19]">
      <div className="flex flex-col max-w-[1188px] items-center gap-8 relative w-full">
        <h2 className="relative self-stretch [text-shadow:0px_0px_4px_#00000040] [font-family:'Hardpixel-Regular',Helvetica] font-normal text-[#6fcf46] text-2xl text-center tracking-[0] leading-8">
          What You&apos;ll Get Early Access to
        </h2>

        <div className="flex flex-wrap gap-[24px_44px] self-stretch w-full items-start">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col w-[264px] gap-2 px-3 py-1 items-start"
            >
              <img className="w-6 h-6" alt="Feature icon" src={feature.icon} />

              <div className="flex flex-col items-start gap-2 self-stretch w-full">
                <h3 className="self-stretch mt-[-1.00px] [text-shadow:0px_0px_4px_#00000040] [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#d9d9d9] text-xl tracking-[0] leading-7">
                  {feature.title}
                </h3>

                <p className="self-stretch [text-shadow:0px_0px_4px_#00000040] [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#9da7b9] text-lg tracking-[0] leading-7">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Card className="flex flex-wrap max-w-[1296px] items-center gap-[32px_44px] px-6 py-8 w-full mb-[-8.00px] ml-[-8.00px] mr-[-8.00px] border-8 border-solid border-transparent backdrop-blur-[25.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25.7px)_brightness(100%)] [border-image:linear-gradient(270deg,rgba(188,64,6,1)_0%,rgba(117,5,53,1)_100%)_1] bg-transparent">
        <CardContent className="flex flex-wrap items-center gap-[32px_44px] p-0 w-full">
          <h3 className="relative flex-1 [font-family:'Circular_Std-Medium',Helvetica] font-medium text-[#5aa337] text-2xl tracking-[0.40px] leading-[29.8px]">
            In the meantime, you can check these:
          </h3>

          <div className="flex flex-col min-w-[282px] items-start gap-6 relative flex-1 grow">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-6 self-stretch w-full"
              >
                <div className="flex items-center gap-3 self-stretch w-full">
                  <img
                    className="w-10 h-10"
                    alt="Resource icon"
                    src={resource.icon}
                  />

                  <div className="relative flex-1 mt-[-1.00px] [font-family:'Hardpixel-Regular',Helvetica] font-normal text-base tracking-[0] leading-4">
                    {resource.prefix && (
                      <span className="text-white leading-5">
                        {resource.prefix}
                      </span>
                    )}
                    <span className="text-[#fe6808] leading-5">
                      {resource.title}
                    </span>
                    {resource.description ? (
                      <span className="text-[#fbfafb] leading-5">
                        {resource.description}
                      </span>
                    ) : (
                      <span className="text-white leading-5">
                        {resource.suffix}
                      </span>
                    )}
                  </div>

                  <img
                    className={
                      index === 0
                        ? "mr-[-6.94px] w-[24.94px] h-[24.94px]"
                        : "mr-[-2.94px] w-[24.94px] h-[24.94px]"
                    }
                    alt="Arrow"
                    src={resource.arrow}
                  />
                </div>

                {index < resources.length - 1 && (
                  <Separator className="self-stretch w-full h-px mb-[-0.50px]" />
                )}
                {index === resources.length - 1 && (
                  <img
                    className="self-stretch w-full h-px mb-[-0.50px] object-cover"
                    alt="Vector"
                    src="/figmaAssets/vector-2.svg"
                  />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
