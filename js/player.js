import canvas from "./canvas.js";

const PLAYER_SIZE = 48
const STEP_SIZE = 5
const WIDTH =  620*0.9;
const HEIGHT = 480*0.9;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export default class Player {

    width;
    height;
    posX;
    posY;
    ctx;
    image;
    canvas;
    constructor() {
        this.width = 64;
        this.height = 64;
        this.posX = 20;
        this.posY = 20;
        this.ctx = canvas.getContext().ctx;
        this.canvas = canvas.getContext().canvas;
      
    }

    drawPlayer = function (i, j) {

        this.image = new Image();
        this.image.src = `assets/img/george.png`;
        this.image.onload = () => {
            this.ctx.clearRect(this.posX, this.posY, this.width, this.height);
            this.ctx.drawImage(this.image, i * PLAYER_SIZE, j * PLAYER_SIZE, PLAYER_SIZE, PLAYER_SIZE, this.posX, this.posY, this.width, this.height);
        }
    }
    talk = function (message) {
        this.ctx.clearRect(0, HEIGHT*0.9, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "#000";
        this.ctx.font = "24px Roboto bold"
        this.ctx.fillText(message, 5, 475);
        window.setTimeout(
            () => this.ctx.clearRect(0, HEIGHT*0.9, this.canvas.width, this.canvas.height),
            1500
        )
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