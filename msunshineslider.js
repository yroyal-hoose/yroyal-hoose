//These variables should be all you need to change in the javascript file
var imagecount = 1; //starting image/slide, doesn't need to change
var total = 4; //total number of images/slides
var slidespeed = 5000; //change this to change speed of slider 5000 = 5s

//------All the fancy code------
//store our sliding function as a variable so we don't have to write it out all the time
var slidefunction = function slideA(x){
    //add to the imagecount to change active slide number
    imagecount = imagecount+1;
    //if that active slide number is greater than total number of slides, set to first slide
    if(imagecount > total){imagecount=1;}
    //if that active slide number is less than 1 set to image total this is used for the prev and next buttons
    if(imagecount < 1){imagecount=total;}
    //grab all of your elements with the class .slide
    var Image = document.getElementsByClassName('slide');
    //now for every slide
    for (i = 0; i < Image.length; i++) {
        //make the display as none
        Image[i].style.display = "none";
    }
    //grab all your image slider dots
    var dots = document.getElementsByClassName("dot");
     for (i = 0; i < dots.length; i++) {
         //change every dot's class from active to nothing
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //make the current slide visible
    Image[imagecount-1].style.display = "block";
    //make the active dot active
    dots[imagecount-1].className += " active";
}
//autoplay the slideA function
var autoslide = window.setInterval(slidefunction, slidespeed);
//This function works with the current slide dot buttons
function currentSlide(x){
    //stop the autoplay so we can reset the timer
    clearInterval(autoslide);
    //change the active slide number to the given number
    imagecount = x;
    //if that active slide number is greater than total number of slides, set to first slide
    if(imagecount > total){imagecount=1;}
    //if that active slide number is less than 1 set to image total this is used for the prev and next buttons
    if(imagecount < 1){imagecount=total;}
    //grab all of your elements with the class .slide
    var Image = document.getElementsByClassName('slide');
    //now for every slide
    for (i = 0; i < Image.length; i++) {
        //make the display as none
        Image[i].style.display = "none";
    }
    //grab all your image slider dots
    var dots = document.getElementsByClassName("dot");
     for (i = 0; i < dots.length; i++) {
         //change every dot's class from active to nothing
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //make the current slide visible
    Image[imagecount-1].style.display = "block";
    //make the active dot active
    dots[imagecount-1].className += " active";
    //these numbers -1 because in the array you create the #1 is actually 0
    //make the slides auto run again
     autoslide = window.setInterval(slidefunction, slidespeed);
}

//make the next/prev buttons work
function slide(x){
    //clear the auto timer
    clearInterval(autoslide);
    //get the current image
    imagecount = imagecount+=x;
    //if that active slide number is greater than total number of slides, set to first slide
    if(imagecount > total){imagecount=1;}
    //if that active slide number is less than 1 set to image total this is used for the prev and next buttons
    if(imagecount < 1){imagecount=total;}
    //grab all of your elements with the class .slide
    var Image = document.getElementsByClassName('slide');
    //now for every slide
    for (i = 0; i < Image.length; i++) {
        //make the display as none
        Image[i].style.display = "none";
    }
    //grab all your image slider dots
    var dots = document.getElementsByClassName("dot");
     for (i = 0; i < dots.length; i++) {
         //change every dot's class from active to nothing
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //make the current slide visible
    Image[imagecount-1].style.display = "block";
    //make the active dot active
    dots[imagecount-1].className += " active";
    //autoplay the slides again
     autoslide = window.setInterval(slidefunction,slidespeed);
}
