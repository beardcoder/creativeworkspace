module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaFeatures: {
            legacyDecorators: true,
        },
    },
    extends: ['@nuxtjs', '@nuxtjs/eslint-config-typescript', 'prettier', 'prettier/vue'],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        'no-console': 'off',
        'vue/no-v-html': 'off',
    },
};
