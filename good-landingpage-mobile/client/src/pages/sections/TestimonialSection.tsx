import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialSection = (): JSX.Element => {
  // Testimonial data for easier management
  const testimonials = [
    {
      id: 1,
      text: "Honestly, I never thought learning cybersecurity could be this engaging. I've tried so many platforms, but this one just hits differently. The explanations are so clear, even the complex stuff feels easy. The structured paths meant I wasn't lost, and the best part? The buddy system, I never feel like I'm learning alone. It's competitive, but in a good way.",
      author: "Oreoluwa Williams",
      position: "Oreoluwa Williams",
      avatar: "/figmaAssets/ellipse-1-1.png",
      active: true,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-2.5 px-8 py-12 relative self-stretch w-full flex-[0_0_auto] bg-[#050c13]">
      <Card className="flex-col items-start justify-center gap-12 p-6 bg-[#0b1321] rounded-lg border border-solid border-[#ffffff0d] flex relative self-stretch w-full flex-[0_0_auto]">
        <CardContent className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto] p-0">
          <Badge
            variant="outline"
            className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto] bg-transparent"
          >
            <div className="relative w-5 h-5">
              <img
                className="absolute w-5 h-[19px] top-0 left-0"
                alt="Clip path group"
                src="/figmaAssets/clip-path-group.png"
              />
            </div>
            <span className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[17.7px] tracking-[0] leading-[27px] whitespace-nowrap">
              For everyone
            </span>
          </Badge>

          <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col max-w-[366px] items-start relative w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Circular_Std-Medium',Helvetica] font-medium text-white text-[32px] tracking-[0.13px] leading-[39.7px]">
                Learn Cybersecurity Better.
              </h2>
            </div>

            <p className="relative [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#9ba1a5] text-base tracking-[0.03px] leading-6">
              Whether you&#39;re new to cybersecurity or leveling up your
              career, AquilaCyber gives you the tools, the guidance, and the
              community to succeed.
            </p>
          </div>

          <Button className="inline-flex flex-col px-8 py-3 flex-[0_0_auto] bg-[#5aa337] hover:bg-[#4d8c2e] overflow-hidden items-center justify-center relative rounded-lg shadow-[0px_1px_2px_#0000000d]">
            <span className="relative w-fit mt-[-1.00px] [font-family:'Circular_Std-Medium',Helvetica] font-medium text-[#0f1626] text-lg text-center tracking-[0.80px] leading-6 whitespace-nowrap">
              Join Now
            </span>
          </Button>
        </CardContent>

        <div className="flex flex-col items-start gap-2.5 pt-0 pb-6 px-0 relative self-stretch w-full flex-[0_0_auto] rounded-[8px_8px_8px_0px] [background:url(/figmaAssets/testimonialcontainer.png)_50%_50%_/_cover]">
          <Card className="flex flex-col items-center justify-center gap-6 p-6 relative self-stretch w-full flex-[0_0_auto] bg-[#0d1117] rounded-lg border border-solid border-[#202837]">
            <CardContent className="p-0 w-full flex flex-col items-center gap-6">
              <div className="relative w-10 h-8">
                <div className="absolute h-8 top-[23px] left-0 [font-family:'Circular_Std-Medium',Helvetica] font-medium text-[#200cd2] text-8xl leading-8 whitespace-nowrap text-center tracking-[0]">
                  &quot;
                </div>
              </div>

              <div className="inline-flex flex-col items-center justify-center gap-7 relative flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#c1c1c1] text-base text-center tracking-[0] leading-6">
                  {testimonials[0].text}
                </p>

                <div className="inline-flex items-start gap-[19px] relative flex-[0_0_auto]">
                  <img
                    className="relative w-8 h-8 object-cover rounded-full"
                    alt="User avatar"
                    src={testimonials[0].avatar}
                  />

                  <div className="flex flex-col w-[154px] items-start relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Circular_Std-Medium',Helvetica] font-medium text-[#f2ece8] text-base tracking-[0] leading-6">
                      {testimonials[0].author}
                    </div>

                    <div className="relative self-stretch [font-family:'Nunito',Helvetica] font-normal text-[#f2ece8] text-xs tracking-[0.24px] leading-[14px]">
                      {testimonials[0].position}
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                {[1, 2, 3, 4, 5, 6].map((dot, index) => (
                  <div
                    key={`dot-${index}`}
                    className={`relative ${index === 0 ? "w-5 bg-[#d08f15]" : "w-1.5 bg-[#d9d9d9]"} h-1.5 rounded-${index === 0 ? "[3px]" : "[100px]"}`}
                  />
                ))}
              </div>
            </CardContent>

            <Button
              variant="outline"
              size="icon"
              className="inline-flex items-center gap-2.5 p-1.5 absolute top-[250px] left-[266px] bg-white hover:bg-white/90 rounded-[100px]"
            >
              <ChevronRightIcon className="relative w-6 h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="inline-flex items-center gap-2.5 p-1.5 absolute top-[250px] -left-6 bg-[#ffffff3d] hover:bg-[#ffffff50] rounded-[100px] opacity-[0.68]"
            >
              <ChevronLeftIcon className="relative w-6 h-6" />
            </Button>
          </Card>
        </div>
      </Card>
    </section>
  );
};
