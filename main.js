canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_y = 10;
car1_x = 10;
car1_h = 90;
car1_w = 100;
c1 = "REAL CAR 1.png";

car2_y = 10;
car2_x = 10;
car2_h = 90;
car2_w = 100;
c2 = "REAL CAR 2.png";

t = "tracky.png";

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = t;   // load image

    car1 = new Image(); //defining a variable with a new image
    car1.onload = uploadcar1; // setting a function, onloading this variable
    car1.src = c1;   // load image

    car2 = new Image(); //defining a variable with a new image
    car2.onload = uploadcar2; // setting a function, onloading this variable
    car2.src = c2;   // load image
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1, car1_x, car1_y, car1_w, car1_h);
}

function uploadcar2() {
    ctx.drawImage(car2, car2_x, car2_y, car2_w, car2_h);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }

        if(keyPressed == '87')
        {
            u();
            console.log("up");
        }
        if(keyPressed == '83')
        {
            d();
            console.log("down");
        }
        if(keyPressed == '65')
        {
            l();
            console.log("left");
        }
        if(keyPressed == '68')
        {
            r();
            console.log("right");
        }

        if (car1_x > 670){
            console.log("Car 1 Won");
            document.getElementById("tusk").innerHTML = "Car 1 Won!!";
            window.location = "Who Won.html";
        }
        
        if (car2_x > 670){
            console.log("Car 2 Won!!");
            document.getElementById("tusk").innerHTML = "Car 2 Won!!";
            window.location = "Who Won.html";
        }
            
}

function up()
{
    if(car1_y >=0)
    {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
         uploadBackground();
         uploadcar1();
         uploadcar2();
    }
}






function down()
{
    if(car1_y <=500)
    {
        car1_y =car1_y+ 10;
        console.log("When down arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function left()
{
    if(car1_x >= 0)
    {
        car1_x =car1_x - 10;
        console.log("When left arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}



function right()
{
    if(car1_x <= 700)
    {
        car1_x =car1_x + 10;
        console.log("When right arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
   }
}








































function u()
{
    if(car2_y >=0)
    {
        car2_y = car2_y - 10;
        console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
         uploadBackground();
         uploadcar1();
         uploadcar2();
    }
}






function d()
{
    if(car2_y <=500)
    {
        car2_y =car2_y+ 10;
        console.log("When down arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function l()
{
    if(car2_x >= 0)
    {
        car2_x =car2_x - 10;
        console.log("When left arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}



function r()
{
    if(car2_x <= 700)
    {
        car2_x =car2_x + 10;
        console.log("When right arrow is pressed,  x = " + car2_x + " | y = " +car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
   }
}



