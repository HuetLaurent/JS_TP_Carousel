const img1 = document.getElementById("image1")
img1.hidden = false;

const img2 = document.getElementById("image2")
img2.hidden = false;

const img3 = document.getElementById("image3")
img3.hidden = true;

const img4 = document.getElementById("image4")
img4.hidden = true;

const img5 = document.getElementById("image5")
img5.hidden = false;

let a = 0;

/*let slide = (a,b) => {
    $(a).animate({
        marginLeft : "250px",
    });
    let hide = setInterval(hideInterval,450)
    function hideInterval(){
        a.hidden = true;
        b.hidden = false;
    }
}*/

//Navigation carousel simple sans animation

/*const simpleSlide = (a, b) => {
    a.hidden = true;
    b.hidden = false;
}*/

const betterSlideA = (a, b, c) => {
    
    a.hidden = false;
    c.hidden = false;

    a.style.left = 308+'px';
    b.style.left = 508+'px';
    c.style.left = 708+'px';

    $(a).animate({
        opacity: '0.0',
    });
    $(b).animate({
        left: '308px',
        opacity: '0.0',
    });
    $(c).animate({
        left: '508px',
        opacity: '1.0',
    });

    const myTimeout = setTimeout(temps, 450);
    function temps(){
        a.hidden = true;
    }
}

const betterSlideB = (a, b, c) => {
    
    a.hidden = false;
    c.hidden = false;

    a.style.left = 308+'px';
    b.style.left = 508+'px';
    c.style.left = 708+'px';

    $(a).animate({
        left: '508px',
        opacity: '1.0',
    });
    $(b).animate({
        left: '708px',
        opacity: '0.0',
    });
    $(c).animate({
        opacity: '0.0',
    });

    const myTimeout = setTimeout(temps, 450);
    function temps(){
        c.hidden = true;
    }
}

$("#droite").click(function () {
    if (a == 0) {
        a++;
        betterSlideA(img5, img1, img2);
    } else if (a == 1) {
        a++;
        betterSlideA(img1, img2, img3);
    } else if (a == 2) {
        a++;
        betterSlideA(img2, img3, img4);
    } else if (a == 3) {
        a++;
        betterSlideA(img3, img4, img5);
    } else if (a == 4) {
        a = 0;
        betterSlideA(img4, img5, img1);
    }
});

$("#gauche").click(function () {
    if (a == 4) {
        a--;
        betterSlideB(img4, img5, img1);
    } else if (a == 3) {
        a--;
        betterSlideB(img3, img4, img5);
    } else if (a == 2) {
        a--;
        betterSlideB(img2, img3, img4);
    } else if (a == 1) {
        a--;
        betterSlideB(img1, img2, img3);
    } else if (a == 0) {
        a = 4;
        betterSlideB(img5, img1, img2);
    }
});