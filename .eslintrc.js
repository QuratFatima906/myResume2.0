module.exports = {
    root: true,
    plugins: [
      'prettier',
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended',
      "next/core-web-vitals"
    ],
    rules: {
      "require-atomic-updates": "off",
      "prettier/prettier": "error",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-namespace": "off",
      "no-case-declarations": "off",
      "@typescript-eslint/naming-convention": [ "error",  {  selector: "variableLike", format: ["camelCase", "PascalCase", "UPPER_CASE"], leadingUnderscore: "allow" } ],
      "no-inner-declarations": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "max-len": ["error", {"code": 100, "ignoreComments": true, "ignoreStrings": true, "ignoreTemplateLiterals": true, "ignoreRegExpLiterals": true}],
      "no-return-await": "error",
      "eqeqeq": "error",
      "no-console": ["error", {allow: ["warn", "error", "info"]}]
    },
  };