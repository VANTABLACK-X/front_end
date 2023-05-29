window.addEventListener('scroll', function() {
    var popup = document.querySelector('.popup');
    var content = document.querySelector('.content');
    
    if (isElementInViewport(content)) {
      popup.style.display = 'block';
    } else {
      popup.style.display = 'none';
    }
  });
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  
  var closeBtn = document.querySelector('.close');
  closeBtn.addEventListener('click', function() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'none';
  });
  