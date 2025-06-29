import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CoursesSection = (): JSX.Element => {
  // Grid cell data for background pattern
  const createGridCells = (count: number, gradientType: string) => {
    return Array(count)
      .fill(null)
      .map((_, index) => ({
        id: `${gradientType}-${index}`,
        gradient: gradientType,
      }));
  };

  // Course data
  const courses = [
    {
      id: 1,
      image:
        "/figmaAssets/better-angular-app-architecture-with-modules-2.png",
      badge: { type: "premium", text: "150", icon: "/figmaAssets/key-01.svg" },
      category: "OFFENSIVE SECURITY",
      categoryColor: "text-[#b037a6]",
      title: "Introduction to Network Security",
      level: "Course • Beginners",
      description:
        "When you're just starting out with learning Cybersecurity, you'll probably come across networking terms and fundamentals a lot.",
      modules: 12,
      labs: 25,
      learners: 4016,
    },
    {
      id: 2,
      image:
        "/figmaAssets/better-angular-app-architecture-with-modules-1.png",
      badge: { type: "free", text: "FREE" },
      category: "NETWORK SECURITY",
      categoryColor: "text-[#b037a6]",
      title: "Introduction to Network Security",
      level: "Course • Beginners",
      description:
        "When you're just starting out with learning Cybersecurity, you'll probably come across networking terms and fundamentals a lot.",
      modules: 12,
      labs: 25,
      learners: 4016,
    },
    {
      id: 3,
      image:
        "/figmaAssets/better-angular-app-architecture-with-modules-2.png",
      badge: { type: "premium", text: "150", icon: "/figmaAssets/key-01.svg" },
      category: "OFFENSIVE SECURITY",
      categoryColor: "text-[#b037a6]",
      title: "Introduction to Network Security",
      level: "Course • Beginners",
      description:
        "When you're just starting out with learning Cybersecurity, you'll probably come across networking terms and fundamentals a lot.",
      modules: 12,
      labs: 25,
      learners: 4016,
    },
  ];

  return (
    <section className="flex flex-col justify-center gap-8 px-6 py-24 w-full overflow-hidden bg-[linear-gradient(0deg,rgba(11,19,33,1)_0%,rgba(11,19,33,1)_100%)] items-center relative">
      {/* Background grid pattern */}
      <div className="flex flex-col w-full items-start absolute top-0 left-0 opacity-70 pointer-events-none">
        <div className="relative w-full h-[1152px]">
          {/* Grid pattern is simplified with CSS grid instead of individual divs */}
          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-[repeat(23,72px)] grid-rows-[repeat(16,72px)]">
            {Array(368)
              .fill(null)
              .map((_, index) => {
                // Determine gradient type based on row position
                let gradientClass =
                  "border-t-[1.2px] [border-top-style:solid] border-r-[1.2px] [border-right-style:solid] border-[#1b1b1b]";

                if (index < 23) {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(18,136,49,0.06)_0%,rgba(90,164,56,0.09)_100%)_1]";
                } else if (index < 46) {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]";
                } else if (index < 69) {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1]";
                } else if (index < 92) {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(20,18,136,0.04)_0%,rgba(65,56,164,0.06)_100%)_1]";
                } else if (index < 115) {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(18,136,49,0)_0%,rgba(90,164,56,0)_100%)_1]";
                } else if (index < 138) {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(136,83,18,0.05)_0%,rgba(164,88,56,0.08)_100%)_1]";
                } else if (index < 161) {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]";
                } else if (index < 184) {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(136,18,18,0.03)_0%,rgba(164,69,56,0.05)_100%)_1]";
                } else if (index < 207) {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1]";
                } else if (index < 230) {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.05)_100%)_1]";
                } else if (index < 276) {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(45,18,136,0.01)_0%,rgba(65,56,164,0.02)_100%)_1]";
                } else if (index < 322) {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(45,18,136,0.01)_0%,rgba(65,56,164,0.02)_100%)_1]";
                } else if (index < 345) {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(18,136,49,0.03)_0%,rgba(90,164,56,0.04)_100%)_1]";
                } else {
                  gradientClass +=
                    " [border-image:linear-gradient(137deg,rgba(18,136,49,0.05)_0%,rgba(90,164,56,0.08)_100%)_1]";
                }

                return (
                  <div
                    key={`grid-cell-${index}`}
                    className={`relative w-[72px] h-[72px] ${gradientClass}`}
                  />
                );
              })}
          </div>
        </div>
      </div>

      {/* Header section */}
      <div className="flex flex-col items-center gap-6 relative w-full">
        <div className="inline-flex items-center gap-2 relative">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Suisse_Intl-Bold',Helvetica] font-bold text-[#d08f15] text-2xl tracking-[0.10px] leading-[31.7px] whitespace-nowrap">
            Learn
          </h2>
          <div className="relative w-1 h-1 bg-[#a36327] rounded-sm" />
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Suisse_Intl-Bold',Helvetica] font-bold text-[#d08f15] text-2xl tracking-[0.10px] leading-[31.7px] whitespace-nowrap">
            Practice
          </h2>
          <div className="relative w-1 h-1 bg-[#a36327] rounded-sm" />
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Suisse_Intl-Bold',Helvetica] font-bold text-[#d08f15] text-2xl tracking-[0.10px] leading-[31.7px] whitespace-nowrap">
            Grow
          </h2>
        </div>

        {/* Tabs navigation */}
        <Tabs defaultValue="courses" className="w-full flex justify-center">
          <TabsList className="flex flex-wrap w-[342px] items-center justify-center gap-[12px_24px] bg-transparent">
            <TabsTrigger
              value="courses"
              className="inline-flex items-center justify-center gap-2.5 px-10 py-2 bg-[#9cda96] rounded overflow-hidden border border-solid border-[#5aa337] [font-family:'Circular_Std-Medium',Helvetica] font-medium text-[#067627] text-base tracking-[0] leading-6 whitespace-nowrap"
            >
              Courses
            </TabsTrigger>
            <TabsTrigger
              value="career-paths"
              className="flex w-[129px] flex-col items-center justify-center gap-2.5 px-10 py-2 [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#e8e8e880] text-base text-center tracking-[0] leading-6 whitespace-nowrap"
            >
              Career Paths
            </TabsTrigger>
            <TabsTrigger
              value="challenges"
              className="inline-flex flex-col items-center justify-center gap-2.5 px-10 py-2 [font-family:'Circular_Std-Book',Helvetica] font-normal text-[#e8e8e880] text-base text-center tracking-[0] leading-6 whitespace-nowrap"
            >
              Challenges
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Course cards */}
      <div className="flex flex-col items-center gap-8 relative w-full max-w-[1100px] mx-auto">
        <div className="flex flex-wrap justify-center gap-9 items-center">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="w-[336px] bg-[#84848424] rounded-lg border-none"
            >
              <CardContent className="flex flex-col items-start gap-[19px] p-3">
                {/* Course image */}
                <div
                  className="relative self-stretch w-full h-[180px] rounded-md overflow-hidden"
                  style={{ background: `url(${course.image}) 50% 50% / cover` }}
                >
                  <Badge
                    className={`inline-flex items-center gap-2 px-2 py-1 absolute top-0 left-0 ${course.badge.type === "free" ? "bg-[#95b541]" : "bg-[#95b541]"} rounded-[0px_0px_4px_0px]`}
                  >
                    {course.badge.icon && (
                      <img
                        className="relative w-4 h-4"
                        alt="Key"
                        src={course.badge.icon}
                      />
                    )}
                    <span className="relative w-fit mt-[-1.00px] [font-family:'Circular_Std-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                      {course.badge.text}
                    </span>
                  </Badge>
                </div>

                {/* Course details */}
                <div className="flex flex-col w-full items-start gap-3 px-1 py-0">
                  <div className="flex flex-col items-start gap-1 relative self-stretch w-full">
                    <span
                      className={`relative self-stretch h-3 mt-[-1.00px] [font-family:'Nunito',Helvetica] font-extrabold ${course.categoryColor} text-xs tracking-[0.02px] leading-[14px] whitespace-nowrap`}
                    >
                      {course.category}
                    </span>
                    <h3 className="relative self-stretch [font-family:'Circular_Std-Bold',Helvetica] font-bold text-[#e8e8e8] text-lg tracking-[0] leading-7">
                      {course.title}
                    </h3>
                  </div>

                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full">
                    <span className="relative self-stretch h-3.5 mt-[-1.00px] [font-family:'Nunito',Helvetica] font-medium text-white text-xs tracking-[0.02px] leading-5 whitespace-nowrap">
                      {course.level}
                    </span>
                    <p className="relative self-stretch [font-family:'Circular_Std-Book',Helvetica] font-normal text-white text-sm tracking-[0] leading-5">
                      {course.description}
                    </p>
                  </div>
                </div>

                {/* Course metadata */}
                <div className="flex flex-wrap items-center gap-[8px_12px] px-1 py-0 relative self-stretch w-full">
                  <div className="inline-flex items-center gap-2 relative">
                    <img
                      className="relative w-5 h-5"
                      alt="Book open"
                      src="/figmaAssets/book-open-01.svg"
                    />
                    <span className="font-normal text-slate-400 leading-[14px] relative w-fit [font-family:'Nunito',Helvetica] text-xs tracking-[0] whitespace-nowrap">
                      {course.modules} Modules
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 relative">
                    <img
                      className="relative w-5 h-5"
                      alt="Layers three"
                      src="/figmaAssets/layers-three-01.svg"
                    />
                    <span className="font-normal text-slate-400 leading-[14px] relative w-fit [font-family:'Nunito',Helvetica] text-xs tracking-[0] whitespace-nowrap">
                      {course.labs} Hands-on-labs
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 relative">
                    <img
                      className="relative w-5 h-5"
                      alt="Icon outline user"
                      src="/figmaAssets/icon-outline-user-group.svg"
                    />
                    <span className="relative w-fit [font-family:'Nunito',Helvetica] font-normal text-slate-400 text-xs tracking-[0] leading-[14px] whitespace-nowrap">
                      {course.learners.toLocaleString()} learners enrolled
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="inline-flex items-center justify-center gap-1.5">
          <div className="relative w-2 h-2 bg-white rounded" />
          <div className="relative w-2 h-2 bg-[#ffffff2b] rounded" />
          <div className="relative w-2 h-2 bg-[#ffffff2b] rounded" />
        </div>
      </div>

      {/* View all courses button */}
      <Button className="inline-flex flex-col px-8 py-4 bg-[#d08f15] items-center justify-center relative rounded-lg shadow-[0px_1px_2px_#0000000d] [font-family:'Circular_Std-Medium',Helvetica] font-medium text-[#0f1626] text-lg text-center tracking-[0.80px] leading-6 whitespace-nowrap">
        View all courses
      </Button>
    </section>
  );
};
