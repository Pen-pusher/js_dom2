let count = 0
var heading = document.querySelector('.heading');


function increment() {
   
    count = count +1
    heading.innerHTML= count;
}

function decrement() {

    count = count - 1
    heading.innerHTML = count;
}

function reset() {
    count = 0;
    heading.innerHTML = count;
}
