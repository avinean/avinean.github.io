window.addEventListener('load', () => {
  const scrollWrapper = document.querySelector('#scroll');
  window.addEventListener('wheel', checkScrollDirection);

  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
      scrollWrapper.innerText = 'UP';
    } else {
      scrollWrapper.innerText = 'Down';
    }
  }

  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
});
