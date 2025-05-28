//dragging and stacking code for the windows
let newX = 0;
let newY = 0;
let startX = 0;
let startY = 0;

const card = document.getElementsByClassName('card')[0]

card.addEventListener('mousedown', mouseDown);

function mouseDown(e){
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e){
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    card.style.top = (card.offsetTop - newY) + 'px';
    card.style.left = (card.offsetLeft - newX) + 'px';

    console.log({newX, newY})
    return false;
}

function mouseUp(e){
    document.removeEventListener('mousemove', mouseMove);
}