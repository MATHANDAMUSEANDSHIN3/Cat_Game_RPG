let playerState = "idle_left";
const dropdown = document.getElementById("animations");
dropdown.addEventListener("change",function(e){
    playerState=e.target.value;
})

const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext ("2d");
const canvas_width = canvas.width = 64;
const canvas_heigth = canvas.height = 68;

const playerImage = new Image();
playerImage.src = "Sprite_Cat.png";
const spriteWidth = 64;
const spriteHeight = 68;

let gameFrame = 0;
const staggerFrames = 8;
const spriteAnimations = [];
const animationStates = [
{
    name: "idle_left",
    frames: 4,
},
{
    name: "run_left",
    frames: 4,
},
{
    name: "idle_rigth",
    frames: 4,
},
{
    name: "run_rigth",
    frames: 4,
},
{
    name: "sit",
    frames: 4,
}
];

animationStates.forEach((state, index)=>{
let frames ={
loc: [],
}
for (let j = 0; j < state.frames; j++){
    let positionX = j *spriteWidth;
    let positionY = index *spriteHeight
    frames.loc.push({x: positionX, y: positionY});
}
spriteAnimations[state.name] = frames;
});
   function animate(){
    ctx.clearRect(0,0, canvas_width, canvas_heigth)
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;

   let frameX = spriteWidth*position;
   let frameY = spriteAnimations[playerState].loc[position].y;


    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0,0, spriteWidth, spriteHeight);
    

    gameFrame++;
    
    requestAnimationFrame(animate);
};

animate();