import canvas from "./canvas.js";

const PLAYER_SIZE = 48
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
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(this.image, i * PLAYER_SIZE, j * PLAYER_SIZE, PLAYER_SIZE, PLAYER_SIZE, this.posX, this.posY, this.width, this.height);
        }
    }
    talk = function (message) {
        this.ctx.clearRect(0, 130, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "#000";
        this.ctx.font = "24px Roboto bold"
        this.ctx.fillText(message, 5, 475);
    }
    async moveToUp() {
        if (this.posY <= 20) return;

        for (let i = 0; i < 4; i++) {
            await sleep(300)
            this.posX = this.posX;
            this.posY = this.posY - 5;
            this.drawPlayer(2, i);

        }
    }

    async moveToDown() {
        if (this.posY >= this.canvas.height - (this.height+20)) return;

        for (let i = 0; i < 4; i++) {
            await sleep(300)
            this.posX = this.posX;
            this.posY = this.posY + 5;
            this.drawPlayer(0, i);

        }
    }

    async moveToRight() {
        if (this.posX >= this.canvas.width - (this.width+20)) return;

        for (let i = 0; i < 4; i++) {
            await sleep(300)
            this.posX = this.posX + 5;
            this.posY = this.posY;
            this.drawPlayer(3, i);
        }
    }

    async moveToLeft() {
        if (this.posX <= 20) return;
        for (let i = 0; i < 4; i++) {
            await sleep(300)
            this.posX = this.posX - 5;
            this.posY = this.posY;
            this.drawPlayer(1, i);
        }
    }


}