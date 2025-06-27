import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const Footer = (): JSX.Element => {
  // Social media icons data
  const socialIcons = [
    {
      src: "/figmaAssets/social-icons-2.svg",
      alt: "Social icons",
      width: "w-6",
      height: "h-[23px]",
    },
    {
      src: "/figmaAssets/social-icons-1.svg",
      alt: "Social icons",
      width: "w-6",
      height: "h-6",
    },
    {
      src: "/figmaAssets/social-icons.svg",
      alt: "Social icons",
      width: "w-6",
      height: "h-6",
    },
  ];

  return (
    <footer className="flex flex-col items-center justify-center gap-8 p-16 relative bg-[#0b1321]">
      <div className="flex flex-wrap w-[1312px] items-center justify-center gap-[0px_24px] px-0 py-8 relative flex-[0_0_auto]">
        <div className="max-w-[1320px] w-[644px] items-start gap-3 px-3 py-4 flex flex-col relative">
          <h2 className="relative self-stretch mt-[-1.00px] font-display-h2v1 font-[number:var(--display-h2v1-font-weight)] text-[#e8e8e8] text-[length:var(--display-h2v1-font-size)] tracking-[var(--display-h2v1-letter-spacing)] leading-[var(--display-h2v1-line-height)] [font-style:var(--display-h2v1-font-style)]">
            Join the AquilaCyber Waitlist Now!
          </h2>

          <p className="relative self-stretch [font-family:'Circular_Std-Bold',Helvetica] font-bold text-slate-400 text-base tracking-[0] leading-6">
            Embark on your cybersecurity journey with AquilaCyberLMS and be
            among the first to gain access to: a vast library of interactive
            labs and challenges.
          </p>
        </div>

        <div className="flex flex-col max-w-[1320px] items-start pt-8 pb-0 px-0 relative flex-1 grow">
          <Card className="max-w-[1320px] items-center pt-0 pb-2 px-3 w-full flex-[0_0_auto] flex flex-col relative border-none bg-transparent">
            <CardContent className="flex w-[636px] items-center justify-center gap-2.5 pl-0.5 pr-0 py-px relative flex-[0_0_auto] ml-[-8.00px] mr-[-8.00px] p-0">
              <div className="flex flex-col items-start pt-[18px] pb-[19.39px] px-4 relative flex-1 grow mt-[-1.00px] mb-[-1.00px] ml-[-2.00px] rounded-md overflow-hidden border-2 border-solid border-slate-700">
                <Input
                  className="border-none p-0 h-auto bg-transparent"
                  placeholder="name@email.com"
                />
              </div>

              <Button className="inline-flex flex-col items-center justify-center pt-4 pb-[17.39px] px-[25px] relative flex-[0_0_auto] bg-[#5aa337] rounded-md h-auto">
                <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#0f1626] text-sm text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
                  Join for Free
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-[144.86px] h-8">
          <div className="flex w-36 items-center gap-2 relative">
            <img
              className="relative w-[32.42px] h-8 ml-[-0.21px]"
              alt="Figma logo"
              src="/figmaAssets/figma-logo.svg"
            />

            <div className="relative w-fit mr-[-84.56px] [font-family:'Hardpixel-Regular',Helvetica] font-normal text-[#f6f6f6] text-2xl tracking-[0] leading-7 whitespace-nowrap">
              AquilacyberLMS
            </div>
          </div>
        </div>

        <div className="relative w-[125.46px] h-[105px]">
          <img
            className="absolute w-[302px] h-[125px] top-[15px] left-[-88px]"
            alt="Image fx removebg"
            src="/figmaAssets/image-fx--44--removebg-preview-1.png"
          />
        </div>

        <div className="inline-flex items-center gap-5 px-2 py-0 relative flex-[0_0_auto]">
          {socialIcons.map((icon, index) => (
            <img
              key={`social-icon-${index}`}
              className={`relative ${icon.width} ${icon.height}`}
              alt={icon.alt}
              src={icon.src}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
        <Separator className="relative self-stretch w-full h-px mt-[-1.00px]" />

        <div className="inline-flex items-end gap-1.5 relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            <img
              className="relative w-4 h-4"
              alt="Mynaui copyright"
              src="/figmaAssets/mynaui-copyright.png"
            />

            <div className="relative w-fit [font-family:'Nunito',Helvetica] font-medium text-[#f0f0f0] text-xs tracking-[0] leading-[14.4px] whitespace-nowrap">
              2025 AquillaCyber All rights reserved.
            </div>
          </div>

          <div className="relative w-fit mt-[-1.00px] [font-family:'Nunito',Helvetica] font-normal text-transparent text-xs tracking-[0] leading-3">
            <a
              href="https://privacy-policy"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="font-medium text-[#8591a5] leading-4 underline">
                Privacy Policy
              </span>
            </a>

            <span className="font-medium text-white leading-4"> &amp; </span>

            <a
              href="https://app.buildclub.ai/terms"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="font-medium text-[#8591a5] leading-4 underline">
                Terms of Service
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
