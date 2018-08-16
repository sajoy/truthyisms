let p = document.querySelectorAll('p');
p.forEach(paragraph => {
    paragraph.style.color = 'green';
})

let b = document.body;
let h = b.scrollHeight;


if (isEmptyWall()) {

    let plaque = document.createElement('div');
    plaque.classList.add('marble-bench');
    plaque.innerText = 'you will never feel like it';

    b.appendChild(plaque);
    
}
    
function isEmptyWall () {
    let bodyStyles = window.getComputedStyle(document.body);
    let bgStyle = bodyStyles.getPropertyValue('background');

    return !bgStyle.includes('url');
}