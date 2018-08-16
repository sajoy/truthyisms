let p = document.querySelectorAll('p');
p.forEach(paragraph => {
    paragraph.style.color = 'green';
})

let b = document.body;
let h = b.scrollHeight;


if (isEmptyWall()) {

    let plaque = document.createElement('div');
    plaque.classList.add('marble-bench');
    let p = document.createElement('p');
    p.innerText = 'you will never feel like it';
    
    let url = chrome.extension.getURL('imgs/blackandwhite_small.jpg');
    plaque.style.backgroundImage = `url(${url})`;

    plaque.appendChild(p);
    b.appendChild(plaque);

}
    
function isEmptyWall () {
    let bodyStyles = window.getComputedStyle(document.body);
    let bgStyle = bodyStyles.getPropertyValue('background');

    return !bgStyle.includes('url');
}