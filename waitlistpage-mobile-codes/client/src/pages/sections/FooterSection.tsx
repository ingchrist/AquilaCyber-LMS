import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex flex-col items-center justify-center gap-8 px-6 py-16 relative w-full bg-[#0b1321]">
      <div className="flex flex-col items-center justify-center gap-6 pb-6 w-full">
        <div className="flex flex-col items-start justify-center gap-2 w-full">
          <h2 className="w-full mt-[-1.00px] font-['Suisse_Intl-Bold',Helvetica] font-bold text-[#dce1e7] text-2xl tracking-[0.10px] leading-[31.7px]">
            Join the AquilaCyber Waitlist Now!
          </h2>

          <p className="w-full font-['Circular_Std-Medium',Helvetica] font-medium text-slate-400 text-base tracking-[0] leading-6">
            Embark on your cybersecurity journey with AquilaCyberLMS and be
            among the first to gain access to: a vast library of interactive
            labs and challenges.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <Input
            className="p-4 w-full rounded-md border-2 border-solid border-slate-700 bg-transparent font-['Inter',Helvetica] font-normal text-slate-500 text-sm"
            placeholder="name@company.com"
          />

          <Button className="flex items-center justify-center px-[25px] py-3 w-full bg-[#5aa337] rounded-md font-['Inter',Helvetica] font-normal text-[#0f1626] text-sm">
            Join for Free
          </Button>
        </div>
      </div>

      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col items-start gap-10 flex-1">
          <div className="relative w-[144.86px] h-8">
            <div className="flex w-36 items-center gap-2">
              <img
                className="w-[32.42px] h-8 ml-[-0.21px]"
                alt="Figma logo"
                src="/figmaAssets/figma-logo.svg"
              />

              <span className="w-fit mr-[-84.56px] font-['Hardpixel-Regular',Helvetica] font-normal text-[#f6f6f6] text-2xl tracking-[0] leading-7 whitespace-nowrap">
                AquilacyberLMS
              </span>
            </div>
          </div>

          <div className="flex items-center justify-end gap-5 px-2 w-full">
            <FacebookIcon className="w-6 h-[23px] text-white" />
            <TwitterIcon className="w-6 h-6 text-white" />
            <InstagramIcon className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 w-full">
        <Separator className="w-full h-px mt-[-1.00px]" />

        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <div className="inline-flex items-center gap-1">
            <img
              className="w-4 h-4"
              alt="Copyright icon"
              src="/figmaAssets/mynaui-copyright.png"
            />

            <span className="w-fit mt-[-1.00px] font-['Nunito',Helvetica] font-bold text-[#f0f0f0] text-sm tracking-[0] leading-4 whitespace-nowrap">
              2025 AquillaCyber All rights reserved.
            </span>
          </div>

          <div className="w-fit font-['Nunito',Helvetica] font-normal text-sm tracking-[0] leading-[14px] whitespace-nowrap">
            <a
              href="https://privacy-policy"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-[#8591a5] leading-4 underline"
            >
              Privacy Policy
            </a>

            <span className="font-medium text-white leading-4"> &amp; </span>

            <a
              href="https://app.buildclub.ai/terms"
              rel="noopener noreferrer"
              target="_blank"
              className="font-medium text-[#8591a5] leading-4 underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
