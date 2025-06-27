import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Whatyoullaccess = (): JSX.Element => {
  const resources = [
    {
      icon: "/figmaAssets/grommet-icons-resources.svg",
      title: "Our Learning Toolkit",
      description: ": Access Our Training Resources on Github",
      arrow: "/figmaAssets/arrow.png",
    },
    {
      icon: "/figmaAssets/fluent-people-community-24-regular.svg",
      title: "most active",
      description: "Explore Africa's  cyber learning community.",
      arrow: "/figmaAssets/arrow-1.png",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-[72px] px-16 py-24 relative bg-[#000d19]">
      <Card className="flex-wrap max-w-[1296px] items-center gap-[72px_44px] pt-12 pb-[52px] px-[60px] w-full flex-[0_0_auto] mt-[-8.00px] mb-[-8.00px] border-8 border-solid border-transparent backdrop-blur-[25.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25.7px)_brightness(100%)] [border-image:linear-gradient(270deg,rgba(188,64,6,1)_0%,rgba(117,5,53,1)_100%)_1] flex relative">
        <CardContent className="flex flex-wrap gap-[72px_44px] p-0">
          <div className="relative flex-1 [font-family:'Circular_Std-Medium',Helvetica] font-medium text-[#5aa337] text-[40px] tracking-[0.40px] leading-[49.6px]">
            In the meantime, you can check these:
          </div>

          <div className="flex-col min-w-[324px] items-start gap-6 flex-1 grow flex relative">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="items-center gap-[23px] self-stretch w-full flex-[0_0_auto] flex relative cursor-pointer">
                  <img
                    className="relative w-16 h-16"
                    alt={`Resource icon ${index + 1}`}
                    src={resource.icon}
                  />

                  {index === 0 ? (
                    <div className="relative w-[410px] mt-[-1.00px] [font-family:'Hardpixel-Regular',Helvetica] font-normal text-transparent text-2xl tracking-[0] leading-6">
                      <span className="text-[#fe6808] leading-8">
                        {resource.title}
                      </span>
                      <span className="text-[#fbfafb] leading-8">
                        {resource.description}
                      </span>
                    </div>
                  ) : (
                    <div className="relative w-[405px] mt-[-1.00px] [font-family:'Hardpixel-Regular',Helvetica] font-normal text-transparent text-2xl tracking-[0] leading-8">
                      <span className="text-white">Explore Africa's </span>
                      <span className="text-[#fe6808]">{resource.title}</span>
                      <span className="text-white">
                        {" "}
                        cyber learning community.
                      </span>
                    </div>
                  )}

                  <img
                    className="relative w-[36.37px] h-[36.37px]"
                    alt="Arrow"
                    src={resource.arrow}
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
