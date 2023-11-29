module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-strongly-recommended", //add
    "prettier", //add
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "vue",
    "prettier", //add
  ],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off", //add
    "@typescript-eslint/no-explicit-any": "off", //add
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto", //add
      },
    ],
  },
};
