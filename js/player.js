import canvas from "./canvas.js";

function player() {

    let self = {posX:20,posY:20,...canvas.getContext()};

    self.init = function (index) {
        const image = canvas.getImage();
        image.setAttribute("src", `assets/img/tile${index}.png`);
        self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
        self.image = document.getElementById('player');
    }
    
    self.drawPlayer = function (index) {
        self.init(index);
        self.ctx.drawImage(self.image, self.posX, self.posY, 32, 32);
        self.ctx.fillStyle = "#FF0000";
    }
    self.talk = function (message) {
        self.ctx.clearRect(0, 130, self.canvas.width, self.canvas.height);
        self.ctx.fillStyle = "#000";
        self.ctx.fillText(message, 5, 145);
    }
    self.moveIt = function(keyCode) {

        switch (keyCode) {
            case "ArrowUp":
                if (self.posY <= 0) return;
                self.posX = self.posX;
                self.posY = self.posY - 5;
                self.drawPlayer('002');
                break;
            case "ArrowDown":
                if (self.posY >= self.canvas.height-32) return;
                self.posX = self.posX;
                self.posY = self.posY + 5;
                self.drawPlayer('000');
                break;
            case "ArrowLeft":
                if (self.posX <= 0) return;
                self.posX = self.posX -5;
                self.posY = self.posY;
                self.drawPlayer('001');image
                break;
            case "ArrowRight":
                if (self.posX >= self.canvas.width-32) return;
                self.posX = self.posX +5;
                self.posY = self.posY;
                self.drawPlayer('003');
                break;
            default:
                return;
        }
    }
    
    return self;
}
export default player();