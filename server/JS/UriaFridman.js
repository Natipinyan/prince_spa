let prees1= document.getElementById("button1");
let prees2= document.getElementById("button2");
let prees3= document.getElementById("button3");
let prees4= document.getElementById("button4");

let image1 = "../pictures/i1.jpg";
let image2 = "../pictures/i2.jpg";
let image3 = "../pictures/i3.jpg";
let image4 = "../pictures/i4.jpg";

const images = [image1,image2,image3,image4];
const buttons = [prees1,prees2,prees3,prees4];
let i = -1;

function nextPicture(){
    i++;
    if(i==buttons.length){
        i=0;
    }
    buttons[i].checked=true;
    pictureChange();
}

function previousPicture(){
    i--;
    if(i<0){
        i=buttons.length-1;
    }
    buttons[i].checked=true;
    pictureChange();
}

function pictureChange(){
    for(i=0; i < buttons.length; i++){
        if(buttons[i].checked){
            document.getElementById("pictures").src=images[i];
            return i;
        }
    }
}

window.onload = function() {
    i = 0;
    buttons[i].checked = true;
    pictureChange();
};
