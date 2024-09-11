/* eslint-disable unicorn/prefer-module */
module.exports = {
  plugins: [
    '@babel/plugin-transform-nullish-coalescing-operator',
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
};
