import React, {useEffect} from "../../../_snowpack/pkg/react.js";
import anime from "../../../_snowpack/pkg/animejs.js";
const Intro = () => {
  useEffect(() => {
    anime.timeline().add({
      targets: ".intro-social li",
      translateX: [-50, 0],
      opacity: [0, 1],
      delay: anime.stagger(100, {direction: "reverse"}),
      easing: "easeOutExpo",
      duration: 1e3
    }).add({
      targets: ".intro-scrolldown",
      translateY: [100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1e3
    }, "-=800").add({
      targets: [".s-intro .text-pretitle", ".s-intro .text-huge-title"],
      translateX: [100, 0],
      opacity: [0, 1],
      delay: anime.stagger(400),
      easing: "easeOutExpo",
      duration: 1e3
    });
  }, []);
  return /* @__PURE__ */ React.createElement("section", {
    id: "intro",
    className: "s-intro target-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row intro-content wide"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "column"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-pretitle with-line"
  }, "Hello World"), /* @__PURE__ */ React.createElement("h1", {
    className: "text-huge-title"
  }, "I am Kyle, ", /* @__PURE__ */ React.createElement("br", null), "a Software ", /* @__PURE__ */ React.createElement("br", null), "Engineer based ", /* @__PURE__ */ React.createElement("br", null), "in Cape Town,", /* @__PURE__ */ React.createElement("br", null), "South Africa.")), /* @__PURE__ */ React.createElement("ul", {
    className: "intro-social"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/in/kyle-s-b43930239/",
    target: "_blank"
  }, "LinkedIn")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/KyleSaunders01",
    target: "_blank"
  }, "GitHub")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "https://stackoverflow.com/users/22295366/kyle-saunders",
    target: "_blank"
  }, "StackOverflow")))), /* @__PURE__ */ React.createElement("a", {
    href: "#about",
    className: "intro-scrolldown smoothscroll"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    clipRule: "evenodd"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"
  }))));
};
export default Intro;
