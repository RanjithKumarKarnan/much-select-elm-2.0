module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ["prettier"],
  extends: [
    "airbnb-base",
    "prettier",
  ],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
  },
};
