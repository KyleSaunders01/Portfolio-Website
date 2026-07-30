import React, {useEffect, useState} from "../_snowpack/pkg/react.js";
import anime from "../_snowpack/pkg/animejs.js";
import Header from "./components/Header.js";
import Intro from "./components/home/Intro.js";
import About from "./components/home/About.js";
import Works from "./components/home/Works.js";
import Contact from "./components/home/Contact.js";
import Footer from "./components/Footer.js";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handlePageLoad = () => {
      setLoading(false);
    };
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);
  useEffect(() => {
    if (!loading) {
      anime({
        targets: ".circles span",
        keyframes: [
          {opacity: [0, 0.3]},
          {opacity: [0.3, 0.1]}
        ],
        delay: anime.stagger(100, {direction: "reverse"}),
        easing: "easeInOutQuad",
        duration: 1500
      });
    }
  }, [loading]);
  return /* @__PURE__ */ React.createElement("div", {
    id: "top"
  }, loading && /* @__PURE__ */ React.createElement("div", {
    id: "preloader"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "loader"
  })), !loading && /* @__PURE__ */ React.createElement("div", {
    className: "s-pagewrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "circles"
  }, /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null)), /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement("main", {
    className: "s-content"
  }, /* @__PURE__ */ React.createElement(Intro, null), /* @__PURE__ */ React.createElement(About, null), /* @__PURE__ */ React.createElement(Works, null), /* @__PURE__ */ React.createElement(Contact, null)), /* @__PURE__ */ React.createElement(Footer, null)));
};
export default App;
