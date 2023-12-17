let heroi = "Espadachim Negro";
let experiencia = 1000;
let patente = "madeira";

if (experiencia >= 10000) {patente = "Radiante";}
        else if (experiencia >= 9001 && experiencia <= 10000) {patente = "Imortal";} 
                else if (experiencia >= 8001 && experiencia <= 9000) {patente = "Ascendente";} 
                        else if (experiencia >= 7001 && experiencia <= 8000) {patente = "Diamante";} 
                                else if (experiencia >= 6001 && experiencia <= 7000) {patente = "Platina";}
                                        else if (experiencia >= 5001 && experiencia <= 6000) {patente = "Ouro";} 
                                                else if (experiencia >= 2001 && experiencia <= 5000) {patente = "Prata";}
                                                        else if (experiencia >= 1001 && experiencia <= 2000) {patente = "Bronze";}
                                                                else if (experiencia <= 1000) {patente = "Ferro";                                                              }

console.log("O Herói de nome " + heroi + " está nível " + patente + ".");
    

    