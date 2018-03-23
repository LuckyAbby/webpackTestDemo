export default function component(name) {
  const ele = document.createElement('div');
  ele.textContent = 'hello, webpack';
  ele.className = name;
  return ele;
}
