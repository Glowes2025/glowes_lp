import Hero from "../Hero";
import Spacing from "../Spacing";
import About from "../About";
import WhyChose from "../WhyChose";
import Service from "../Service";
import Portfolio from "../Portfolio";
import SectionHeading from "../SectionHeading";
import Accordion from "../Accordion";
import Cta from "../Cta";
import TestimonialSlider from "../Slider/TestimonialSlider";
import { pageTitle } from "../../helpers/PageTitle";
import {
  faqData,
  portfolioData,
  serviceListData,
  testimonialData,
  whyChoseFeatureData,
} from "../../utils/lists";

export default function Home() {
  pageTitle("Glowes");
  return (
    <>
      {/* HERO */}
      <section id="home">
        <Hero
          title={[
            "Transformando Ideias em Experiências Digitais",
            "Soluções Inovadoras para Negócios Modernos",
            "Sites, Sistemas e LPs que Convertem",
            "Tecnologia Feita para Crescer com Você",
          ]}
          subtitle="Construímos marcas e experiências digitais que conectam, inspiram e geram resultados reais."
          videoSrc="https://www.youtube.com/embed/VcaAVWtP48A"
          bgUrl="/images/creative-agency/hero_video_bg_1.jpeg"
        />
      </section>

      <Spacing lg="125" md="70" />

      {/* SOBRE */}
      <section id="about">
        <Spacing lg="125" md="70" />
        <About
          thumbnail="/images/creative-agency/about_1.jpeg"
          uperTitle="Quem somos"
          title="Agência criativa full-stack focada em tecnologia e resultado"
          subTitle="Somos uma equipe apaixonada por design, tecnologia e inovação. Unimos estratégia, criatividade e desenvolvimento para criar experiências digitais únicas — de landing pages e sites a sistemas completos que impulsionam marcas e negócios."
          featureList={[
            "Design e desenvolvimento com inteligência e propósito",
            "Estratégias digitais que conectam marcas e pessoas",
            "Soluções modernas, rápidas e sob medida para cada cliente",
          ]}
        />
      </section>

      <Spacing lg="185" md="75" />

      {/* POR QUE ESCOLHER */}
      <section id="why">
        <WhyChose
          sectionTitle="Entregamos inovação com propósito"
          sectionSubTitle="Por que escolher a Glowes"
          whyChoseFeatureData={whyChoseFeatureData}
          thumbnailSrc="/images/creative-agency/why_choose_us_img_3.jpeg"
        />
      </section>

      <Spacing lg="150" md="80" />

      {/* SERVIÇOS */}
      <section id="service" className="cs_primary_bg">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading
            title="Todos os nossos serviços"
            subTitle="Serviços"
            variantColor="cs_white_color"
          />
          <Spacing lg="45" md="30" />
        </div>
        <div className="container">
          <Service
            sectionTitle="Todos os nossos serviços"
            sectionSubTitle="Serviços"
            data={serviceListData}
          />
          <Spacing lg="135" md="65" />
        </div>
      </section>

      {/* PORTFÓLIO */}
      <section id="portfolio">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading
            title="Alguns dos nossos trabalhos"
            subTitle="Portfolio"
          />
          <Spacing lg="85" md="45" />
          <Portfolio data={portfolioData} />
        </div>
        <Spacing lg="150" md="80" />
      </section>

      {/* DEPOIMENTOS */}
      <section id="testimonial" className="cs_primary_bg cs_shape_animation_2">
        <Spacing lg="143" md="75" />
        <TestimonialSlider
          layeredImages={[
            "/images/creative-agency/layer_img_1.jpeg",
            "/images/creative-agency/layer_img_2.jpeg",
            "/images/creative-agency/layer_img_3.jpeg",
            "/images/creative-agency/layer_img_4.jpeg",
            "/images/creative-agency/layer_img_5.jpeg",
          ]}
          data={testimonialData}
        />
      </section>

      {/* CTA */}
      <section id="contact">
        <div className="container">
          <Cta
            title="Você tem algum projeto ou objetivo específico em mente?"
            btnText="Entre em contato"
            btnUrl="#contact"
            bgUrl="/images/creative-agency/cta_bg.jpeg"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <Spacing lg="143" md="75" />
        <div className="container">
          <SectionHeading title="Perguntas Frequentes" subTitle="FAQs" />
          <Spacing lg="55" md="30" />
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <Accordion variant="cs_type_1" data={faqData} />
            </div>
          </div>
        </div>
        <Spacing lg="120" md="50" />
      </section>
    </>
  );
}
