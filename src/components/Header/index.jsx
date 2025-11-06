import { useEffect, useState } from "react";

export default function Header({ logoUrl, colorVariant }) {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth",
      });
    }
    setMobileToggle(false);
  };

  return (
    <header
      className={`cs_site_header cs_style_1 cs_sticky_header ${
        colorVariant ? colorVariant : "cs_primary_color"
      } ${isSticky ? "cs_gescout_show" : ""}`}
    >
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <a
                className="cs_site_branding"
                href="#home"
                onClick={(e) => handleSmoothScroll(e, "home")}
              >
                <img src={logoUrl} alt="Logo" />
              </a>
            </div>
            <div className="cs_main_header_center">
              <div className="cs_nav cs_medium cs_primary_font">
                <ul
                  className={`${
                    mobileToggle ? "cs_nav_list cs_active" : "cs_nav_list"
                  }`}
                >
                  <li>
                    <a
                      href="#home"
                      onClick={(e) => handleSmoothScroll(e, "home")}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      onClick={(e) => handleSmoothScroll(e, "about")}
                    >
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a
                      href="#service"
                      onClick={(e) => handleSmoothScroll(e, "service")}
                    >
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      onClick={(e) => handleSmoothScroll(e, "portfolio")}
                    >
                      Portfólio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      onClick={(e) => handleSmoothScroll(e, "faq")}
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(e) => handleSmoothScroll(e, "contact")}
                    >
                      Contato
                    </a>
                  </li>
                </ul>

                <span
                  className={
                    mobileToggle
                      ? "cs_menu_toggle cs_teggle_active"
                      : "cs_menu_toggle"
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
