var tailwindcss = require('tailwindcss');
var cssnano = require('cssnano');

module.exports = {
  plugins: {
   'postcss-import': {},
   'postcss-cssnext': {
	   browsers: ['last 2 versions', '> 5%'],
    },
    'tailwindcss': ('./css-config.js'),
    'cssnano': {},
	}
};
