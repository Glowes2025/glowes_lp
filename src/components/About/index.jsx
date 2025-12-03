import { Icon } from "@iconify/react";
import Button from "../Button";
import WaterWave from "react-water-wave";

export default function About({
  thumbnail,
  uperTitle,
  title,
  subTitle,
  featureList,
  btnText,
  btnUrl,
}) {
  return (
    <section className="cs_shape_animation_1">
      <div className="container">
        <div className="row cs_gap_y_40 align-items-center">
          <div className="col-lg-5">
            <div className="cs_img_card cs_style_1 position-relative">
              <WaterWave
                className="cs_video_block cs_style_1 cs_bg_filed position-relative d-flex justify-content-center align-items-center cs_ripple_activate overflow-hidden"
                imageUrl={thumbnail}
              >
                {() => {}}
              </WaterWave>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="cs_section_heading cs_style_1">
              <p className="cs_section_subtitle cs_accent_color cs_fs_18 mb-0">
                {uperTitle}
              </p>
              <div className="cs_height_10 cs_height_lg_5" />
              <h2 className="cs_section_title cs_fs_50 mb-0">{title}</h2>
              <div className="cs_height_30 cs_height_lg_30" />
              <p className="m-0">{subTitle}</p>
            </div>
            <div className="cs_height_40 cs_height_lg_30" />
            <ul className="cs_list cs_style_1 cs_primary_font cs_primary_color cs_semibold cs_mp0 cs_fs_21">
              {featureList?.map((item, index) => (
                <li key={index}>
                  <i className="d-flex">
                    <Icon icon="fa6-regular:circle-check" />
                  </i>
                  {item}
                </li>
              ))}
            </ul>
            <div className="cs_height_40 cs_height_lg_30" />
            <Button btnText={btnText} btnUrl={btnUrl} />
          </div>
        </div>
      </div>
    </section>
  );
}
