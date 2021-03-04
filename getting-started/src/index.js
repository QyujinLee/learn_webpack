// import시의 ES6 문법
import _ from 'lodash';
// import시의 ES6 이전 문법
// var _ = require('lodash');

function component() {
    var element = document.createElement('div');

    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
