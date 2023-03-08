module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  sourceMaps: true,
};
