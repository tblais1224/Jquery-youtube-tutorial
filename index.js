'use strict';
//every 1000ms run the function
// var myInterval = setInterval(function () {
//     console.log(new date());
// }, 1000);

$(function () {
    setInterval(function () {
        $('#slider .slides').animate({
            'margin-left': '-=720px'
        }, 1000)
    }, 3000);
});