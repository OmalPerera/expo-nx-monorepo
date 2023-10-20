module.exports = function (api) {
  //api.cache.invalidate(() => process.env.APP_ENV);
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: 'env/.env',
        },
      ],
    ],
  };
};
