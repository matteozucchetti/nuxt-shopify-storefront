import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "vue/no-v-html": "off",
    "vue/require-prop-types": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: { normal: "never", void: "always" },
      },
    ],
  },
});
