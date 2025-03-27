const windows = document.querySelectorAll(".window");
let z = 1;

windows.forEach(window => {
    const header = window.querySelector('.header');

    window.addEventListener('mousedown', (event) => {
        z = z + 1;
        window.style.zIndex = z;
    })
})

header.addEventListener('mousedown', (event) => {
     //dragging code
     let l = window.offsetLeft;
     let t = window.offestTop;
 
     let startX = event.windowX;
     let startY = event.windowY;

     const drag = (event) => {
         event.preventDefault();
         window.style.left = l + (event.pageX - startX) + "px";
         window.style.top = l + (event.pageY - startY) + "px";
     }
     const mouseup = () => {
         document.removeEventListener('mousemove', drag);
         document.removeEventListener('mouseup', mouseup);
     }

     document.addEventListener('mousemove', drag)
     document.addEventListener('mouseup', mouseup)
})