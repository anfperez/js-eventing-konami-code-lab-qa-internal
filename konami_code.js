const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// up up down down 

// We have an array of key codes

// Add an event listener somewhere so that when we press this, something happens

function init() {
  //tracker keeps track of where we are in the array
  const body = document.querySelector('body');
  const tracker = 0;
  body.addEventListener('keydown', (event) => {
    if (event.which === code[tracker]) {
      console.log("Success");
      tracker++;
    } else {
      console.log("you've messed up :(");
      tracker = 0;
    }
  })
}
/*
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
*/ 