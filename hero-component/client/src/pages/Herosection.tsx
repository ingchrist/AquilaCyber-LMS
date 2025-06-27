import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

export const Herosection = (): JSX.Element => {
  // Grid cell data for different gradient styles
  const gridCellTypes = {
    green1:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.06)_0%,rgba(90,164,56,0.09)_100%)_1]",
    green2:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]",
    green3:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1]",
    purple:
      "[border-image:linear-gradient(137deg,rgba(20,18,136,0.04)_0%,rgba(65,56,164,0.06)_100%)_1]",
    transparent:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0)_0%,rgba(90,164,56,0)_100%)_1]",
    orange:
      "[border-image:linear-gradient(137deg,rgba(136,83,18,0.05)_0%,rgba(164,88,56,0.08)_100%)_1]",
    red: "[border-image:linear-gradient(137deg,rgba(136,18,18,0.03)_0%,rgba(164,69,56,0.05)_100%)_1]",
    purple2:
      "[border-image:linear-gradient(137deg,rgba(45,18,136,0.01)_0%,rgba(65,56,164,0.02)_100%)_1]",
  };

  // Dot types for the grid overlay
  const dotTypes = {
    brown: "border-[#5724000f]",
    blue: "border-[#052a4c14]",
    blue2: "border-[#278be80a]",
    green: "border-[#2137010f]",
  };

  // Partners data
  const partners = [
    {
      name: "SmartFinder",
      logo: "/figmaAssets/group-45.png",
      logoWidth: "w-[33.16px]",
      logoHeight: "h-8",
    },
    {
      name: "SHELLS",
      logo: "/figmaAssets/vector-4.svg",
      logoWidth: "w-[30.4px]",
      logoHeight: "h-8",
      gradient: true,
    },
    {
      name: "SHELLS",
      logo: "/figmaAssets/vector-1.svg",
      logoWidth: "w-[30.4px]",
      logoHeight: "h-8",
    },
    {
      name: "Zoomerr",
      logo: "/figmaAssets/vector-2.svg",
      logoWidth: "w-8",
      logoHeight: "h-8",
    },
    {
      name: "SHELLS",
      logo: "/figmaAssets/vector-1.svg",
      logoWidth: "w-[30.4px]",
      logoHeight: "h-8",
    },
    {
      name: "SHELLS",
      logo: "/figmaAssets/vector-1.svg",
      logoWidth: "w-[30.4px]",
      logoHeight: "h-8",
    },
    {
      name: "SHELLS",
      logo: "/figmaAssets/vector-1.svg",
      logoWidth: "w-[30.4px]",
      logoHeight: "h-8",
    },
    {
      name: "WAVES",
      logo: "/figmaAssets/vector.svg",
      logoWidth: "w-[21.03px]",
      logoHeight: "h-8",
      gradient: true,
      reverse: true,
    },
    {
      name: "ArtVenue",
      logo: "/figmaAssets/group-46.png",
      logoWidth: "w-[55.81px]",
      logoHeight: "h-8",
    },
  ];

  // Features data
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

  // Waitlist avatars
  const avatars = [
    { src: "/figmaAssets/ellipse-1.png", alt: "User 1" },
    { src: "/figmaAssets/ellipse-5.png", alt: "User 2" },
    { src: "/figmaAssets/ellipse-3.png", alt: "User 3" },
    { src: "/figmaAssets/ellipse-4.png", alt: "User 4" },
    { src: "/figmaAssets/ellipse-5.png", alt: "User 5" },
  ];

  return (
    <section className="flex flex-col items-center gap-24 pt-[124px] pb-12 px-16 relative bg-[#000d19]">
      {/* Background grid pattern */}
      <div className="absolute w-[1440px] h-[1178px] -top-4 left-0">
        <div className="relative w-[1964px] h-[1178px]">
          <div className="absolute w-[1656px] h-[1163px] top-0 left-[156px]">
            <div className="relative w-[1693px] h-[1223px] left-[-37px]">
              <div className="flex flex-col w-[1656px] items-start absolute top-0 left-[37px]">
                {/* Grid rows - using a more efficient approach with loops */}
                {[
                  Array(23).fill(gridCellTypes.green1),
                  Array(23).fill(gridCellTypes.green2),
                  Array(23).fill(gridCellTypes.green3),
                  Array(23).fill(gridCellTypes.purple),
                  Array(23).fill(gridCellTypes.transparent),
                  Array(23).fill(gridCellTypes.orange),
                  Array(23).fill(gridCellTypes.green2),
                  Array(23).fill(gridCellTypes.green3),
                  Array(23).fill(gridCellTypes.green2),
                  Array(23).fill(gridCellTypes.green2),
                  Array(23).fill(gridCellTypes.purple2),
                  Array(23).fill(gridCellTypes.purple2),
                  Array(23).fill(gridCellTypes.purple2),
                  Array(23).fill(gridCellTypes.green2),
                  Array(23).fill(gridCellTypes.green3),
                ].map((row, rowIndex) => (
                  <div
                    key={`row-${rowIndex}`}
                    className="flex items-center relative self-stretch w-full flex-[0_0_auto]"
                  >
                    {row.map((cellType, cellIndex) => (
                      <div
                        key={`cell-${rowIndex}-${cellIndex}`}
                        className={`${cellType} relative w-[72px] h-[72px] border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#a3b8cc0d]`}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Dot grid overlay */}
              <div className="inline-flex items-center gap-[68px] absolute top-[171px] left-[359px]">
                {[...Array(14)].map((_, colIndex) => {
                  // Determine dot type based on column position
                  let dotType = dotTypes.brown;
                  if (colIndex >= 1 && colIndex <= 4) dotType = dotTypes.blue;
                  else if (colIndex >= 5 && colIndex <= 7)
                    dotType = dotTypes.brown;
                  else if (colIndex >= 8 && colIndex <= 13)
                    dotType = dotTypes.green;

                  return (
                    <div
                      key={`col-${colIndex}`}
                      className="inline-flex flex-col items-start gap-[72px] relative flex-[0_0_auto]"
                    >
                      {[...Array(14)].map((_, rowIndex) => (
                        <div
                          key={`dot-${colIndex}-${rowIndex}`}
                          className={`relative w-3 h-3 ${rowIndex === 0 ? "mt-[-4.00px]" : ""} ${rowIndex === 13 ? "mb-[-4.00px]" : ""} ml-[-4.00px] mr-[-4.00px] rounded-md border-8 border-solid ${dotType} [background:conic-gradient(from_180deg_at_50%_50%,rgba(20,20,20,0.06)_0%,rgba(51,23,5,0.02)_100%)]`}
                        />
                      ))}
                    </div>
                  );
                })}
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

      {/* Main content section */}
      <div className="flex flex-col items-start justify-center gap-2.5 px-24 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
          {/* Left column - Headline */}
          <div className="flex flex-col min-w-[244px] max-w-[588px] items-start gap-4 relative flex-1 grow">
            <div className="flex flex-col min-w-[344px] max-w-[978px] items-start gap-6 relative w-full flex-[0_0_auto]">
              <h1 className="relative mt-[-1.00px] [font-family:'Suisse_Intl-Bold',Helvetica] font-normal text-transparent text-[40px] tracking-[0] leading-10">
                <span className="font-bold text-[#8c8c8c] leading-[0.1px]">
                  Ready to{" "}
                </span>
                <span className="font-bold text-white leading-[48.0px]">
                  learn Cybersecurity
                </span>
                <span className="font-bold text-[#8c8c8c] leading-[0.1px]">
                  &nbsp;
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
            <p className="relative [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#c1c1c1] text-lg tracking-[0] leading-7">
              Join the waitlist to be among the first to gain access to
              AquillaCyber learning platform!
            </p>
          </div>

          {/* Right column - Form */}
          <div className="flex flex-col max-w-[600px] items-start gap-6 relative flex-1 grow">
            <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <Input
                className="min-w-[324px] max-w-screen-sm p-4 bg-[#202a3a] text-[#8591a5]"
                placeholder="Name"
              />

              <Input
                className="min-w-[324px] max-w-screen-sm p-4 bg-[#202a3a] text-[#8591a5]"
                placeholder="Enter your email address"
                type="email"
              />

              <Select>
                <SelectTrigger className="min-w-[324px] max-w-screen-sm p-4 bg-[#202a3a] text-[#8591a5]">
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
                className="min-w-[324px] max-w-screen-sm p-4 pt-4 pb-16 bg-[#202a3a] text-[#8591a5]"
                placeholder="What are your expectations?"
              />
            </div>

            <Button className="flex items-center justify-center gap-2.5 px-6 py-4 relative self-stretch w-full flex-[0_0_auto] bg-[#d08f15] hover:bg-[#e79715] text-[#000d19] rounded-lg border border-solid border-[#e79715]">
              Join the waitlist
            </Button>

            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                {avatars.map((avatar, index) => (
                  <Avatar
                    key={`avatar-${index}`}
                    className={`relative w-11 h-11 ${index > 0 ? "-ml-3" : ""}`}
                  >
                    <AvatarImage
                      src={avatar.src}
                      alt={avatar.alt}
                      className="object-cover"
                    />
                    <AvatarFallback>U{index + 1}</AvatarFallback>
                  </Avatar>
                ))}
                <div className="flex w-11 h-11 items-center justify-center relative -ml-3 bg-[#272b2d] rounded-[100px] border-4 border-solid border-[#121212]">
                  <div className="relative w-fit [font-family:'Circular_Std-Medium',Helvetica] font-medium text-white text-xs text-center tracking-[0] leading-4 whitespace-nowrap">
                    +200
                  </div>
                </div>
              </div>
              <p className="relative w-fit [font-family:'Circular_Std-BookItalic',Helvetica] font-normal italic text-[#e8e8e8] text-base tracking-[0.32px] leading-[19.8px] whitespace-nowrap">
                Over 200+ learners are on the waitlist
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partners and features section */}
      <div className="flex flex-col items-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
        {/* Partners section */}
        <div className="inline-flex flex-col items-center gap-3 relative flex-[0_0_auto] ml-[-64.00px] mr-[-64.00px]">
          <div className="inline-flex items-center justify-center gap-2.5 pl-16 pr-0 py-0 relative flex-[0_0_auto]">
            <h2 className="relative w-fit mt-[-1.00px] [font-family:'Circular_Std-Book',Helvetica] font-normal text-gray-200 text-xl text-center tracking-[0] leading-8 whitespace-nowrap">
              Trusted by 100+ partners and organizations
            </h2>
          </div>

          <div className="flex w-[1440px] items-center justify-center gap-8 px-20 py-6 relative flex-[0_0_auto]">
            {partners.map((partner, index) => (
              <div
                key={`partner-${index}`}
                className={`h-[${index === 0 ? "34.88" : index === 1 ? "49.39" : index === 3 ? "46.2" : "49.39"}px] ${
                  index === 0
                    ? "ml-[-352.00px]"
                    : index === 1
                      ? "ml-[-128.00px]"
                      : index === 7
                        ? "mr-[-128.00px]"
                        : index === 8
                          ? "mr-[-352.00px]"
                          : ""
                } flex w-48 items-center justify-center gap-2 relative`}
              >
                <img
                  className={`${partner.logoWidth} ${partner.logoHeight} ${
                    index === 0
                      ? "mt-[-527.73px] mr-[-1110.16px]"
                      : index === 8
                        ? "mt-[-526.65px] ml-[-523.00px]"
                        : ""
                  } relative`}
                  alt={partner.name}
                  src={partner.logo}
                />
                <div
                  className={`relative w-fit ${
                    partner.gradient && !partner.reverse
                      ? "bg-[linear-gradient(90deg,rgba(148,163,184,0.06)_0%,rgba(148,163,184,0.5)_47%,rgba(148,163,184,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
                      : partner.gradient && partner.reverse
                        ? "bg-[linear-gradient(90deg,rgba(148,163,184,1)_0%,rgba(117,129,146,0.63)_38%,rgba(66,73,82,0)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent"
                        : "text-slate-400"
                  } font-heading-6 font-[number:var(--heading-6-font-weight)] text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]`}
                >
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features section */}
        <Card className="flex flex-col items-start gap-2.5 px-10 py-12 relative self-stretch w-full flex-[0_0_auto] bg-[#0b1321] rounded-lg border-none">
          <CardContent className="flex flex-col max-w-[1188px] items-start gap-11 relative w-full flex-[0_0_auto] p-0">
            <h2 className="relative self-stretch mt-[-1.00px] [text-shadow:0px_0px_4px_#00000040] [font-family:'Hardpixel-Regular',Helvetica] font-normal text-[#6fcf46] text-[32px] text-center tracking-[0] leading-10">
              What You&apos;ll Get Early Access to
            </h2>

            <div className="flex flex-wrap items-start gap-[24px_44px] relative self-stretch w-full flex-[0_0_auto]">
              {features.map((feature, index) => (
                <div
                  key={`feature-${index}`}
                  className={`flex flex-col ${index < 2 ? "w-[264px]" : "min-w-[264px]"} items-start gap-2 px-3 py-1 relative ${index >= 2 ? "flex-[0_0_auto]" : ""}`}
                >
                  <img
                    className="relative w-6 h-6"
                    alt={`Feature icon ${index + 1}`}
                    src={feature.icon}
                  />
                  <div
                    className={`flex flex-col items-start gap-2 relative ${index < 2 ? "self-stretch w-full flex-[0_0_auto]" : index === 2 ? "self-stretch w-full flex-[0_0_auto]" : "flex-[0_0_auto]"}`}
                  >
                    <h3
                      className={`relative ${index < 3 ? "self-stretch" : "w-fit"} mt-[-1.00px] [text-shadow:0px_0px_4px_#00000040] [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#d9d9d9] text-xl tracking-[0] leading-7 ${index >= 2 ? "whitespace-nowrap" : ""}`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`relative self-stretch [text-shadow:0px_0px_4px_#00000040] [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#9da7b9] text-lg tracking-[${index === 2 ? "0.04" : "0"}px] leading-7`}
                    >
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
