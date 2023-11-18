function changeColor(elem) {
  var currentColor = elem.style.backgroundColor;
  if (currentColor === 'yellow' || currentColor === 'red') {
      elem.style.backgroundColor = 'blue';
  } else {
      elem.style.backgroundColor = 'red';
  }
}
