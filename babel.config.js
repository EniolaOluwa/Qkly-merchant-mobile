module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.ios.js',
          '.android.js',
          '.svg',
        ],
        alias: {
          '@components': './src/components',
          '@assets': './src/assets',
          '@routes': './src/routes',
          '@modules': './src/modules',
          '@hooks': './src/hooks',
          '@api': './src/api',
          '@utils': './src/utils',
          '@store': './src/store',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
