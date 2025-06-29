import { BookOpenIcon, LayersIcon, UsersIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CoursesSection = (): JSX.Element => {
  // Grid cell data for background pattern
  const gridPatterns = [
    { gradient: "rgba(18,136,49,0.06)_0%,rgba(90,164,56,0.09)_100%" },
    { gradient: "rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%" },
    { gradient: "rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%" },
    { gradient: "rgba(20,18,136,0.04)_0%,rgba(65,56,164,0.06)_100%" },
    { gradient: "rgba(18,136,49,0)_0%,rgba(90,164,56,0)_100%" },
    { gradient: "rgba(136,83,18,0.05)_0%,rgba(164,88,56,0.08)_100%" },
    { gradient: "rgba(136,18,18,0.03)_0%,rgba(164,69,56,0.05)_100%" },
    { gradient: "rgba(45,18,136,0.01)_0%,rgba(65,56,164,0.02)_100%" },
    { gradient: "rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.04)_100%" },
  ];

  // Course data
  const courses = [
    {
      id: 1,
      image: "..//figmaAssets/better-angular-app-architecture-with-modules.png",
      category: "OFFENSIVE SECURITY",
      categoryColor: "text-[#3797b0]",
      title: "Cybersecurity Fundamentals",
      type: "Course • Beginners",
      modules: 12,
      labs: 25,
      learners: 4016,
      isFree: true,
    },
    {
      id: 2,
      image:
        "..//figmaAssets/better-angular-app-architecture-with-modules-1.png",
      category: "NETWORK SECURITY",
      categoryColor: "text-[#b037a6]",
      title: "Introduction to Network Security",
      type: "Course • Beginners",
      modules: 12,
      labs: 25,
      learners: 4016,
      isFree: true,
      hasViewButton: true,
    },
    {
      id: 3,
      image:
        "..//figmaAssets/better-angular-app-architecture-with-modules-2.png",
      category: "TESTING",
      categoryColor: "text-[#b0a937]",
      title: "Penetration Testing Essentials",
      type: "Course • Beginners",
      modules: 12,
      labs: 25,
      learners: 4016,
      isPremium: true,
      premiumPoints: 150,
    },
  ];

  return (
    <section className="flex flex-col h-[900px] items-center justify-center gap-[72px] px-6 py-[124px] relative w-full overflow-hidden bg-[linear-gradient(0deg,rgba(11,19,33,1)_0%,rgba(11,19,33,1)_100%)]">
      {/* Background grid pattern */}
      <div className="flex flex-col w-full items-start absolute top-0 left-0 opacity-70">
        {Array.from({ length: 12 }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="flex items-center relative self-stretch w-full flex-[0_0_auto]"
          >
            {Array.from({ length: 23 }).map((_, colIndex) => {
              const patternIndex = (rowIndex + colIndex) % gridPatterns.length;
              return (
                <div
                  key={`cell-${rowIndex}-${colIndex}`}
                  className="relative w-[72px] h-[72px] border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b]"
                  style={{
                    borderImage: `linear-gradient(137deg,${gridPatterns[patternIndex].gradient})_1`,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="w-[800px] items-center gap-6 flex-[0_0_auto] mt-[-55.00px] flex flex-col relative">
        {/* Header with tagline */}
        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Suisse_Intl-Bold',Helvetica] font-bold text-[#d08f15] text-[32px] tracking-[0.13px] leading-[42.2px] whitespace-nowrap">
            Learn
          </h2>
          <div className="relative w-2 h-2 bg-[#a36327] rounded" />
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Suisse_Intl-Bold',Helvetica] font-bold text-[#d08f15] text-[32px] tracking-[0.13px] leading-[42.2px] whitespace-nowrap">
            Practice
          </h2>
          <div className="relative w-2 h-2 bg-[#a36327] rounded" />
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Suisse_Intl-Bold',Helvetica] font-bold text-[#d08f15] text-[32px] tracking-[0.13px] leading-[42.2px] whitespace-nowrap">
            Grow
          </h2>
        </div>

        {/* Tabs navigation */}
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="flex justify-center w-full bg-transparent">
            <TabsTrigger
              value="courses"
              className="inline-flex flex-col justify-center gap-2.5 px-[72px] py-4 data-[state=active]:text-[#6fcf46] data-[state=inactive]:text-[#e8e8e880] [font-family:'Circular_Std-Book',Helvetica] text-lg"
            >
              Courses
            </TabsTrigger>
            <TabsTrigger
              value="careerPaths1"
              className="inline-flex flex-col justify-center gap-2.5 px-[72px] py-4 data-[state=active]:text-[#6fcf46] data-[state=inactive]:text-[#e8e8e880] [font-family:'Circular_Std-Book',Helvetica] text-lg"
            >
              Career Paths
            </TabsTrigger>
            <TabsTrigger
              value="careerPaths2"
              className="inline-flex flex-col justify-center gap-2.5 px-[72px] py-4 data-[state=active]:text-[#6fcf46] data-[state=inactive]:text-[#e8e8e880] [font-family:'Circular_Std-Book',Helvetica] text-lg"
            >
              Career Paths
            </TabsTrigger>
          </TabsList>

          <div className="flex-col items-start gap-2.5 bg-[#e8e8e833] flex relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[244px] h-1.5 bg-[#6fcf46] rounded-[100px]" />
          </div>
        </Tabs>
      </div>

      {/* Course cards */}
      <div className="inline-flex items-center gap-9 relative flex-[0_0_auto]">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="flex w-[336px] items-center gap-2.5 px-3 py-4 bg-[#84848424] rounded-lg border-none"
          >
            <CardContent className="flex flex-col items-start gap-[19px] p-0 w-full">
              {/* Course image */}
              <div
                className="relative self-stretch w-full h-[180px] rounded-md overflow-hidden"
                style={{ background: `url(${course.image}) 50% 50% / cover` }}
              >
                <div className="inline-flex items-center gap-2 px-2 py-1 bg-[#95b541] rounded-[0px_0px_4px_0px]">
                  {course.isFree && (
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Circular_Std-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                      FREE
                    </span>
                  )}
                  {course.isPremium && (
                    <>
                      <img
                        className="relative w-4 h-4"
                        alt="Key"
                        src="/figmaAssets/key-01.svg"
                      />
                      <span className="relative w-fit mt-[-1.00px] [font-family:'Circular_Std-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                        {course.premiumPoints}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Course details */}
              <div className="flex flex-col w-[303.97px] items-start gap-3 px-1 py-0">
                <div className="flex flex-col items-start gap-1 relative self-stretch w-full">
                  <div
                    className={`relative self-stretch h-3 mt-[-1.00px] [font-family:'Nunito',Helvetica] font-extrabold ${course.categoryColor} text-xs tracking-[0.02px] leading-[14px] whitespace-nowrap`}
                  >
                    {course.category}
                  </div>
                  <h3 className="relative self-stretch [font-family:'Circular_Std-Bold',Helvetica] font-bold text-[#e8e8e8] text-lg tracking-[0] leading-7">
                    {course.title}
                  </h3>
                </div>
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                  <div className="relative self-stretch h-3.5 mt-[-1.00px] [font-family:'Nunito',Helvetica] font-medium text-white text-xs tracking-[0.02px] leading-5 whitespace-nowrap">
                    {course.type}
                  </div>
                </div>
              </div>

              {/* Course metadata */}
              <div className="flex flex-wrap items-center gap-[8px_12px] px-1 py-0 relative self-stretch w-full">
                <div className="inline-flex items-center gap-2">
                  <BookOpenIcon className="w-5 h-5 text-slate-400" />
                  <span className="w-fit [font-family:'Nunito',Helvetica] font-normal text-slate-400 text-xs leading-[14px] whitespace-nowrap">
                    {course.modules} Modules
                  </span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <LayersIcon className="w-5 h-5 text-slate-400" />
                  <span className="w-fit [font-family:'Nunito',Helvetica] font-normal text-slate-400 text-xs leading-[14px] whitespace-nowrap">
                    {course.labs} Hands-on-labs
                  </span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <UsersIcon className="w-5 h-5 text-slate-400" />
                  <span className="w-fit [font-family:'Nunito',Helvetica] font-normal text-slate-400 text-xs leading-[14px] whitespace-nowrap">
                    {course.learners.toLocaleString()} learners enrolled
                  </span>
                </div>
              </div>

              {/* View course button (only for the second card) */}
              {course.hasViewButton && (
                <div className="inline-flex items-center gap-2 mt-6 self-center">
                  <div className="items-center justify-center gap-3 px-0 py-[3px] rounded-lg">
                    <span className="relative w-fit mt-[-1.00px] font-body-md-md font-[number:var(--body-md-md-font-weight)] text-[#d19016] text-[length:var(--body-md-md-font-size)] text-center tracking-[var(--body-md-md-letter-spacing)] leading-[var(--body-md-md-line-height)] whitespace-nowrap [font-style:var(--body-md-md-font-style)]">
                      View course
                    </span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* View all courses button */}
      <Button className="flex items-center justify-center px-8 py-3 mb-[-55.00px] bg-gradient-to-r from-[#f4a945] to-[#d08f15] rounded-lg hover:from-[#e8993d] hover:to-[#c08513] text-white shadow-lg transition-all duration-200 border-0">
        <span className="[font-family:'Circular_Std-Medium',Helvetica] font-medium text-base text-center tracking-[0.5px] leading-5 whitespace-nowrap">
          View all courses
        </span>
      </Button>
    </section>
  );
};
