export default function component(name) {
  const ele = document.createElement('div');
  ele.textContent = 'hi, webpack';
  ele.className = name;
  return ele;
}
