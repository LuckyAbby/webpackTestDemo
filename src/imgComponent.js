export default function imgComponent(url) {
  const ele = new Image();
  ele.src = url;
  return ele;
}
