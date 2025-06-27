import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const CommunitySection = (): JSX.Element => {
  // Define the grid items data for the background effect
  const gridRows = [
    { top: "top-0", left: "left-[-173px]", count: 4 },
    { top: "top-[266px]", left: "left-0", count: 5 },
    { top: "top-[532px]", left: "left-[-372px]", count: 4 },
    { top: "top-[794px]", left: "left-[-56]", count: 4 },
  ];

  // Define the resource links data
  const resourceLinks = [
    {
      icon: "/figmaAssets/grommet-icons-resources.svg",
      title: "Our Learning Toolkit",
      description: ": Access Our Training Resources on Github",
      titleColor: "text-[#fe6808]",
      descriptionColor: "text-[#8bad85]",
      arrowSrc: "/figmaAssets/arrow.png",
    },
    {
      icon: "/figmaAssets/fluent-people-community-24-regular.svg",
      title: "most active",
      prefix: "Explore Africa's ",
      suffix: " cyber learning community.",
      titleColor: "text-[#fe6808]",
      prefixColor: "text-[#8bad85]",
      suffixColor: "text-[#8bad85]",
      arrowSrc: "/figmaAssets/arrow-1.png",
    },
  ];

  return (
    <section className="flex flex-col items-center w-full flex-[0_0_auto] bg-[#000d19] rounded-[4px_4px_0px_0px] relative self-stretch">
      <div className="items-center gap-24 px-0 py-24 self-stretch w-full flex-[0_0_auto] bg-[#000d19] overflow-hidden border-t-[24px] border-r-[24px] border-l-[24px] border-[#19223a] [border-top-style:solid] [border-right-style:solid] [border-left-style:solid] flex flex-col relative">
        <div className="flex flex-col items-center justify-center gap-8 px-24 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <img
            className="relative w-[269px] h-[269px]"
            alt="Pixel cybersecurity"
            src="/figmaAssets/pixel-cybersecurity.svg"
          />

          <h2 className="relative max-w-[902px] font-display-h2v1 font-[number:var(--display-h2v1-font-weight)] text-white text-[length:var(--display-h2v1-font-size)] text-center tracking-[var(--display-h2v1-letter-spacing)] leading-[var(--display-h2v1-line-height)] [font-style:var(--display-h2v1-font-style)]">
            Be among the first to join community-based learning platform, for
            anyone who invest in themselves and their future dream careers.
          </h2>
        </div>

        {/* Background grid pattern */}
        <div className="absolute w-[1858px] h-[782px] top-[-81px] left-[-209px]">
          {gridRows.map((row, rowIndex) => (
            <div
              key={`grid-row-${rowIndex}`}
              className={`inline-flex items-center gap-3 absolute ${row.top} ${row.left}`}
            >
              {Array.from({ length: row.count }).map((_, colIndex) => (
                <div
                  key={`grid-cell-${rowIndex}-${colIndex}`}
                  className="relative w-[444.72px] h-[250.41px] bg-[#ffffff01] rounded shadow-[0px_0px_0px_1px_#283f8066]"
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-[72px_44px] pt-[72px] pb-24 px-24 relative self-stretch w-full flex-[0_0_auto] bg-[#19223a] backdrop-blur-[25.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25.7px)_brightness(100%)]">
        <div className="flex min-w-[324px] items-start gap-6 relative flex-1 grow">
          {resourceLinks.map((resource, index) => (
            <Card
              key={`resource-${index}`}
              className="flex flex-col items-start gap-6 relative flex-1 grow border-none bg-transparent"
            >
              <CardContent className="flex flex-col items-start gap-6 p-0 w-full">
                <div className="flex items-center gap-[23px] relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative w-16 h-16"
                    alt={`Resource icon ${index + 1}`}
                    src={resource.icon}
                  />

                  {index === 0 ? (
                    <div className="relative w-[410px] mt-[-1.00px] [font-family:'Hardpixel-Regular',Helvetica] font-normal text-transparent text-2xl tracking-[0] leading-6">
                      <span className={resource.titleColor + " leading-8"}>
                        {resource.title}
                      </span>
                      <span
                        className={resource.descriptionColor + " leading-8"}
                      >
                        {resource.description}
                      </span>
                    </div>
                  ) : (
                    <div className="relative w-[405px] mt-[-1.00px] [font-family:'Hardpixel-Regular',Helvetica] font-normal text-transparent text-2xl tracking-[0] leading-8">
                      <span className={resource.prefixColor}>
                        {resource.prefix}
                      </span>
                      <span className={resource.titleColor}>
                        {resource.title}
                      </span>
                      <span className={resource.suffixColor}>
                        {resource.suffix}
                      </span>
                    </div>
                  )}

                  <img
                    className="relative w-[36.37px] h-[36.37px]"
                    alt="Arrow"
                    src={resource.arrowSrc}
                  />
                </div>

                <Separator className="w-[548px] h-px mb-[-0.50px]" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
