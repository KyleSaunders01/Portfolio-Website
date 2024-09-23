// snowpack.config.mjs
export default {
    mount: {
        // Serves files from the public directory at the root
        public: { url: '/', static: true },

        // Source files will be bundled into the /dist folder
        src: { url: '/dist' },
    },
    plugins: [
        // '@snowpack/plugin-react-refresh', // Enables fast refresh for React (disabled for now)
        '@snowpack/plugin-typescript',    // Handles TypeScript support
        '@snowpack/plugin-postcss',       // Enables PostCSS for your styles (if you're using Tailwind or other PostCSS plugins)
    ],
    routes: [
        {
            match: 'routes',
            src: '.*',
            dest: '/index.html',  // SPA routing
        }
    ],
    optimize: {
        // Bundles all assets together for production
        bundle: true,

        // Minifies your assets (JS/CSS) for faster load times
        minify: true,

        // Ensures modern JavaScript syntax is used
        target: 'es2020',

        // Externalize react and react-dom
        external: ['react', 'react-dom'],
    },
    alias: {
        // Add an alias for importing common components or utilities more easily
        '@components': './src/components',
        '@styles': './src/styles',
    },
    experimental: { appDir: false}
};
