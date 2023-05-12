// <------ function toggleHide ------->

// function toggleHide() {
//     let para = document.getElementById('para');
//     if (para.style.display != 'none') {
//         para.style.display = 'none';
//         console.log(para.style.display);
//     }
//     else {
//         para.style.display = 'block';
//         console.log(para.style.display);
//     }
// }

let smiley = document.getElementById('smiley');
smiley.style.display = 'none';
let btn = document.getElementById('btn');
btn.addEventListener('mouseover', function toggleHide() {
    smiley.style.display = 'block';
});
btn.addEventListener('mouseout', function toggleHide() {
    smiley.style.display = 'none';
});