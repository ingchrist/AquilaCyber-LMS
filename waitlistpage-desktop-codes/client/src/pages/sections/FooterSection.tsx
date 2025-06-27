import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center justify-center gap-8 p-16 relative self-stretch w-full flex-[0_0_auto] bg-[#0b1321]">
      <div className="flex flex-wrap items-center justify-center gap-[0px_24px] px-0 py-8 relative flex-[0_0_auto] w-full max-w-[1312px]">
        <div className="flex flex-col w-full md:w-[644px] items-start gap-3 px-3 py-4 relative">
          <h2 className="relative self-stretch mt-[-1.00px] font-display-h2v1 font-[number:var(--display-h2v1-font-weight)] text-[#e8e8e8] text-[length:var(--display-h2v1-font-size)] tracking-[var(--display-h2v1-letter-spacing)] leading-[var(--display-h2v1-line-height)] [font-style:var(--display-h2v1-font-style)]">
            Join the AquilaCyber Waitlist Now!
          </h2>

          <p className="relative self-stretch [font-family:'Circular_Std-Bold',Helvetica] font-bold text-slate-400 text-base tracking-[0] leading-6">
            Embark on your cybersecurity journey with AquilaCyberLMS and be
            among the first to gain access to: a vast library of interactive
            labs and challenges.
          </p>
        </div>

        <div className="flex flex-col items-start pt-8 pb-0 px-0 relative flex-1 grow">
          <div className="flex flex-col items-center pt-0 pb-2 px-3 relative w-full flex-[0_0_auto]">
            <Card className="w-full max-w-[636px] border-0 bg-transparent shadow-none">
              <CardContent className="flex items-center justify-center gap-2.5 p-0">
                <div className="flex w-full gap-2.5">
                  <Input
                    className="flex-1 rounded-md border-2 border-solid border-slate-700 bg-transparent text-slate-400 text-sm py-[18px]"
                    placeholder="name@email.com"
                  />
                  <Button className="bg-[#5aa337] text-[#0f1626] text-sm rounded-md px-[25px] py-4 h-auto">
                    Join for Free
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
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
          <img
            className="relative w-6 h-[23px]"
            alt="Social icons"
            src="/figmaAssets/social-icons.svg"
          />

          <img
            className="relative w-6 h-6"
            alt="Social icons"
            src="/figmaAssets/social-icons-1.svg"
          />

          <img
            className="relative w-6 h-6"
            alt="Social icons"
            src="/figmaAssets/social-icons-2.svg"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
        <Separator className="w-full h-px bg-transparent" />
        <img
          className="relative self-stretch w-full h-px mt-[-1.00px] object-cover"
          alt="Line"
          src="/figmaAssets/line-1.svg"
        />

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
