const arrayDown = document.querySelectorAll('[data-anim]');
const burger = document.querySelector('[data-open-menu]');
const closeMenu = document.querySelector('[data-close-menu]');
const open = document.querySelector('.nav-mobile-open');

burger.addEventListener('click', (e)=> {
  toggle(open, 'nav-mobile-open__active');
});
closeMenu.addEventListener('click', (e)=> {
  toggle(open, 'nav-mobile-open__active');
});
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