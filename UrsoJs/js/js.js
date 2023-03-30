//VARIÁVEIS GLOBAIS

var imgUrso             = document.getElementById("img-urso");
var quadroAtual         = 0;
var quadroAtualEscada   = 0;
var margem              = 0;
var direcaoUrso         = 0;// 0 para fente, 1 para trás
var ursoEscada          = document.getElementById("img-urso-escada");
var animacao;
var animacaoEscada;
var left                = 116;
var topUrso             = 232;
var direcaoUrsoEscada   = 0;
var quadros             = [
                "./img/urso1.png",
                "./img/urso2.png",
                "./img/urso3.png"
                ];
            
//FUNCIONALIDADES======================================



setTimeout(
    ()=> {
        animacao = setInterval(function() {
            //ANIMAÇÃO DAS PERNAS###################
            if(quadroAtual  == 1){
                imgUrso.src = quadros[2];
                quadroAtual = 2;
               
            } else {
                imgUrso.src = quadros[1];
                quadroAtual = 1;
                
            }
            //#######################################

            //MOVIMENTO==============================
            switch(direcaoUrso){
                case 0://pra frente
                    margem += 20;
                    imgUrso.style = "margin-left: " + margem +"px;";
                    break;
                case 1:
                    margem -= 20;
                    imgUrso.style = "margin-left: " + margem +"px;;";
                    break;
            }
            
            imgUrso.style = "margin-left: " + margem +"px;";

            if(margem >= window.innerWidth - 150 || margem < 0){
                // imgUrso.src = quadros[0];
                // clearInterval(animacao);
                if(direcaoUrso  == 0){
                    direcaoUrso = 1;
                    imgUrso.className = "volta";
                } else {
                    direcaoUrso       = 0;
                    imgUrso.className = "";
                }
            }
            //=======================================
        }, 50);
    },3000
);










// URSO ESCADA =============================================

setTimeout(
    ()=> {
        animacaoEscada = setInterval(function() {
            //ANIMAÇÃO DAS PERNAS###################
            if(quadroAtualEscada  == 1){
                ursoEscada.src    = quadros[2];
                quadroAtualEscada = 2;
               
            } else {
                ursoEscada.src    = quadros[1];
                quadroAtualEscada = 1;
                
            }
            //#######################################

            //MOVIMENTO==============================
            switch(direcaoUrsoEscada){
                case 0://pra frente
                    left    += 38;
                    topUrso -= 21;
                    
                    break;
                case 1:
                    left    -= 37;
                    topUrso += 21;
                   
                    break;
            }
            
            ursoEscada.style     = "left: " + left +"px; ";
            ursoEscada.style.top =  topUrso + "px";
            if(left >= 320 || left < 134){
                ursoEscada.src   = quadros[0];
                
               
                 if(direcaoUrsoEscada     == 0){
                     direcaoUrsoEscada    = 1;
                     ursoEscada.className = "volta";
                 } else {
                    direcaoUrsoEscada     = 0;
                    ursoEscada.className  = "";
                    
                    clearInterval(animacaoEscada);
                }
            }
            //=======================================
        }, 250);
    },3000
);

//========================================================