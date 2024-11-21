module.exports = {
    extends: [
      "airbnb-base",
      "next/core-web-vitals",
      "plugin:prettier/recommended",
    ],
    overrides: [
      {
        files: ["**/*.ts", "**/*.tsx"],
        plugins: ["@typescript-eslint", "unused-imports", "simple-import-sort"],
        extends: [
          "airbnb",
          "airbnb-typescript",
          "next/core-web-vitals",
          "plugin:prettier/recommended",
        ],
        parserOptions: {
          project: "./tsconfig.json",
        },
        rules: {
          "prettier/prettier": "off",
          "import/extensions": "off",
          "react/function-component-definition": "off",
          "react/destructuring-assignment": "off",
          "react/require-default-props": "off",
          "react/jsx-props-no-spreading": "off",
          "react/no-array-index-key": "off",
          "jsx-a11y/click-events-have-key-events": "off",
          "jsx-a11y/no-static-element-interactions": "off",
          "@next/next/no-img-element": "off",
          "@typescript-eslint/comma-dangle": "off",
          "@typescript-eslint/consistent-type-imports": "error",
          "@typescript-eslint/lines-between-class-members": "off",
          "@typescript-eslint/no-throw-literal": "off",
          "@typescript-eslint/naming-convention": "off",
          "import/no-extraneous-dependencies": "off",
          "no-console": "off",
          "no-restricted-syntax": [
            "error",
            "ForInStatement",
            "LabeledStatement",
            "WithStatement",
          ],
          "import/prefer-default-export": "off",
          "simple-import-sort/imports": "error",
          "simple-import-sort/exports": "error",
          "linebreak-style": ["error", "unix"],
          "@typescript-eslint/no-unused-vars": [
            "error",
            {
              args: "after-used",
              argsIgnorePattern: "^_",
              ignoreRestSiblings: true,
              varsIgnorePattern: "^_",
            },
          ],
          "unused-imports/no-unused-imports": [
            "warn",
            {
              vars: "all",
              args: "none",
              ignoreRestSiblings: false,
            },
          ],
          "unused-imports/no-unused-vars": [
            "error",
            {
              argsIgnorePattern: "^_",
            },
          ],
        },
      },
  
      {
        files: ["**/*.test.ts", "**/*.test.tsx"],
        plugins: ["jest", "jest-formatting", "testing-library", "jest-dom"],
        extends: [
          "plugin:jest/recommended",
          "plugin:jest-formatting/recommended",
          "plugin:testing-library/react",
          "plugin:jest-dom/recommended",
        ],
      },
  
      {
        files: ["cypress/**/*.ts"],
        plugins: ["cypress"],
        extends: ["plugin:cypress/recommended"],
        parserOptions: {
          project: "./cypress/tsconfig.json",
        },
      },
  
      {
        files: ["*.stories.*"],
        extends: ["plugin:storybook/recommended"],
        rules: {
          "storybook/hierarchy-separator": "error",
          "import/no-extraneous-dependencies": [
            "error",
            {
              devDependencies: true,
            },
          ],
        },
      },
    ],
  };
  