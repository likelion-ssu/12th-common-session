document.querySelectorAll('.wrapper').forEach((wrapper) => {
  wrapper.addEventListener('mouseover', function () {
    const altText = wrapper.querySelector('img')?.getAttribute('alt');
    if (altText) {
      this.setAttribute('data-alt', altText);
    }
  });

  wrapper.addEventListener('mouseout', function () {
    this.removeAttribute('data-alt');
  });
});
