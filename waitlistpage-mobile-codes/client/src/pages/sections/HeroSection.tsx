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
  // Grid cell types for the background pattern
  const gridCellTypes = {
    green1:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.06)_0%,rgba(90,164,56,0.09)_100%)_1]",
    green2:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]",
    green3:
      "[border-image:linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1]",
    purple:
      "[border-image:linear-gradient(137deg,rgba(20,18,136,0.04)_0%,rgba(65,56,164,0.06)_100%)_1]",
    empty:
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
    brown2: "border-[#5826020f]",
  };

  // Partner logos data
  const partners = [
    {
      name: "SmartFinder",
      logo: "/figmaAssets/group-45.png",
      highlight: false,
    },
    { name: "SHELLS", logo: "/figmaAssets/vector-3.svg", highlight: true },
    { name: "SHELLS", logo: "/figmaAssets/vector-1.svg", highlight: false },
    { name: "Zoomerr", logo: "/figmaAssets/vector-5.svg", highlight: false },
    { name: "SHELLS", logo: "/figmaAssets/vector-1.svg", highlight: false },
    { name: "SHELLS", logo: "/figmaAssets/vector-1.svg", highlight: false },
    { name: "SHELLS", logo: "/figmaAssets/vector-1.svg", highlight: false },
    {
      name: "WAVES",
      logo: "/figmaAssets/vector.svg",
      highlight: true,
      reverse: true,
    },
    { name: "ArtVenue", logo: "/figmaAssets/group-46.png", highlight: false },
  ];

  // User avatars for the waitlist display
  const avatars = [
    { src: "/figmaAssets/ellipse-1.png", alt: "User avatar" },
    { src: "/figmaAssets/ellipse-5.png", alt: "User avatar" },
    { src: "/figmaAssets/ellipse-3.png", alt: "User avatar" },
    { src: "/figmaAssets/ellipse-4.png", alt: "User avatar" },
    { src: "/figmaAssets/ellipse-5.png", alt: "User avatar" },
  ];

  return (
    <section className="flex flex-col items-center gap-16 pt-24 pb-6 px-8 relative w-full bg-[#000d19] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute w-full h-[1178px] top-[-59px] left-0 right-0 opacity-30 pointer-events-none">
        <div className="relative w-full h-[1178px] max-w-[1964px] mx-auto">
          <div className="absolute w-full h-[1163px] top-0 left-0 right-0">
            <div className="relative h-[1163px]">
              {/* Grid pattern - simplified with a repeating pattern */}
              <div className="grid grid-cols-[repeat(23,72px)] w-full">
                {Array(16)
                  .fill(0)
                  .map((_, rowIndex) => (
                    <React.Fragment key={`row-${rowIndex}`}>
                      {Array(23)
                        .fill(0)
                        .map((_, colIndex) => {
                          // Determine cell type based on row position
                          let cellType = gridCellTypes.green1;
                          if (
                            rowIndex === 1 ||
                            rowIndex === 7 ||
                            rowIndex === 8 ||
                            rowIndex === 9
                          )
                            cellType = gridCellTypes.green2;
                          else if (
                            rowIndex === 2 ||
                            rowIndex === 10 ||
                            rowIndex === 15
                          )
                            cellType = gridCellTypes.green3;
                          else if (rowIndex === 3)
                            cellType = gridCellTypes.purple;
                          else if (rowIndex === 4)
                            cellType = gridCellTypes.empty;
                          else if (rowIndex === 5)
                            cellType = gridCellTypes.orange;
                          else if (rowIndex === 6) cellType = gridCellTypes.red;
                          else if (rowIndex >= 11 && rowIndex <= 14)
                            cellType = gridCellTypes.purple2;

                          return (
                            <div
                              key={`cell-${rowIndex}-${colIndex}`}
                              className={`${cellType} relative w-[72px] h-[72px] border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#a3b8cc0d]`}
                            />
                          );
                        })}
                    </React.Fragment>
                  ))}
              </div>

              {/* Dot overlay pattern */}
              <div className="inline-flex items-center gap-[68px] absolute top-[171px] left-[322px]">
                {Array(14)
                  .fill(0)
                  .map((_, colIndex) => {
                    // Determine dot type based on column position
                    let dotType = dotTypes.brown;
                    if (colIndex >= 1 && colIndex <= 4) dotType = dotTypes.blue;
                    else if (colIndex >= 7 && colIndex <= 10)
                      dotType = dotTypes.green;

                    return (
                      <div
                        key={`dot-col-${colIndex}`}
                        className="inline-flex flex-col items-start gap-[72px] relative flex-[0_0_auto]"
                      >
                        {Array(14)
                          .fill(0)
                          .map((_, rowIndex) => {
                            // Special cases for certain dots
                            let currentDotType = dotType;
                            if (
                              (colIndex === 1 || colIndex === 2) &&
                              (rowIndex === 2 ||
                                rowIndex === 5 ||
                                rowIndex === 6)
                            ) {
                              currentDotType = dotTypes.blue2;
                            } else if (colIndex === 1 && rowIndex === 7) {
                              currentDotType = dotTypes.blue;
                            }

                            const isFirst = rowIndex === 0;
                            const isLast = rowIndex === 13;

                            return (
                              <div
                                key={`dot-${colIndex}-${rowIndex}`}
                                className={`relative w-3 h-3 ${isFirst ? "mt-[-4.00px]" : ""} ${isLast ? "mb-[-4.00px]" : ""} ml-[-4.00px] mr-[-4.00px] rounded-md border-8 border-solid ${currentDotType} [background:conic-gradient(from_180deg_at_50%_50%,rgba(20,20,20,0.06)_0%,rgba(51,23,5,0.02)_100%)]`}
                              />
                            );
                          })}
                      </div>
                    );
                  })}
              </div>

              {/* Radial gradient overlay */}
              <div className="absolute w-[1496px] h-[647px] top-[451px] left-20 [background:radial-gradient(50%_50%_at_50%_50%,rgba(162,235,42,1)_0%,rgba(0,54,31,0)_100%)] opacity-[0.23]" />
            </div>
          </div>

          {/* Cybersecurity pixel art images */}
          <div className="absolute w-full h-[1043px] top-[135px] left-0 pointer-events-none">
            <div className="relative w-[818px] h-[833px] top-[151px] left-[-18px]">
              <img
                className="absolute w-[800px] h-[800px] top-0 left-0"
                alt="Pixel cybersecurity background"
                src="/figmaAssets/pixel-cybersecurity.svg"
              />
              <img
                className="absolute w-[275px] h-[741px] top-[92px] left-[543px]"
                alt="Pixel cybersecurity detail"
                src="/figmaAssets/pixel-cybersecurity.svg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-start justify-center gap-2.5 relative w-full max-w-[978px] z-10">
        {/* Heading Section */}
        <div className="flex flex-col items-start justify-center gap-8 w-full">
          <div className="flex flex-col min-w-[244px] max-w-[588px] items-start gap-4 w-full mx-auto text-center">
            <h1 className="font-bold text-[32px] leading-[42.2px] tracking-[0.02px] text-center">
              <span className="text-[#8c8c8c]">Ready to </span>
              <span className="text-white">learn Cybersecurity</span>
              <span className="text-[#8c8c8c]"> </span>
              <span className="text-white">ethically </span>
              <span className="text-[#8c8c8c]">in the </span>
              <span className="text-white">most practical</span>
              <span className="text-[#8c8c8c]"> and </span>
              <span className="text-white">most efficient</span>
              <span className="text-[#8c8c8c]"> way possible?</span>
            </h1>

            <p className="text-[#c1c1c1] text-center font-body-sm text-[length:var(--body-sm-font-size)] tracking-[var(--body-sm-letter-spacing)] leading-[var(--body-sm-line-height)]">
              Join the waitlist to be among the first to gain access to
              AquillaCyber learning platform!
            </p>
          </div>

          {/* Form Section */}
          <Card className="flex flex-col max-w-[600px] w-full mx-auto bg-transparent border-0 shadow-none">
            <CardContent className="flex flex-col gap-6 p-0">
              <div className="flex flex-col gap-4 w-full">
                <Input
                  className="min-w-[324px] p-4 bg-[#202a3a] text-[#8591a5] rounded border-0 h-auto"
                  placeholder="Name"
                />

                <Input
                  className="min-w-[324px] p-4 bg-[#202a3a] text-[#8591a5] rounded border-0 h-auto"
                  placeholder="Enter your email address"
                  type="email"
                />

                <Select>
                  <SelectTrigger className="min-w-[324px] p-4 bg-[#202a3a] text-[#8591a5] rounded border-0 h-auto">
                    <SelectValue placeholder="Level of cybersecurity knowledge" />
                    <ChevronDownIcon className="h-6 w-6" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="expert">Expert</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  className="min-w-[324px] p-4 pt-4 pb-16 bg-[#202a3a] text-[#8591a5] rounded border-0 min-h-[100px]"
                  placeholder="What are your expectations?"
                />
              </div>

              <Button className="w-full py-4 px-6 bg-[#d08f15] hover:bg-[#e79715] text-[#000d19] font-medium rounded-lg border border-solid border-[#e79715]">
                Join the waitlist
              </Button>

              {/* Waitlist Users */}
              <div className="flex items-center gap-2 w-full">
                <div className="inline-flex items-center">
                  {avatars.map((avatar, index) => (
                    <img
                      key={`avatar-${index}`}
                      className={`relative w-11 h-11 ${index > 0 ? "-ml-3" : ""} object-cover`}
                      alt={avatar.alt}
                      src={avatar.src}
                    />
                  ))}
                  <div className="flex w-11 h-11 items-center justify-center relative -ml-3 bg-[#272b2d] rounded-[100px] border-4 border-solid border-[#121212]">
                    <div className="relative w-fit font-medium text-white text-xs text-center tracking-[0] leading-4 whitespace-nowrap">
                      +200
                    </div>
                  </div>
                </div>
                <p className="font-small-texts-md text-[#e8e8e8] text-[length:var(--small-texts-md-font-size)] tracking-[var(--small-texts-md-letter-spacing)] leading-[var(--small-texts-md-line-height)]">
                  Over 200+ learners are on the waitlist
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Partners Section */}
      <div className="flex flex-col items-center gap-12 w-full overflow-hidden">
        <div className="flex items-center justify-center gap-6 py-3 w-full overflow-x-auto">
          {partners.map((partner, index) => (
            <div
              key={`partner-${index}`}
              className="flex items-center justify-center gap-2 h-12 px-4"
            >
              <img
                className="h-8 w-auto"
                alt={partner.name}
                src={partner.logo}
              />
              <div
                className={`font-heading-6 text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap ${
                  partner.highlight
                    ? partner.reverse
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
    </section>
  );
};
