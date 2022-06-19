import canvas from "./canvas.js";

const PLAYER_SIZE = 48
const STEP_SIZE = 5
const WIDTH =  620*0.9;
const HEIGHT = 480*0.9;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default class Enemy {

    width;
    height;
    posX;
    posY;
    ctx;
    image;
    canvas;
    constructor() {
        this.width = 32;
        this.height = 64;
        this.posX = 150;
        this.posY = 120;
        this.ctx = canvas.getContext().ctx;
        this.canvas = canvas.getContext().canvas;
      
    }

    drawEnemy = function (i, j) {

        this.image = new Image();
        this.image.src = `assets/img/pumpkin_monster.png`;
        this.image.onload = () => {
            this.ctx.clearRect(this.posX, this.posY, this.width, this.height);
            this.ctx.drawImage(this.image, i * 32, j * 64, 32, 64, this.posX, this.posY, this.width*1.4, this.height*1.4);
        }
    }
    async moveToUp() {
        this.moveIt('UP')
    }

    async moveToDown() {
        this.moveIt('DOWN')

    }

    async moveToRight() {
        this.moveIt('RIGHT')

    }

    async moveToLeft() {
       this.moveIt('LEFT')
    }

    async moveIt(direction) {
        let position = this.posY
        let imageIndex = 2;
        let x = 0;
        let y = -1;
        switch(direction){
            case  "UP":
                break;
            case  "DOWN":
                position = HEIGHT - this.posY;
                imageIndex = 0;
                y = 1
                break;
            case  "LEFT":
                position = this.posX;
                y = 0
                x = -1
                imageIndex = 1;
                break;
            case "RIGHT": 
                position = WIDTH - this.posX
                x = 1
                y =  0
                imageIndex = 3;
                break;
            default:
                break;
        }

        if (position <= PLAYER_SIZE/2) return;
        for (let i = 0; i < 4; i++) {
            await sleep(300)
            this.posX = this.posX + STEP_SIZE*x
            this.posY = this.posY + STEP_SIZE*y
            this.drawPlayer(imageIndex, i);
        }
        await sleep(300)
        this.drawPlayer(imageIndex, 0);
    }
}