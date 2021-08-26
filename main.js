song_1="";
song_2="";
function preload(){
    song_1= loadSound("Mabel - Don t Call Me Up.mp3");
    song_2= loadSound("Alan Walker & Ava Max - Alone, Pt.II.mp3");
}
function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song_1.play();
    song_2.play();
}