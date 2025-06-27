import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const HeroSection = (): JSX.Element => {
  // Define grid cell types for reusability
  const gridCellTypes = {
    green1:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.06)_0%,rgba(90,164,56,0.09)_100%)_1]",
    green2:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]",
    green3:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1]",
    blue: "[border-image:linear-gradient(137deg,rgba(20,18,136,0.04)_0%,rgba(65,56,164,0.06)_100%)_1]",
    transparent:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0)_0%,rgba(90,164,56,0)_100%)_1]",
    orange:
      "[border-image:linear-gradient(137deg,rgba(136,83,18,0.05)_0%,rgba(164,88,56,0.08)_100%)_1]",
    red: "[border-image:linear-gradient(137deg,rgba(136,18,18,0.03)_0%,rgba(164,69,56,0.05)_100%)_1]",
    purple:
      "[border-image:linear-gradient(137deg,rgba(45,18,136,0.01)_0%,rgba(65,56,164,0.02)_100%)_1]",
  };

  // Define dot types for reusability
  const dotTypes = {
    orange: "border-[#5724000f]",
    blue: "border-[#052a4c14]",
    blueAccent: "border-[#278be80a]",
    green: "border-[#2137010f]",
  };

  // Features data for the bottom section
  const features = [
    {
      icon: "/figmaAssets/svg.svg",
      title: "Interactive Labs & Tracks",
      description:
        "Learn by practicing with labs designed by real security professionals.",
    },
    {
      icon: "/figmaAssets/svg-3.svg",
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

  // Partner logos data
  const partners = [
    {
      logo: "/figmaAssets/group-45.png",
      name: "SmartFinder",
      className: "w-[33.16px] h-8",
    },
    {
      logo: "/figmaAssets/vector-6.svg",
      name: "SHELLS",
      className: "w-[30.4px] h-8",
      gradient: true,
    },
    {
      logo: "/figmaAssets/vector.svg",
      name: "SHELLS",
      className: "w-[30.4px] h-8",
    },
    {
      logo: "/figmaAssets/vector-4.svg",
      name: "Zoomerr",
      className: "w-8 h-8",
    },
    {
      logo: "/figmaAssets/vector.svg",
      name: "SHELLS",
      className: "w-[30.4px] h-8",
    },
    {
      logo: "/figmaAssets/vector.svg",
      name: "SHELLS",
      className: "w-[30.4px] h-8",
    },
    {
      logo: "/figmaAssets/vector.svg",
      name: "SHELLS",
      className: "w-[30.4px] h-8",
    },
    {
      logo: "/figmaAssets/vector-5.svg",
      name: "WAVES",
      className: "w-[21.03px] h-8",
      gradient: true,
      reverseGradient: true,
    },
    {
      logo: "/figmaAssets/group-46.png",
      name: "ArtVenue",
      className: "w-[55.81px] h-8",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-24 pt-[124px] pb-12 px-16 relative self-stretch w-full flex-[0_0_auto] bg-[#000d19]">
      {/* Background Grid Pattern */}
      <div className="absolute w-full h-[1178px] -top-4 left-0 overflow-hidden">
        <div className="relative w-full h-full">
          <div className="absolute w-full h-full top-0 left-0">
            <div className="relative w-full h-full">
              {/* Grid pattern - simplified with loops */}
              <div className="grid grid-cols-23 w-full">
                {Array(13)
                  .fill(0)
                  .map((_, rowIndex) => (
                    <div
                      key={`row-${rowIndex}`}
                      className="flex items-center relative self-stretch w-full flex-[0_0_auto]"
                    >
                      {Array(23)
                        .fill(0)
                        .map((_, colIndex) => {
                          // Determine cell type based on position
                          let cellType = gridCellTypes.green1;
                          if (rowIndex > 0 && rowIndex < 3)
                            cellType = gridCellTypes.green2;
                          else if (rowIndex === 3)
                            cellType = gridCellTypes.green3;
                          else if (rowIndex === 4)
                            cellType = gridCellTypes.blue;
                          else if (rowIndex === 5)
                            cellType = gridCellTypes.transparent;
                          else if (rowIndex === 6)
                            cellType = gridCellTypes.orange;
                          else if (rowIndex === 7)
                            cellType = gridCellTypes.green2;
                          else if (rowIndex === 8)
                            cellType = gridCellTypes.green3;
                          else if (rowIndex === 9)
                            cellType = gridCellTypes.green2;
                          else if (rowIndex > 9)
                            cellType = gridCellTypes.purple;

                          // Special cases
                          if (rowIndex === 3 && colIndex === 6)
                            cellType = gridCellTypes.transparent;
                          if (rowIndex === 4 && colIndex === 7)
                            cellType = gridCellTypes.transparent;
                          if (
                            rowIndex === 7 &&
                            (colIndex === 3 ||
                              colIndex === 5 ||
                              colIndex === 10 ||
                              colIndex === 16 ||
                              colIndex === 17 ||
                              colIndex === 18 ||
                              colIndex === 19)
                          )
                            cellType = gridCellTypes.transparent;

                          return (
                            <div
                              key={`cell-${rowIndex}-${colIndex}`}
                              className={`${cellType} relative w-[72px] h-[72px] border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#a3b8cc0d]`}
                            />
                          );
                        })}
                    </div>
                  ))}
              </div>

              {/* Dots overlay */}
              <div className="inline-flex items-center gap-[68px] absolute top-[171px] left-[359px]">
                {Array(14)
                  .fill(0)
                  .map((_, colIndex) => (
                    <div
                      key={`dot-col-${colIndex}`}
                      className="inline-flex flex-col items-start gap-[72px] relative flex-[0_0_auto]"
                    >
                      {Array(14)
                        .fill(0)
                        .map((_, rowIndex) => {
                          // Determine dot type based on position
                          let dotType = dotTypes.orange;
                          if (colIndex > 0 && colIndex < 5)
                            dotType = dotTypes.blue;
                          else if (colIndex >= 5 && colIndex < 8)
                            dotType = dotTypes.green;

                          // Special accent dots
                          if (
                            (colIndex === 1 && rowIndex === 2) ||
                            (colIndex === 1 && rowIndex === 5) ||
                            (colIndex === 1 && rowIndex === 6) ||
                            (colIndex === 2 && rowIndex === 4) ||
                            (colIndex === 2 && rowIndex === 7) ||
                            (colIndex === 3 && rowIndex === 5)
                          ) {
                            dotType = dotTypes.blueAccent;
                          }

                          const isFirst = rowIndex === 0;
                          const isLast = rowIndex === 13;

                          return (
                            <div
                              key={`dot-${colIndex}-${rowIndex}`}
                              className={`relative w-3 h-3 ${isFirst ? "mt-[-4.00px]" : ""} ${isLast ? "mb-[-4.00px]" : ""} ml-[-4.00px] mr-[-4.00px] rounded-md border-8 border-solid ${dotType} [background:conic-gradient(from_180deg_at_50%_50%,rgba(20,20,20,0.06)_0%,rgba(51,23,5,0.02)_100%)]`}
                            />
                          );
                        })}
                    </div>
                  ))}
              </div>

              {/* Radial gradient overlay */}
              <div className="absolute w-[1605px] h-[719px] top-[504px] left-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(162,235,42,1)_0%,rgba(0,54,31,0)_100%)] opacity-[0.23]" />
            </div>
          </div>

          {/* Background images */}
          <div className="absolute w-[1964px] h-[1043px] top-[135px] left-0">
            <img
              className="w-[276px] top-0 left-[1164px] absolute h-[800px]"
              alt="Pixel cybersecurity pattern"
              src="/figmaAssets/pixel-cybersecurity.svg"
            />
            <img
              className="w-[800px] top-[243px] left-0 absolute h-[800px]"
              alt="Pixel cybersecurity pattern"
              src="/figmaAssets/pixel-cybersecurity.svg"
            />
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-start justify-center gap-2.5 px-24 py-0 relative self-stretch w-full flex-[0_0_auto] z-10">
        <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
          {/* Left Column - Heading */}
          <div className="flex flex-col min-w-[244px] max-w-[588px] items-start gap-4 relative flex-1 grow">
            <div className="flex flex-col min-w-[344px] max-w-[978px] items-start gap-6 relative w-full flex-[0_0_auto]">
              <h1 className="relative mt-[-1.00px] font-['Suisse_Intl-Bold',Helvetica] font-normal text-[40px] tracking-[0] leading-10">
                <span className="font-bold text-[#8c8c8c] leading-[0.1px]">
                  Ready to{" "}
                </span>
                <span className="font-bold text-white leading-[48.0px]">
                  learn Cybersecurity
                </span>
                <span className="font-bold text-[#8c8c8c] leading-[0.1px]">
                  {" "}
                </span>
                <span className="font-bold text-white leading-[0.1px]">
                  ethically{" "}
                </span>
                <span className="font-bold text-[#8c8c8c] leading-[0.1px]">
                  in the{" "}
                </span>
                <span className="font-bold text-white leading-[48.0px]">
                  most practical
                </span>
                <span className="font-bold text-[#8c8c8c] leading-[0.1px]">
                  {" "}
                  and{" "}
                </span>
                <span className="font-bold text-white leading-[48.0px]">
                  most efficient
                </span>
                <span className="font-bold text-[#8c8c8c] leading-[0.1px]">
                  {" "}
                  way possible?
                </span>
              </h1>
            </div>
            <p className="relative font-['Circular_Std-Book',Helvetica] font-normal text-[#c1c1c1] text-lg tracking-[0] leading-7">
              Join the waitlist to be among the first to gain access to
              AquillaCyber learning platform!
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="flex-col max-w-[600px] items-start gap-6 flex-1 grow flex relative">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <Input
                className="min-w-[324px] max-w-screen-sm p-4 bg-[#202a3a] rounded text-[#8591a5]"
                placeholder="Name"
              />

              <Input
                className="min-w-[324px] max-w-screen-sm p-4 bg-[#202a3a] rounded text-[#8591a5]"
                placeholder="Enter your email address"
                type="email"
              />

              <Select>
                <SelectTrigger className="min-w-[324px] max-w-screen-sm p-4 bg-[#202a3a] rounded text-[#8591a5]">
                  <SelectValue placeholder="Level of cybersecurity knowledge" />
                  <ChevronDownIcon className="w-6 h-6" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="expert">Expert</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                className="min-w-[324px] max-w-screen-sm p-4 pt-4 pb-16 bg-[#202a3a] rounded text-[#8591a5]"
                placeholder="What are your expectations?"
              />
            </div>

            <Button className="flex items-center justify-center gap-2.5 px-6 py-4 relative self-stretch w-full flex-[0_0_auto] bg-[#d08f15] rounded-lg overflow-hidden border border-solid border-[#e79715] text-[#000d19] font-medium text-base">
              Join the waitlist
            </Button>

            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <img
                  className="relative w-11 h-11 object-cover"
                  alt="User avatar"
                  src="/figmaAssets/ellipse-1.png"
                />
                <img
                  className="relative w-11 h-11 -ml-3 object-cover"
                  alt="User avatar"
                  src="/figmaAssets/ellipse-5.png"
                />
                <img
                  className="relative w-11 h-11 -ml-3 object-cover"
                  alt="User avatar"
                  src="/figmaAssets/ellipse-3.png"
                />
                <img
                  className="relative w-11 h-11 -ml-3 object-cover"
                  alt="User avatar"
                  src="/figmaAssets/ellipse-4.png"
                />
                <img
                  className="relative w-11 h-11 -ml-3 object-cover"
                  alt="User avatar"
                  src="/figmaAssets/ellipse-5.png"
                />
                <div className="flex w-11 h-11 items-center justify-center relative -ml-3 bg-[#272b2d] rounded-[100px] border-4 border-solid border-[#121212]">
                  <div className="relative w-fit font-['Circular_Std-Medium',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-4 whitespace-nowrap">
                    +200
                  </div>
                </div>
              </div>
              <div className="relative w-fit font-['Circular_Std-BookItalic',Helvetica] font-normal italic text-[#e8e8e8] text-base tracking-[0.32px] leading-[19.8px] whitespace-nowrap">
                Over 200+ learners are on the waitlist
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="flex flex-col items-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto] w-full">
          <div className="inline-flex items-center justify-center gap-2.5 pl-16 pr-0 py-0 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-['Circular_Std-Book',Helvetica] font-normal text-gray-200 text-xl text-center tracking-[0] leading-8 whitespace-nowrap">
              Trusted by 100+ partners and organizations
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-8 px-20 py-6 relative flex-[0_0_auto]">
            {partners.map((partner, index) => (
              <div
                key={`partner-${index}`}
                className="flex items-center justify-center gap-2 relative h-[50px] w-48"
              >
                <img
                  className={partner.className}
                  alt={partner.name}
                  src={partner.logo}
                />
                <div
                  className={`relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)] ${
                    partner.gradient
                      ? partner.reverseGradient
                        ? "bg-[linear-gradient(90deg,rgba(148,163,184,1)_0%,rgba(117,129,146,0.63)_38%,rgba(66,73,82,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
                        : "bg-[linear-gradient(90deg,rgba(148,163,184,0.06)_0%,rgba(148,163,184,0.5)_47%,rgba(148,163,184,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
                      : "text-slate-400"
                  }`}
                >
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <Card className="flex flex-col items-start gap-2.5 px-10 py-12 relative self-stretch w-full flex-[0_0_auto] bg-[#0b1321] rounded-lg border-none">
          <CardContent className="flex flex-col max-w-[1188px] items-start gap-11 relative w-full flex-[0_0_auto] p-0">
            <h2 className="relative self-stretch mt-[-1.00px] [text-shadow:0px_0px_4px_#00000040] font-['Hardpixel-Regular',Helvetica] font-normal text-[#6fcf46] text-[32px] text-center tracking-[0] leading-10 w-full">
              What You'll Get Early Access to
            </h2>

            <div className="flex flex-wrap items-start gap-[24px_44px] relative self-stretch w-full flex-[0_0_auto]">
              {features.map((feature, index) => (
                <div
                  key={`feature-${index}`}
                  className="flex flex-col w-[264px] items-start gap-2 px-3 py-1 relative"
                >
                  <img
                    className="relative w-6 h-6"
                    alt="Feature icon"
                    src={feature.icon}
                  />
                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <h3 className="relative self-stretch mt-[-1.00px] [text-shadow:0px_0px_4px_#00000040] font-['Circular_Std-Book',Helvetica] font-normal text-[#d9d9d9] text-xl tracking-[0] leading-7">
                      {feature.title}
                    </h3>
                    <p className="relative self-stretch [text-shadow:0px_0px_4px_#00000040] font-['Circular_Std-Book',Helvetica] font-normal text-[#9da7b9] text-lg tracking-[0] leading-7">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
