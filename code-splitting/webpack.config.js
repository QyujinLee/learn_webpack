// webpack.config.js
var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'none', // production : 배포 시 사용, development : 개발 시 사용, none
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // <- webpack으로 build 시 적용될 loader들을 기입, rules는 loader 규칙
            {
                test: /\.css$/, // test의 value를 기준으로
                // use: ['style-loader', 'css-loader'], // 이 loader들을 적용하겠다 !
                // 위의 로더를 적용하는데 있어서 순서도 중요하다고 여겨진다.
                // 위 예의 두 로더의 순서를 바꾸면 제대로된 기능을 하질 못한다.
                // style-loader는 webpack내에 빌드된 파일에 header 내에 style 태그를 삽입 시켜주고
                // css 로더는 css파일과 js 파일의 번들링을 가능케 한다.
                // * 로더는 오른쪽에서 왼쪽 순서로 적용이 된다 !
                use: [{ loader: MiniCssExtractPlugin.loader }, 'css-loader'],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
    // 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성이다.
    // 로더와 비교하면 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면,
    // 플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다고 보면 됩니다.
    // 결과물의 정보를 변형하여 나에게 제공해줄 수 있다.
    // 플러그인 배열에는 생성자 함수로 생성한 객체 인스턴스만이 추가될 수 있다.
};
