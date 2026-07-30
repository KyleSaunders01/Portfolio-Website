import React, {useEffect, useState} from "../../_snowpack/pkg/react.js";
import anime from "../../_snowpack/pkg/animejs.js";
const Header = () => {
  const [activeSection, setActiveSection] = useState("intro");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        setActiveSection(section.id);
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    anime({
      targets: ".s-header",
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1e3
    });
  }, []);
  const toggleMenu = (event) => {
    event.preventDefault();
    setMenuIsOpen(!menuIsOpen);
  };
  const handleLinkClick = () => {
    if (window.innerWidth <= 800) {
      setMenuIsOpen(false);
    }
  };
  return /* @__PURE__ */ React.createElement("header", {
    className: `s-header ${menuIsOpen ? "menu-is-open" : ""}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header-mobile flex justify-between items-center text-white md:hidden"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "mobile-home-link text-xl font-bold"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "index.html"
  }, "Kyle.")), /* @__PURE__ */ React.createElement("a", {
    className: `mobile-menu-toggle cursor-pointer ${menuIsOpen ? "is-clicked" : ""}`,
    href: "#0",
    onClick: toggleMenu
  }, /* @__PURE__ */ React.createElement("span", null, "Menu"))), /* @__PURE__ */ React.createElement("div", {
    className: "row wide main-nav-wrap ${menuIsOpen ? 'is-open' : ''}"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "column lg-12 main-nav"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex justify-center py-2 text-lg"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "home-link"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "index.html",
    className: " font-bold hover:text-blue-500"
  }, "Kyle.")), /* @__PURE__ */ React.createElement("li", {
    className: activeSection === "intro" ? "current" : ""
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#intro",
    className: "smoothscroll hover:text-blue-500",
    onClick: handleLinkClick
  }, "Intro")), /* @__PURE__ */ React.createElement("li", {
    className: activeSection === "about" ? "current" : ""
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#about",
    className: "smoothscroll hover:text-blue-500",
    onClick: handleLinkClick
  }, "About")), /* @__PURE__ */ React.createElement("li", {
    className: activeSection === "works" ? "current" : ""
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#works",
    className: "smoothscroll hover:text-blue-500",
    onClick: handleLinkClick
  }, "Works")), /* @__PURE__ */ React.createElement("li", {
    className: activeSection === "contact" ? "current" : ""
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#contact",
    className: "smoothscroll hover:text-blue-500",
    onClick: handleLinkClick
  }, "Say Hello"))))));
};
export default Header;
