// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require('path'); // node.js의 path 라이브러리를 호출하여 변수에 저장

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
