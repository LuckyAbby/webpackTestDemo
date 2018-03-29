import _ from 'lodash';

import './style.css';
import bgUrl from './bg.jpg';

const btn = document.createElement('button');
btn.innerHTML = 'click me';
document.body.appendChild(btn);

btn.onclick = function() {
  import(/* webpackChunkName: "component" */ './component.js')
  .then(function(module) {
    const component = module.default; // 引入模块的默认函数
    document.body.appendChild(component());
  });
};

if (process.env.NODE_ENV === 'development') {
   console.log('开发环境');
 }
