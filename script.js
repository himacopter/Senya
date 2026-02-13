// script.js

function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatHeart(); 
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure?'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; 
        yesButton.style.fontSize = newSize + 'px';
    }
}

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200);
    
    setTimeout(function() {
        clearInterval(interval);
        // Clear the inline style so the CSS light pink takes back over
        document.body.style.backgroundColor = '#FADADD'; 
        if (callback) {
            callback();
        }
    }, 2000);
} // Closing brace for flashRainbowColors was fixed here

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif';
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCatHeart() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif';
    catHeartImage.alt = 'Cat Heart';
    
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        
        var letter = document.createElement('div');
        letter.id = 'personal-letter';
        
        letter.innerHTML = `
            <img src="us.jpg" alt="Our Photo" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="font-family: 'Sacramento', cursive; color: #FB607F;">Dear Senya,</h2>
            <p>
                We made it through another year together and I just want to say that I'm so so proud of the woman you've become. 
                We've made SO many beautiful memories and taken so many cute photos this year that I just can't wait for what's in store for us
                next year. I'm truly blessed to have such a lovely girlfriend that is always cherishing and loving me. I hope you like this lil thing thang 
                I put together! I love you Senyacopter &lt;3333333 Here's to many many more Valentine's together c:
            </p>
            <p>Happy Valentine's Day!</p>
            <div style="margin-top: 15px; font-weight: bold;">Love, Logan</div>
        `;
        
        imageContainer.appendChild(letter);
        document.getElementById('options').style.display = 'none';
    };
}

displayCat();