"use strict"

import Enemy from "./enemy.js";
import Player from "./player.js";
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function game() {
    const self = {};
    const player = new Player();
    const enemy = new Enemy();
    document.addEventListener("DOMContentLoaded", function(event) {
        player.drawPlayer(0,0);
        player.talk('Olá me chamo Jõao Matheus! Como você se chama?');
        enemy.drawEnemy(0,0);
        self.keyboardListener();
    });
    self.message = function() {
        const text = document.getElementById("text-message").value;
        player.talk(`Seja bem vindo, ${text}!`);
    }
    self.keyboardListener = function() {
       document.addEventListener("keyup",  (event)=>{
            switch (event.code) {
                case "ArrowUp":
                    player.moveToUp();
                    break;
                case "ArrowDown":
                    player.moveToDown();
                    break;
                case "ArrowLeft":
                    player.moveToLeft();
                    break;
                case "ArrowRight":
                    player.moveToRight();
                    break;
                default:
                    return;
            }
       })
    }
    
    return {
        message:self.message
    }
}

window.message = game().message;
