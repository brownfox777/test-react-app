module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    "linebreak-style": 0,
    "arrow-body-style": 0,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prop-types": [0, { ignore: [], customValidators: [] }],
    "click-events-have-key-events": 0,
    "react/require-default-props": 0
  }
};
