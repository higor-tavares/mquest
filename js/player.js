import canvas from "./canvas.js";

export default class Player{

    width;
    height;
    posX;
    posY;
    ctx;
    image;
    canvas;

    constructor(){
        this.width =  64;
        this.height = 64;
        this.posX = 20;
        this.posY = 20;
        this.ctx = canvas.getContext().ctx;
        this.canvas = canvas.getContext().canvas;
    }

    init = function (index) {
        this.image = new Image();
        this.image.src = `assets/img/tile${index}.png`;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    drawPlayer =  function(index) {
        this.init(index);
        this.image.onload = () => {
            this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        }
    }
    talk = function (message) {
        this.ctx.clearRect(0, 130, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = "#000";
        this.ctx.font = "18px Roboto bold"
        this.ctx.fillText(message, 5, 460);
    }
    moveIt = function(keyCode) {

        switch (keyCode) {
            case "ArrowUp":
                if (this.posY <= 0) return;
                this.posX = this.posX;
                this.posY = this.posY - 5;
                this.drawPlayer('002');
                break;
            case "ArrowDown":
                if (this.posY >= this.canvas.height-this.height) return;
                this.posX = this.posX;
                this.posY = this.posY + 5;
                this.drawPlayer('000');
                break;
            case "ArrowLeft":
                if (this.posX <= 0) return;
                this.posX = this.posX -5;
                this.posY = this.posY;
                this.drawPlayer('001');
                break;
            case "ArrowRight":
                if (this.posX >= this.canvas.width-this.width) return;
                this.posX = this.posX +5;
                this.posY = this.posY;
                this.drawPlayer('003');
                break;
            default:
                return;
        }
    }
}