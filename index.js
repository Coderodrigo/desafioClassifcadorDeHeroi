let heroi = "Espadachim Negro";
let experiencia = 5000;
let patente = "madeira";

if (experiencia >= 10000) {
  patente = "radiante";
} else if (experiencia >= 9001 && experiencia <= 10000) {
  patente = "imortal";
} else if (experiencia >= 8001 && experiencia <= 9000) {
  patente = "ascendente";
} else if (experiencia >= 7001 && experiencia <= 8000) {
  patente = "platina";
} else if (experiencia >= 6001 && experiencia <= 7000) {
  patente = "ouro";
} else if (experiencia >= 5001 && experiencia <= 6000) {
  patente = "prata";
} else if (experiencia >= 2001 && experiencia <= 5000) {
  patente = "bronze";
} else if (experiencia >= 1001 && experiencia <= 2000) {
  patente = "ferro";
}

console.log("O Herói de nome " + heroi + " está nível " + patente + ".");
    

    