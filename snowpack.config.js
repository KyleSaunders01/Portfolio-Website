export default {
  mount: {
    public: {url: "/", static: true},
    src: {url: "/dist"}
  },
  plugins: [
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-postcss"
  ],
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html"
    }
  ],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2020",
    external: ["react", "react-dom"]
  },
  alias: {
    "@components": "./src/components",
    "@styles": "./src/styles"
  }
};
