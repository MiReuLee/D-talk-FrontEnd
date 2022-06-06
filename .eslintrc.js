module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/airbnb',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4],
        'comma-dangle': ['error', 'never'],
        'vuejs-accessibility/form-control-has-label': 0,
        'vuejs-accessibility/label-has-for': 0,
        'arrow-parens': 0,
        'no-alert': 0,
        'no-console': 0
    }
};
