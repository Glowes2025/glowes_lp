import React, { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

export default function Hero({ title, subtitle, videoSrc, bgUrl }) {
  const isMobile = window.innerWidth <= 768;
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((prevIndex) => prevIndex + 1),
      3000 // every 3 seconds
    );

    return () => clearInterval(intervalId); // Use clearInterval here
  }, []);
  return (
    <section className="cs_hero cs_style_1 cs_primary_bg position-relative">
      <div className="container">
        <div className="cs_hero_text text-center position-relative">
          <p className="cs_hero_subtitle cs_accent_color cs_medium cs_fs_18 cs_dancing_animation">
            <TextTransition springConfig={presets.wobbly}>
              {title[index % title.length]}
            </TextTransition>
          </p>
          <h1 className="cs_hero_title cs_white_color cs_fs_68 cs_dancing_animation">
            {subtitle}
          </h1>
        </div>
        {!isMobile && (
          <div className="cs_hero_shape position-absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={220}
              height={220}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#38c2ba"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
          </div>
        )}
      </div>
    </section>
  );
}
