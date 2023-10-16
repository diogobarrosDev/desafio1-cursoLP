let nameHero = "Capitão Barros";
let xpHero = 40;
let classHero;

if (xpHero <= 1000) {
    classHero = "Ferro";
} else if (xpHero >= 1001 && xpHero <= 2000) {
    classHero = "Bronze";
} else if (xpHero >= 2001 && xpHero <= 5000) {
    classHero = "Prata";
} else if (xpHero >= 6001 && xpHero <= 7000) {
    classHero = "Ouro";
} else if (xpHero >= 7001 && xpHero <= 8000) {
    classHero = "Platina";
} else if (xpHero >= 8001 && xpHero <= 9000) {
    classHero = "Ascendente";
} else if (xpHero >= 9001 && xpHero <= 10000) {
    classHero = "Imortal";
} else if (xpHero >= 10001) {
    classHero = "Radiante";
}

console.log("O Herói de nome " + nameHero + " está no nível de " + classHero)
    
