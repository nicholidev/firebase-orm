module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "google",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["tsconfig.json", "tsconfig.dev.json"],
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    ignorePatterns: ["/lib/**/*"],
    plugins: ["@typescript-eslint", "import"],
    rules: {
        "quotes": ["error", "double"],
        "indent": ["error", 4],
        "import/no-unresolved": 0,
        "brace-style": ["error", "allman", { "allowSingleLine": true }],
        "@typescript-eslint/no-explicit-any": "off",
        "object-curly-spacing": ["error", "always"],
        "max-len": ["error", { "code": 160 }],
    },
};
