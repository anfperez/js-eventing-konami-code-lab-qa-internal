const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

// We have an array of key codes
// Add an event listener somewhere so that when we press this, something happens
function init() {
  let index = 0;

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which || e.detail);

    if (code[index] === key) {
      index++;

      if (index === code.length) {
        alert('You did it!!');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}