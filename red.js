class Truism {
    constructor () {
        // TODO pull random truism from text file
        let truism = 'you will never feel like it';
        
        this.setupElements(truism);
    }
    
    setupElements (truism) {
        this.ele = document.createElement('div');
        this.textEle = document.createElement('p');
        
        this.ele.title = 'Double click to dismiss this truism.';
        this.textEle.innerText = truism;

        this.ele.addEventListener('dblclick', e => {
            document.body.removeChild(this.ele);
        });    

        this.ele.appendChild(this.textEle);
    }

    addToDom () {        
        document.body.prepend(this.ele);
    }
    
    styleMarble () {
        this.ele.classList.add('marble-bench');
        
        let url = chrome.extension.getURL('imgs/blackandwhite_small.jpg');
        this.ele.style.backgroundImage = `url(${url})`;
    }
}


// TODO randomize when to add a truism (~30% of the time?)
if (isEmptyWall()) {
    let truism = new Truism();
    
    // TODO randomize styling
    truism.styleMarble();

    truism.addToDom();
}

function isEmptyWall () {
    let bodyStyles = window.getComputedStyle(document.body);
    let bgStyle = bodyStyles.getPropertyValue('background');

    return !bgStyle.includes('url');
}