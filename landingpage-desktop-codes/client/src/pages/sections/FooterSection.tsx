import React from "react";

export const FooterSection = (): JSX.Element => {
  // Footer navigation links data
  const footerCategories = [
    {
      title: "Product",
      links: [
        "Overview",
        "Features",
        "Pricing",
        "Hacking Labs",
        "Why AquilaLMS",
      ],
    },
    {
      title: "Resources",
      links: [
        "Browse Courses",
        "Skill Paths",
        "Public Write-ups",
        "Github Repositories",
        "Roadmap",
      ],
    },
    {
      title: "Community",
      links: [
        "Blog",
        "Community Forum",
        "Cyberszn Podcast",
        "Github",
        "Webinars & Events",
      ],
    },
    {
      title: "Company",
      links: [
        "About Us",
        "FAQs",
        "Learners Stories",
        "Partner with Us",
        "Help",
      ],
    },
  ];

  // Bottom footer links
  const bottomLinks = ["Help center", "FAQ", "Security"];

  // Other products data
  const otherProducts = [
    {
      name: "HACKRIFT",
      bgColor: "bg-[#804d4d]",
      textColor: "text-[#57db83]",
      logo: "/figmaAssets/figma-logo-2.svg",
    },
    {
      name: "HIT",
      bgColor: "bg-[#ffffff26]",
      textColor: "text-[#ef1ae5]",
    },
    {
      name: "AquilaCyber",
      bgColor: "bg-[#5572f326]",
      textColor: "text-[#c15008]",
      fontFamily: "[font-family:'Circular_Std-Book',Helvetica]",
    },
  ];

  return (
    <footer className="flex flex-col w-full gap-12 pt-10 pb-8 px-16 bg-[#0d1117]">
      <div className="flex flex-col gap-6 w-full">
        {/* Logo and social media section */}
        <div className="flex justify-between py-6 w-full">
          <div className="flex items-center gap-2 h-8">
            <img
              className="w-[32.42px] h-8"
              alt="Figma logo"
              src="/figmaAssets/figma-logo.svg"
            />
            <div className="text-[#e8e8e8] text-2xl leading-[29.8px] [font-family:'Hardpixel-Regular',Helvetica] font-normal tracking-[0] whitespace-nowrap">
              HACKRIFT
            </div>
          </div>

          <div className="flex items-center gap-5 px-2">
            <img
              className="w-6 h-[23px]"
              alt="Social icons"
              src="/figmaAssets/social-icons-2.svg"
            />
            <img
              className="w-6 h-6"
              alt="Social icons"
              src="/figmaAssets/social-icons.svg"
            />
            <img
              className="w-6 h-6"
              alt="Social icons"
              src="/figmaAssets/social-icons-1.svg"
            />
          </div>
        </div>

        {/* Main footer content */}
        <div className="flex w-full gap-6">
          {/* Left section with tagline and GDPR */}
          <div className="flex flex-col gap-6 w-[344px]">
            <div className="font-body-lg-bold font-[number:var(--body-lg-bold-font-weight)] text-white text-[length:var(--body-lg-bold-font-size)] tracking-[var(--body-lg-bold-letter-spacing)] leading-[var(--body-lg-bold-line-height)] [font-style:var(--body-lg-bold-font-style)]">
              Learn and Master Cybersecurity the best way
            </div>

            <div className="flex items-center gap-[15px] w-full">
              <div className="flex items-center justify-center w-12 h-12 bg-[#ffffff14] rounded-xl">
                <div className="flex items-center justify-center w-4 h-[22px]">
                  <img
                    className="w-4 h-[22px]"
                    alt="Svg"
                    src="/figmaAssets/icon1-svg.svg"
                  />
                </div>
              </div>
              <div className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                GDPR compliant
              </div>
            </div>
          </div>

          {/* Footer navigation links */}
          <div className="flex-1 flex justify-end pb-3">
            <div className="flex gap-16 px-6 w-full">
              {footerCategories.map((category, index) => (
                <div key={`category-${index}`} className="flex flex-col gap-3">
                  <div className="h-7">
                    <div className="font-body-lg-bold font-[number:var(--body-lg-bold-font-weight)] text-[#e8e8e8] text-[length:var(--body-lg-bold-font-size)] tracking-[var(--body-lg-bold-letter-spacing)] leading-[var(--body-lg-bold-line-height)] [font-style:var(--body-lg-bold-font-style)]">
                      {category.title}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {category.links.map((link, linkIndex) => (
                      <div key={`link-${linkIndex}`} className="py-0.5">
                        <div className="font-body-sm font-[number:var(--body-sm-font-weight)] text-[#c2c2c2] text-[length:var(--body-sm-font-size)] tracking-[var(--body-sm-letter-spacing)] leading-[var(--body-sm-line-height)] whitespace-nowrap [font-style:var(--body-sm-font-style)]">
                          {link}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Other products section */}
        <div className="flex pt-6 w-full">
          <div className="flex items-center gap-[2.84e-14px]">
            <div className="font-body-lg-bold font-[number:var(--body-lg-bold-font-weight)] text-[#c2c2c2] text-[length:var(--body-lg-bold-font-size)] tracking-[var(--body-lg-bold-letter-spacing)] leading-[var(--body-lg-bold-line-height)] whitespace-nowrap [font-style:var(--body-lg-bold-font-style)]">
              Discover Other AlturaCyber Products
            </div>

            <div className="flex gap-3 pl-6">
              {otherProducts.map((product, index) => (
                <div
                  key={`product-${index}`}
                  className={`${product.bgColor} flex items-center justify-center h-11 px-6 py-4 rounded-xl`}
                >
                  {product.logo ? (
                    <div className="flex items-center gap-1 h-6">
                      <img
                        className="w-[24.32px] h-6"
                        alt="Figma logo"
                        src={product.logo}
                      />
                      <div
                        className={`${product.textColor} text-xl leading-[24.8px] [font-family:'Hardpixel-Regular',Helvetica] font-normal tracking-[0] whitespace-nowrap`}
                      >
                        {product.name}
                      </div>
                    </div>
                  ) : (
                    <div
                      className={`${product.textColor} ${product.fontFamily || "[font-family:'Hardpixel-Regular',Helvetica]"} font-normal text-xl tracking-[0] leading-[24.8px] whitespace-nowrap`}
                    >
                      {product.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="flex items-center justify-between py-6 w-full border-t border-[#ffffff14]">
        <div className="flex items-center gap-5">
          {bottomLinks.map((link, index) => (
            <div key={`bottom-link-${index}`} className="p-0.5">
              <div className="[font-family:'Nunito',Helvetica] font-medium text-[#8bad85] text-sm tracking-[0.06px] leading-5 whitespace-nowrap">
                {link}
              </div>
            </div>
          ))}
        </div>

        <div className="h-[21px]">
          <div className="flex items-end gap-1.5">
            <div className="flex items-center gap-1">
              <img
                className="w-4 h-4"
                alt="Mynaui copyright"
                src="/figmaAssets/mynaui-copyright.svg"
              />
              <div className="[font-family:'Nunito',Helvetica] font-medium text-[#e8e8e8] text-xs leading-[14.9px] whitespace-nowrap tracking-[0]">
                2025 AquillaCyber All rights reserved.
              </div>
            </div>

            <div className="[font-family:'Nunito',Helvetica] font-normal text-transparent text-xs tracking-[0] leading-3">
              <a
                href="https://privacy-policy"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-medium text-slate-400 leading-4 underline">
                  Privacy Policy
                </span>
              </a>

              <span className="font-medium text-white leading-4"> & </span>

              <a
                href="https://app.buildclub.ai/terms"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="font-medium text-slate-400 leading-4 underline">
                  Terms of Service
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
