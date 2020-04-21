import path from 'path';
import FMMode from 'frontmatter-markdown-loader/mode';
import glob from 'glob';

require('dotenv').config();

function getDynamicPaths(urlFilepathTable) {
    return [].concat(
        ...Object.keys(urlFilepathTable).map(url => {
            const filepathGlob = urlFilepathTable[url];
            return glob
                .sync(filepathGlob, { cwd: 'content' })
                .map(filepath => `${url}/${path.basename(filepath, '.md')}/`);
        })
    );
}

const config = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        htmlAttrs: {
            lang: 'de',
        },
        titleTemplate: '%s — Markus Sommer',
        meta: [
            { charset: 'utf-8' },
            { hid: 'lang', name: 'lang', content: 'de' },
            { hid: 'language', name: 'language', content: 'Deutsch' },
            { hid: 'author', name: 'author', content: 'Markus Sommer' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Persönliche Webseite von Markus Sommer ein Entwickler für moderne Web Technologien, Design und Frontend',
            },
        ],
        link: [
            {
                hid: 'canonical',
                rel: 'canonical',
                href: 'https://creativeworkspace.de',
            },
            {
                rel: 'preconnect',
                href: 'https://d33wubrfki0l68.cloudfront.net',
                crossorigin: true,
            },
            {
                rel: 'preconnect',
                href: 'https://cdn.jsdelivr.net',
                crossorigin: true,
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
                crossorigin: true,
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: true,
            },
            {
                rel: 'preconnect',
                href: 'https://www.google-analytics.com',
                crossorigin: true,
            },
        ],
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#121212',
        height: '5px',
    },

    /*
     ** Global CSS
     */
    css: ['sanitize.css', '@/assets/css/variables.css', '@/assets/css/global.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/lazyload', '@/plugins/jsonld', '@/plugins/vue-observe-visibility'],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        'nuxt-webfontloader',
        '@nuxtjs/dotenv',
        '@nuxtjs/sitemap',
        '@nuxtjs/netlify-files',
        '@nuxtjs/pwa',
    ],

    /**
     * PWA Settings
     * See doc: https://pwa.nuxtjs.org/
     */
    pwa: {
        meta: {
            lang: 'de',
            theme_color: '#121212',
        },
    },

    sitemap: {
        hostname: 'https://creativeworkspace.de',
        gzip: true,
        trailingSlash: true,
    },

    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},

    generate: {
        routes: getDynamicPaths({
            '/blog': 'posts/*.md',
        }),
    },

    router: {
        // Doc: https://nuxtjs.org/api/configuration-router/#trailingslash
        trailingSlash: true,
        prefetchLinks: false,
    },

    pageTransition: {
        name: 'page',
        mode: 'out-in',
    },

    optimizedImages: {
        optimizeImages: true,
        inlineImageLimit: -1,
        defaultImageLoader: 'img-loader',
        webp: {
            quality: 85,
        },
    },

    webfontloader: {
        google: {
            families: ['Maven+Pro:400,700', 'Roboto+Slab:300,400&display=swap'],
        },
    },

    /*
     ** Build configuration
     */
    build: {
        cache: true,
        watch: ['@/api/*'],
        extend(config, _ctx) {
            config.module.rules.push({
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                include: path.resolve(__dirname, 'content'),
                options: {
                    mode: [FMMode.HTML],
                    vue: {
                        root: 'markdown-body',
                    },
                },
            });
        },
        transpile: ['countup.js', 'vue-countup-v2/dist/countup.min.js'],
        babel: {
            plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
            ],
        },
        postcss: {
            // Add plugin names as key and arguments as value
            // Install them before as dependencies with npm or yarn
            plugins: {
                'postcss-responsive-type': {},
                cssnano: {},
                'postcss-css-variables': {},
            },
            preset: {},
        },
    },
};

export default config;