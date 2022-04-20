import React from "react";
import "./Projects.css";
import { FaReact, FaNodeJs, Facss } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  Sicss,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
} from "react-icons/si";
import { DiCss3, DiMongodb } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/t3vtt29/Display-picture.png"
                  alt="Stylecraze"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Shopbop Clone</h2>
              <p>
                Shopbop is the global online retail destination for style
                inspiration and discovery, offering women and men a curated
                selection of ready-to-wear & accessories.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <SiJavascript />
                <SiTailwindcss />
              </div>
              <div>
                <a
                  href="https://shopbop-com.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/bhatiyacode/Shopbop.github.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://i.ibb.co/kHkKptq/Display-Picture.png"
                  alt="Stylecraze"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Stylecraze Clone</h2>
              <p>
                StyleCraze is a global women's platform that aims to answer one
                question: what do women want? From health and wellness to
                lifestyle and beauty.
              </p>
              <div>
                <SiExpress />
                <DiCss3 />
                <IoLogoJavascript />
                <SiHtml5 />
                <SiJavascript />
                <FaNodeJs />
                <DiMongodb />
              </div>
              <div>
                <a
                  href="https://stylecraze-backend-clone.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/Prashant-Bhatiya/Stylecraze.backend.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
