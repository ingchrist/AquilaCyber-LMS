import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const ResourcesSection = (): JSX.Element => {
  // Resource items data for mapping
  const resourceItems = [
    {
      icon: "/figmaAssets/grommet-icons-resources.svg",
      title: "Our Learning Toolkit",
      description: ": Access Our Training Resources on Github",
      arrow: "/figmaAssets/arrow.png",
    },
    {
      icon: "/figmaAssets/fluent-people-community-24-regular.svg",
      title: "most active",
      descriptionBefore: "Explore Africa's ",
      descriptionAfter: " cyber learning community.",
      arrow: "/figmaAssets/arrow-1.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-[72px] px-16 py-24 relative self-stretch w-full flex-[0_0_auto] bg-[#000d19]">
      <Card className="flex flex-wrap max-w-[1296px] items-center gap-[72px_44px] pt-12 pb-[52px] px-[60px] relative w-full flex-[0_0_auto] mt-[-8px] mb-[-8px] border-8 border-solid border-transparent backdrop-blur-[25.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25.7px)_brightness(100%)] [border-image:linear-gradient(270deg,rgba(188,64,6,1)_0%,rgba(117,5,53,1)_100%)_1]">
        <CardContent className="p-0 flex flex-wrap gap-[72px_44px] w-full">
          <h2 className="relative flex-1 font-['Circular_Std-Medium',Helvetica] font-medium text-[#5aa337] text-[40px] tracking-[0.40px] leading-[49.6px]">
            In the meantime, you can check these:
          </h2>

          <div className="flex flex-col min-w-[324px] items-start gap-6 relative flex-1 grow">
            {resourceItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="flex items-center gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative w-16 h-16"
                    alt={`Resource icon ${index + 1}`}
                    src={item.icon}
                  />

                  {index === 0 ? (
                    <div className="relative w-[410px] mt-[-1px] font-['Hardpixel-Regular',Helvetica] font-normal text-transparent text-2xl tracking-[0] leading-6">
                      <span className="text-[#fe6808] leading-8">
                        {item.title}
                      </span>
                      <span className="text-[#fbfafb] leading-8">
                        {item.description}
                      </span>
                    </div>
                  ) : (
                    <div className="relative w-[405px] mt-[-1px] font-['Hardpixel-Regular',Helvetica] font-normal text-transparent text-2xl tracking-[0] leading-8">
                      <span className="text-white">
                        {item.descriptionBefore}
                      </span>
                      <span className="text-[#fe6808]">{item.title}</span>
                      <span className="text-white">
                        {item.descriptionAfter}
                      </span>
                    </div>
                  )}

                  <img
                    className="relative w-[36.37px] h-[36.37px]"
                    alt="Arrow"
                    src={item.arrow}
                  />
                </div>

                <Separator className="relative w-[548px] h-px mb-[-0.50px]" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
