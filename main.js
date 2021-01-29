canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
nasa_Images=["mar.jpg","m.jpg","among us.jpg","12.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
backround_img=nasa_Images[random_number];
rover_img="rover.png";
function add()
{
    backround_imgtag=new Image();
    backround_imgtag.onload=uploadbackround;
    backround_imgtag.src=backround_img;
    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_img;

}
function uploadbackround(){
ctx.drawImage(backround_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
    }
    window.addEventListener("keydown",mykeydown);
    function mykeydown(e){
        keyPressed=e.keyCode;
        console.log(keyPressed);
        if(keyPressed=='38')
        {
        up();
        console.log("up");
        }
        if(keyPressed=='40')
        {
        down();
        console.log("down");
        }
        if(keyPressed=='37')
        {
        left();
        console.log("left");
        }
        if(keyPressed=='39')
        {
        right();
        console.log("right");
        }
    }
function up(){
if(rover_y>=0)
{
    rover_y=rover_y-10;
    console.log("when up arrow is pressed, x= "+ rover_x + "y=" + rover_y);
    uploadbackround();
    uploadrover();
}
}
function down(){
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log("when down arrow is pressed, x= "+ rover_x + "y=" + rover_y);
        uploadbackround();
        uploadrover();
    }
}
function left(){
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, x= "+ rover_x + "y=" + rover_y);
        uploadbackround();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700)
    {
        rover_x=rover_x+10;
        console.log("when right arrow is pressed, x= "+ rover_x + "y=" + rover_y);
        uploadbackround();
        uploadrover();
    }
}



