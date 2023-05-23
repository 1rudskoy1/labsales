const arrayDown = document.querySelectorAll('[data-anim]');

function animationsPin (array) {
  array.forEach(item => {
    item.addEventListener('click', (e) => addAnimation(e.target));
  })
}
function addAnimation (object) {
  toggle(object, 'animation-rotate')
  const list = object.parentNode.parentNode.querySelector('.mobile-items');
  toggle(list, 'animation-colapse')

}
function toggle (target, selector) {
  if(target.classList.contains(selector)) {
    target.classList.remove(selector);
  }else {
    target.classList.add(selector);
  }
}
animationsPin(arrayDown)