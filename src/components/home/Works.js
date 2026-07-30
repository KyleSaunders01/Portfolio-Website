import React, {useEffect, useState} from "../../../_snowpack/pkg/react.js";
import anime from "../../../_snowpack/pkg/animejs.js";
import * as basicLightbox from "../../../_snowpack/pkg/basiclightbox.js";
const Works = () => {
  const [activeModal, setActiveModal] = useState(null);
  const openModal = (modalId) => {
    setActiveModal(modalId);
  };
  const closeModal = () => {
    setActiveModal(null);
  };
  useEffect(() => {
    const ssLightbox = () => {
      const folioLinks = document.querySelectorAll(".folio-list__item-link");
      const modals = [];
      folioLinks.forEach(function(link) {
        let modalbox = link.getAttribute("href");
        if (modalbox) {
          let modalElement = document.querySelector(modalbox);
          if (!modalElement)
            return;
          const instance = basicLightbox.create(modalElement, {
            onShow: (instance2) => {
              const closeOnEscape = (event) => {
                if (event.key === "Escape") {
                  instance2.close();
                  document.removeEventListener("keydown", closeOnEscape);
                }
              };
              document.addEventListener("keydown", closeOnEscape);
              return true;
            }
          });
          modals.push(instance);
        }
      });
      folioLinks.forEach(function(link, index) {
        link.addEventListener("click", function(event) {
          event.preventDefault();
          modals[index].show();
        });
      });
    };
    ssLightbox();
  }, []);
  useEffect(() => {
    const ssViewAnimate = () => {
      const blocks = document.querySelectorAll("[data-animate-block]");
      const viewportAnimation = () => {
        let scrollY = window.pageYOffset;
        blocks.forEach((current) => {
          const viewportHeight = window.innerHeight;
          const triggerTop = current.offsetTop + viewportHeight * 0.2 - viewportHeight;
          const blockHeight = current.offsetHeight;
          const blockSpace = triggerTop + blockHeight;
          const inView = scrollY > triggerTop && scrollY <= blockSpace;
          const isAnimated = current.classList.contains("ss-animated");
          if (inView && !isAnimated) {
            anime({
              targets: current.querySelectorAll("[data-animate-el]"),
              opacity: [0, 1],
              translateY: [100, 0],
              delay: anime.stagger(400, {start: 200}),
              duration: 800,
              easing: "easeInOutCubic",
              begin: () => {
                current.classList.add("ss-animated");
              }
            });
          }
        });
      };
      window.addEventListener("scroll", viewportAnimation);
      return () => {
        window.removeEventListener("scroll", viewportAnimation);
      };
    };
    ssViewAnimate();
  }, []);
  return /* @__PURE__ */ React.createElement("section", {
    id: "works",
    className: "s-works target-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row works-portfolio"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "column lg-12",
    "data-animate-block": true
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-pretitle",
    "data-animate-el": true
  }, "Recent Works"), /* @__PURE__ */ React.createElement("p", {
    className: "h1",
    "data-animate-el": true
  }, "Here are some of my favorite projects I have done. Feel free to check them out."), /* @__PURE__ */ React.createElement("ul", {
    className: "folio-list row block-lg-one-half block-stack-on-1000"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "folio-list__item column",
    "data-animate-el": true
  }, /* @__PURE__ */ React.createElement("a", {
    className: "folio-list__item-link",
    href: "#modal-01",
    onClick: () => openModal("modal-01")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-pic"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/portfolio/JsAI.png",
    srcSet: "images/portfolio/JsAI.png 1x, images/portfolio/JsAI@2x.png 2x",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-cat"
  }, "Genetic Learning Model with Js"), /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-title"
  }, "Js Self Driving Model."))), /* @__PURE__ */ React.createElement("a", {
    className: "folio-list__proj-link",
    href: "#",
    title: "project link"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "folio-list__item column",
    "data-animate-el": true
  }, /* @__PURE__ */ React.createElement("a", {
    className: "folio-list__item-link",
    href: "#modal-02",
    onClick: () => openModal("modal-02")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-pic"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/portfolio/pythonAI.png",
    srcSet: "images/portfolio/pythonAI.png 1x, images/portfolio/pythonAI@2x.png 2x",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-cat"
  }, "Imitation Learning Model with Python"), /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-title"
  }, "Python Self Driving Model."))), /* @__PURE__ */ React.createElement("a", {
    className: "folio-list__proj-link",
    href: "#",
    title: "project link"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "folio-list__item column",
    "data-animate-el": true
  }, /* @__PURE__ */ React.createElement("a", {
    className: "folio-list__item-link",
    href: "#modal-03",
    onClick: () => openModal("modal-03")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-pic"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/portfolio/jbay.png",
    srcSet: "images/portfolio/jbay.png 1x, images/portfolio/jbay@2x.png 2x",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-cat"
  }, "Journey Spotlight"), /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-title"
  }, "JBay Jols."))), /* @__PURE__ */ React.createElement("a", {
    className: "folio-list__proj-link",
    href: "#",
    title: "project link"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "folio-list__item column",
    "data-animate-el": true
  }, /* @__PURE__ */ React.createElement("a", {
    className: "folio-list__item-link",
    href: "#modal-04",
    onClick: () => openModal("modal-04")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-pic"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/portfolio/damara.png",
    srcSet: "images/portfolio/damara.png 1x, images/portfolio/damara@2x.png 2x",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-cat"
  }, "Hunting Promotion"), /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-title"
  }, "Into The Wilderness of Africa."))), /* @__PURE__ */ React.createElement("a", {
    className: "folio-list__proj-link",
    href: "#",
    title: "project link"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "folio-list__item column",
    "data-animate-el": true
  }, /* @__PURE__ */ React.createElement("a", {
    className: "folio-list__item-link",
    href: "#modal-05",
    onClick: () => openModal("modal-05")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-pic"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/portfolio/gtr.png",
    srcSet: "images/portfolio/gtr.png 1x, images/portfolio/gtr@2x.png 2x",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-cat"
  }, "Music Video"), /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-title"
  }, "Chasing Shadows."))), /* @__PURE__ */ React.createElement("a", {
    className: "folio-list__proj-link",
    href: "#",
    title: "project link"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  })))), /* @__PURE__ */ React.createElement("li", {
    className: "folio-list__item column",
    "data-animate-el": true
  }, /* @__PURE__ */ React.createElement("a", {
    className: "folio-list__item-link",
    href: "#modal-06",
    onClick: () => openModal("modal-06")
  }, /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-pic"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/portfolio/vv.png",
    srcSet: "images/portfolio/vv.png 1x, images/portfolio/vv@2x.png 2x",
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-text"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-cat"
  }, "Music Video"), /* @__PURE__ */ React.createElement("div", {
    className: "folio-list__item-title"
  }, "Vuur & Vlam."))), /* @__PURE__ */ React.createElement("a", {
    className: "folio-list__proj-link",
    href: "#",
    title: "project link"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z",
    fill: "currentColor",
    fillRule: "evenodd",
    clipRule: "evenodd"
  })))))), /* @__PURE__ */ React.createElement("div", {
    id: "modal-01",
    className: `modal ${activeModal === "modal-01" ? "" : "hidden"}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal-popup"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/portfolio/gallery/g-JsAI.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "modal-popup__desc"
  }, /* @__PURE__ */ React.createElement("h5", null, "Javascript Self Driving Car"), /* @__PURE__ */ React.createElement("p", null, "This project was used as a stepping stone to gain a better understanding of machine learning at a very basic level with the use of any libraries. It's very fun machine learning game that is very visual and interactive. It's something I always come back to and play around with and try to improve."), /* @__PURE__ */ React.createElement("ul", {
    className: "modal-popup__cat"
  }, /* @__PURE__ */ React.createElement("li", null, "Genetic Learning Model"), /* @__PURE__ */ React.createElement("li", null, "javascript"), /* @__PURE__ */ React.createElement("li", null, "Machine Learning"))), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/KyleSaunders01/JavaScript_Self_driving_car",
    target: "_blank",
    className: "modal-popup__details"
  }, "Project link"))), /* @__PURE__ */ React.createElement("div", {
    id: "modal-02",
    hidden: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal-popup"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/portfolio/gallery/g-pythonAI.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "modal-popup__desc"
  }, /* @__PURE__ */ React.createElement("h5", null, "Python Self Driving Model"), /* @__PURE__ */ React.createElement("p", null, "This was a project I did during university and I decided to take it to the next level and tackle a master's level Self Driving Model implementation. I learned so much about machine learning and building self driving models during this project. Machine Learning is definitely a field that interests me."), /* @__PURE__ */ React.createElement("ul", {
    className: "modal-popup__cat"
  }, /* @__PURE__ */ React.createElement("li", null, "Imitation Learning Model"), /* @__PURE__ */ React.createElement("li", null, "Python"), /* @__PURE__ */ React.createElement("li", null, "tensorflow"), /* @__PURE__ */ React.createElement("li", null, "openCv"), /* @__PURE__ */ React.createElement("li", null, "Udacity Self Driving Car Sim"), /* @__PURE__ */ React.createElement("li", null, "Machine Learning"))), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/KyleSaunders01/Python_Self_driving_car",
    target: "_blank",
    className: "modal-popup__details"
  }, "Project link"))), /* @__PURE__ */ React.createElement("div", {
    id: "modal-03",
    hidden: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal-popup"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/portfolio/gallery/g-jbay.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "modal-popup__desc"
  }, /* @__PURE__ */ React.createElement("h5", null, "Jbay Jols"), /* @__PURE__ */ React.createElement("p", null, "This one was purely for fun. I was on a trip with the university's canoe club and I thought it would be fun to have a little memory piece of the trip to Jeffreys Bay."), /* @__PURE__ */ React.createElement("ul", {
    className: "modal-popup__cat"
  }, /* @__PURE__ */ React.createElement("li", null, "Journey Spotlight"), /* @__PURE__ */ React.createElement("li", null, "Cinematography"))), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.youtube.com/watch?v=7qfvSTh2lfE",
    target: "_blank",
    className: "modal-popup__details"
  }, "Project link"))), /* @__PURE__ */ React.createElement("div", {
    id: "modal-04",
    hidden: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal-popup"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/portfolio/gallery/g-damara.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "modal-popup__desc"
  }, /* @__PURE__ */ React.createElement("h5", null, "Into The Wilderness of Africa"), /* @__PURE__ */ React.createElement("p", null, "This project was a great way for me to express my passion for nature & wildlife conservation, while also reaching a specific audience to market an experience. I took the skills I've acquired to make a video that promotes a product/experience well and also gives an euphoric feeling to the viewer."), /* @__PURE__ */ React.createElement("ul", {
    className: "modal-popup__cat"
  }, /* @__PURE__ */ React.createElement("li", null, "Hunting Promotion"), /* @__PURE__ */ React.createElement("li", null, "Marketing Campaign"))), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.youtube.com/watch?v=2gPWIvPV8-Q",
    target: "_blank",
    className: "modal-popup__details"
  }, "Project link"))), /* @__PURE__ */ React.createElement("div", {
    id: "modal-05",
    hidden: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal-popup"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/portfolio/gallery/g-gtr.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "modal-popup__desc"
  }, /* @__PURE__ */ React.createElement("h5", null, "Chasing Shadows - GoTheRodeo"), /* @__PURE__ */ React.createElement("p", null, "This was an amazing project, with the help of some very talented people we were able to create an absolute masterpiece with this video. It was so much fun and I learned a ton from this experience. Craig the drummer of GTR actually taught me how to play drums when I was still in school."), /* @__PURE__ */ React.createElement("ul", {
    className: "modal-popup__cat"
  }, /* @__PURE__ */ React.createElement("li", null, "Music Video"), /* @__PURE__ */ React.createElement("li", null, "Director"), /* @__PURE__ */ React.createElement("li", null, "Cinematographer"), /* @__PURE__ */ React.createElement("li", null, "Co-Editor"))), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.youtube.com/watch?v=YGfjlyisR2Y",
    target: "_blank",
    className: "modal-popup__details"
  }, "Project link"))), /* @__PURE__ */ React.createElement("div", {
    id: "modal-06",
    hidden: true
  }, /* @__PURE__ */ React.createElement("div", {
    className: "modal-popup"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "images/portfolio/gallery/g-vv.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "modal-popup__desc"
  }, /* @__PURE__ */ React.createElement("h5", null, "Vuur & Vlam - Van West"), /* @__PURE__ */ React.createElement("p", null, "I've had the privilege working alongside industry leading director Jannes Erasmus and cinematographer Ben Badenhorst with creating the music video for Vuur & Vlam, an Afrikaans hit song. A bunch of great people came together to make this project possible, making it something that was truly special."), /* @__PURE__ */ React.createElement("ul", {
    className: "modal-popup__cat"
  }, /* @__PURE__ */ React.createElement("li", null, "Music Video"), /* @__PURE__ */ React.createElement("li", null, "Cinematographer"))), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.youtube.com/watch?v=T99gpP8RGJE",
    target: "_blank",
    className: "modal-popup__details"
  }, "Project link")))));
};
export default Works;
