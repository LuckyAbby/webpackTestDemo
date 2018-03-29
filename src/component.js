import _ from 'lodash';

export default function component(name) {
  const ele = document.createElement('div');
  ele.textContent = _.join(['hi', 'webpack'], ' ')
  ele.className = name;
  return ele;
}
