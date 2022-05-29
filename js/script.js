"use strict"

import player from "./player.js";

function game() {
    const self = {};

    document.addEventListener("DOMContentLoaded", function(event) {
        player.drawPlayer('000');
        player.talk('Olá me chamo Jõao Matheus! Como você se chama?');
        self.keyboardListener();
    });
    self.message = function() {
        const text = document.getElementById("text-message").value;
        player.talk(`Seja bem vindo, ${text}!`);
    }
    self.keyboardListener = function() {
       document.addEventListener("keyup",(event)=>{
           if(['ArrowDown','ArrowUp','ArrowLeft','ArrowRight'].indexOf(event.code) != -1) {
               player.moveIt(event.code);
           }
       })
    }
    
    return {
        message:self.message
    }
}

window.message = game().message;
