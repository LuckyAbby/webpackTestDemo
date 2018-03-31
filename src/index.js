import _ from 'lodash';
// import component from './component.js';
// import imgComponent from './imgComponent.js';

import './style.css';
import bgUrl from './bg.jpg';

// document.body.appendChild(component());
// document.body.appendChild(imgComponent(bgUrl));
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
