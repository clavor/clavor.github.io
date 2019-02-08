// Trigger animation event when element is scrolled within view

var videos = document.getElementsByClassName('should-bounce');
var btns = document.getElementsByClassName('should-reveal');
var homeBtns = $('should-hover-animation');

function checkScrollBounce() {

    for(var i = 0; i < videos.length; i++) {

        var video = videos[i];
        var fraction = .8;

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                console.log('Visible');
                video.style.visibility='visible';
                $(video).addClass('bounce');
            } else {
                console.log('Hidden');
                video.style.visibility='hidden';
            }

    }

}

function checkScrollReveal() {

    for(var i = 0; i < btns.length; i++) {

        var video = btns[i];
        var fraction = .8;

        var x = video.offsetLeft, y = video.offsetTop, w = video.offsetWidth, h = video.offsetHeight, r = x + w, //right
            b = y + h, //bottom
            visibleX, visibleY, visible;

            visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
            visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

            visible = visibleX * visibleY / (w * h);

            if (visible > fraction) {
                console.log('Visible');
                video.style.visibility='visible';
                $(video).addClass('reveal');
            } else {
                console.log('Hidden');
            }

    }

}

window.addEventListener('scroll', checkScrollReveal, false);
window.addEventListener('scroll', checkScrollBounce, false);


window.addEventListener('resize', checkScrollBounce, false);
window.addEventListener('resize', checkScrollReveal, false);