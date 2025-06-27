import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialCtaSection = (): JSX.Element => {
  // Pagination indicators data
  const paginationItems = [
    { active: true, width: "w-5" },
    { active: false, width: "w-1.5" },
    { active: false, width: "w-1.5" },
    { active: false, width: "w-1.5" },
    { active: false, width: "w-1.5" },
    { active: false, width: "w-1.5" },
  ];

  return (
    <section className="flex flex-col h-[648px] items-center justify-center gap-2.5 p-16 relative w-full bg-[#050c13]">
      <div className="gap-[72px] pl-[72px] pr-0 py-0 flex-1 grow bg-[#0b1321] rounded-lg border border-solid border-[#ffffff0d] flex items-center relative self-stretch w-full">
        {/* Left side - CTA content */}
        <div className="flex flex-col w-[400px] items-start gap-6 relative">
          <div className="inline-flex items-center justify-center gap-2 relative">
            <div className="relative w-5 h-[21px]">
              <img
                className="absolute w-5 h-5 top-0 left-0"
                alt="Clip path group"
                src="/figmaAssets/clip-path-group.png"
              />
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-[17.7px] tracking-[0] leading-[27px] whitespace-nowrap">
              For everyone
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-4 relative self-stretch w-full">
            <div className="flex flex-col max-w-[366px] items-start relative w-full">
              <h2 className="relative self-stretch mt-[-1.00px] font-display-h2v1 font-[number:var(--display-h2v1-font-weight)] text-white text-[length:var(--display-h2v1-font-size)] tracking-[var(--display-h2v1-letter-spacing)] leading-[var(--display-h2v1-line-height)] [font-style:var(--display-h2v1-font-style)]">
                Learn Cybersecurity Better.
              </h2>
            </div>

            <p className="relative font-body-lg font-[number:var(--body-lg-font-weight)] text-[#c1c1c1] text-[length:var(--body-lg-font-size)] tracking-[var(--body-lg-letter-spacing)] leading-[var(--body-lg-line-height)] [font-style:var(--body-lg-font-style)]">
              Whether you&#39;re new to cybersecurity or leveling up your
              career, AquilaCyber gives you the tools, the guidance, and the
              community to succeed.
            </p>
          </div>

          <Button className="px-8 py-4 bg-[#5aa337] rounded-lg text-[#0f1626] hover:bg-[#4d8a2e]">
            <span className="[font-family:'Circular_Std-Medium',Helvetica] font-medium text-lg tracking-[0.80px] leading-6">
              Join Now
            </span>
          </Button>
        </div>

        {/* Right side - Testimonial */}
        <div className="flex flex-col items-start gap-2.5 px-16 py-10 relative flex-1 self-stretch grow rounded-[0px_8px_8px_0px] overflow-hidden [background:url(..//figmaAssets/testimonialcontainer.png)_50%_50%_/_cover]">
          <Card className="flex flex-col items-center justify-center gap-9 p-12 relative flex-1 self-stretch w-full grow bg-[#0d1117] rounded-lg border border-solid border-[#202a3a]">
            <CardContent className="flex flex-col items-center justify-center gap-9 p-0 w-full">
              <div className="relative w-10 h-8 mt-[-3.00px]">
                <div className="absolute h-8 top-[23px] left-0 [font-family:'Circular_Std-Medium',Helvetica] font-medium text-[#200cd2] text-8xl leading-8 whitespace-nowrap text-center tracking-[0]">
                  &quot;
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-7 relative self-stretch w-full">
                <blockquote className="relative self-stretch mt-[-1.00px] [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#c1c1c1] text-lg text-center tracking-[0] leading-7">
                  Honestly, I never thought learning cybersecurity could be this
                  engaging. I&#39;ve tried so many platforms, but this one just
                  hits differently. The explanations are so clear, even the
                  complex stuff feels easy. The structured paths meant I
                  wasn&#39;t lost, and the best part? The buddy system, I never
                  feel like I&#39;m learning alone. It&apos;s competitive, but
                  in a good way.
                </blockquote>

                <div className="inline-flex items-start gap-[19px] relative">
                  <img
                    className="relative w-11 h-11 object-cover rounded-full"
                    alt="Testimonial author"
                    src="/figmaAssets/ellipse-1-1.png"
                  />

                  <div className="flex flex-col w-[154px] items-start relative">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#e8e8e8] text-lg tracking-[0] leading-7">
                      Oreoluwa Williams
                    </div>

                    <div className="relative self-stretch [font-family:'Nunito',Helvetica] font-medium italic text-[#e8e8e8] text-xs tracking-[0.05px] leading-[14px]">
                      Student at Howarzs
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination indicators */}
              <div className="inline-flex items-center gap-0.5 relative mb-[-3.00px]">
                {paginationItems.map((item, index) => (
                  <div
                    key={`pagination-${index}`}
                    className={`relative ${item.width} h-1.5 ${item.active ? "bg-[#d08f15]" : "bg-[#e8e8e8]"} ${item.active ? "rounded-[3px]" : "rounded-[100px]"}`}
                  />
                ))}
              </div>

              {/* Navigation buttons */}
              <Button
                size="icon"
                variant="outline"
                className="p-2.5 absolute top-[198px] left-[620px] bg-white rounded-[100px] hover:bg-white/90"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </Button>

              <Button
                size="icon"
                variant="outline"
                className="p-2.5 absolute top-[198px] -left-6 bg-[#ffffff3d] rounded-[100px] opacity-[0.68] hover:bg-[#ffffff4d]"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
