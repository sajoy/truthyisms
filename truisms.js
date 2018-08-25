// WITH PERSEVERANCE YOU CAN DISCOVER ANY TRUTH
// --- a class to conjure truisms and truthyisms for the internet

class Truism {
    constructor () {
        let url = this.getUrl();
        fetch(url).then(res => {
            return res.json();
        }).then(data => {
            let truism = data[randomInt(0, data.length - 1)];
            
            this.setupElements(truism.toUpperCase());
            this.styleElements();
        });   
    }
    
    getUrl () {
        let urls = [
            chrome.extension.getURL('truisms.json'), // from Jenny Holzer's Truisms
            chrome.extension.getURL('truthyisms.json') // open source tech-related truthyisms
        ];

        return urls[randomInt(0, urls.length - 1)];
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

    styleElements () {       
        // TODO randomize styling
        this.styleMarble();
    }

    addToDom () {
        document.body.prepend(this.ele);
    }

    styleLED () {
        // TODO style me!
        /*
            - on the left hand side of the site
            - marquee upwards
            - circle / dot letter styling (needs font)
            - red or yellow text on black bg

        */
    }

    styleProjection () {
        // TODO style me!
        /*
            - gray or white translucent text
            - overlay on an image 

        */
    }
    
    styleMarble () {
        this.ele.classList.add('marble-bench');
        
        // TODO randomize bg marble img
        let url = chrome.extension.getURL('imgs/blackandwhite_small.jpg');
        this.ele.style.backgroundImage = `url(${url})`;
    }
}







// ROUTINE IS A LINK WITH THE PAST
// --- helpful functions

function isEmptyWall () {
    // avoid truisms potentially clashing with background images
    let bodyStyles = window.getComputedStyle(document.body);
    let bgStyle = bodyStyles.getPropertyValue('background');

    return !bgStyle.includes('url');
}

function itsTime () {
    // be true 30%-ish of the time
    let rateOfAppearance = .3;
    return (randomInt(0, 10) / 10) < rateOfAppearance;
}

function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}







// A SINCERE EFFORT IS ALL YOU CAN ASK
// --- decides if it's appropriate to add a truism and does so

if (isEmptyWall() && itsTime()) { 
    new Truism();
}