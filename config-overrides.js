const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@pages': 'src/pages',
    '@templates': 'src/templates',
    '@components': 'src/components',
    '@atoms': 'src/components/atoms',
    '@molecules': 'src/components/molecules',
    '@organisms': 'src/components/organisms',
  })(config);

  return config;
};
