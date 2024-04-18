import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {languageOptions: { globals: globals.browser,
    "rules": {
      "indent": ["error", 4, {"SwitchCase": 1}]
    }
  }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];