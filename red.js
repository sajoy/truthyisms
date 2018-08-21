class Truism {
    constructor () {
        // TODO pull random truism from text file
        let truism = 'you will never feel like it';
        
        let url = chrome.extension.getURL('truisms.json');
        fetch(url).then(res => {
            return res.json();
        }).then(data => {
            let randomInt = Math.floor(Math.random() * data.length);
            truism = data[randomInt];

            this.setupElements(truism);
            
            // TODO randomize styling
            this.styleMarble();
        });
        
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
        this.addToDom();
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
if (isEmptyWall() && shouldAdd()) {
    let truism = new Truism();
}

function isEmptyWall () {
    let bodyStyles = window.getComputedStyle(document.body);
    let bgStyle = bodyStyles.getPropertyValue('background');

    return !bgStyle.includes('url');
}

function shouldAdd () {
    // be true 30%-ish of the time
    return Math.floor(Math.random() * Math.floor(10)) < 4;
}